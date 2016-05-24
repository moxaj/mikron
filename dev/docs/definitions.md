# Implementation

## Definitions

Before discussing the concrete implementation, I'd like to describe some key constructs and techniques which I have used.

### Namespaces

Clojure codebases are divided into _namespaces_. They are mappings from _symbols_ to _vars_, which are mutable containers. As with most Clojure constructs, they are dynamic, meaning they can be created, examined and modified at runtime. A typical Clojure(Script) file begins with a namespace declaration, where you import things the current namespace relies on. Example:

```
(ns foo.bar.baz
  [:requires [clojure.string :refer [join]]])
;; We name the current namespace 'foo.bar.baz', which requires the function 'join'
;; from the namespace 'clojure.string'
```

### Pure functions

Pure functions are functions in the mathematical sense - they do not have side effects, have deterministic return values and depend upon no external values. They are crucial in functional programming, as they are easier to _test_, _compose_, _modify_, _mock_, etc. .

### Immutable data structures

Most of Clojure's built in data structures (_lists_, _vectors_, _sets_, _maps_) are immutable - they cannot be modified in place. Just like you cannot modify the number `42`, you cannot modify the vector `[1 2 3]`. However, you can make a slightly modified version of it; for example, `(conj [1 2 3] 4)` evaluates to `[1 2 3 4]`, and the original vector remains unchanged.

Immutables values have great properties, but come with a slight performance decrease. For most use cases, this is not an issue, thanks to their clever implementations (_HAMT_, and more recently, _CHAMP_).

### Quoting

In Clojure, it is possible to _quote_ code, which tells the compiler to treat it as a literal data structure. For example, `(+ 1 2)` evaluates to `3`, but `'(+ 1 2)` or `(quote (+ 1 2))` is an actual _list_ with 3 elements: the symbol `+` and two numbers.

_Syntax quoting_ is quoting with two enhancements:

1. the quoted symbols will be _namespace qualified_. If the symbol `map` would evaluate to the function `clojure.core/map`, the syntax quoted symbol `` `map`` would evaluate to the symbol `clojure.core/map`. This helps against symbol name collisions.
2. inner expressions can be _unquoted_. For instance, `` `(+ 1 ~(+ 2 3))`` evaluates to the list `(+ 1 5)`.

_Unqoute splicing_ can be used to unquote sequences and expand them into their parent form. As an example, `` `(+ 1 ~@(list 2 3))`` evaluates to the list `(+ 1 2 3)`.

These three techniques serve as the basis for metaprogramming in Clojure.

### Macros

Macros in the Lisp world are functions which are invoked at compile time by the compiler. They somewhat resemble C macros, but are a lot more powerful. For instance, the macro `clojure.core/when` is implemented as such:

```
(defmacro when [condition & body]
  `(if ~condition
     (do ~@body)))
```

Whenever the compiler sees a call to the macro `when`, it will pass its _unevaluated_ arguments to the body of the macro and evaluate its result instead. So, `(when true 1 2 3)` would be replaced at compile time with the literal structure `(if true (do 1 2 3))`.

Macros provide powerful ways to extend the core language. However, they do not exist at runtime, thus cannot be passed as arguments, unlike regular functions. Their uses cases can be boiled down to 3 categories:

- syntax enhancements, like `when`
- macros which provide _context_ to other functions calls, like `with-open`, similar to `using` blocks from C#
- compile time code generation, for performance reasons

When writing macros, there are a few things to watch out for:

- if the evaluation of their arguments can cause side effects, they should only be evaluated once
- the symbols defined inside the macro should not collide with the symbols defined by the user
- macros can be _contagious_ - since they require their arguments to be passed as literal data, functions built around them may also have to be defined as macros

### Multimethods

Multimethods are the combinations of a _dispatch function_ and one or more _methods_. When invoking a multimethod, the dispatch function is called on its arguments and the concrete function is selected depending on the result. For instance:

```
;; we define a multimethod with the dispatch function ':type'
(defmulti draw-shape :type)

;; if (:type <value>) returns :circle, we draw it as a circle
(defmethod draw-shape :circle [{:keys [radius]}]
  (println (format "I'm drawing a circle with radius %d!"
                   radius)))

;; if (:type <value>) returns :rectangle, we draw it as a circle
(defmethod draw-shape :rectangle [{:keys [width height]}]
  (println (format "I'm drawing a rectangle with width %d and height %d!"
                   width height)))

;; otherwise, we panic
(defmethod draw-shape :default [_]
  (println "I do not know how to draw this!"))

;; Actual usage
(draw-shape {:type :circle :radius 10})
;; => "I'm drawing a circle with radius 10!"

(draw-shape {:type :rectangle :width 5 :height 20})
;; => "I'm drawing a rectangle with width 5 and height 20!"

(draw-shape {:type :banana})
;; => "I do not know how to draw this!"
```

Multimethods can make use of _hierarchies_, which are derivation relationships between names (symbols or keywords).

### Procotols

TODO

### Dynamic binding

_Dynamic binding_, as opposed to _lexical binding_, is a mechanism in which the value is looked up by its name at runtime, rather than at compile time. In clojure, this is implemented with _dynamic variables_:

```
;; the varable *foobar* is declared as dynamic with the initial value 10
(def ^:dynamic *foobar* 10)

(println *foobar*)
;; => 10

(binding [*foobar* 20]
  (println *foobar*))
;; => 20

(println *foobar*)
;; => 10
```

Clojure follows the Common Lisp naming convention (_earmuffs_) and wraps their names with asterisks.

### Closures

Closures are functions with implicitly captured variables. To demonstrate them in Java:

```
interface Foo {
  void bar();
}

public Foo makeFoo() {
  final int k = 10;
  return new Foo() {
    public void bar() {
      System.out.println(k);
    }
  }
}

public void qux() {
  makeFoo().bar(); // would print 10, as it has captured the variable k with value 10
}
```

In Clojure:

```
;; the symbol 'make-foo' is bound to an anonymous function which has captured
;; the value of k
(def make-foo
  (let [k 10]))
    (fn [] (println k))

(make-foo)
;; => 10
```

In JavaScript:

```
var x = 10;
var y = function(console.log(x)); // the function y has captured the value of x
y(); // prints 10
```

### Reader conditionals

Reader conditonals are expressions which evaluate do different values depending on the context of the compiler. They are vital to writing platform-independent code, and have the following syntax:

```
#?(:clj  10
   :cljs 20
   :clr  30)
;; Returns 10, 20 or 30 if we're compiling Clojure,
;; ClojureScript or ClojureCLR respectively.
```
