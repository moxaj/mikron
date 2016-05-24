# Schema DSL

Since mikron serialization is schema-based, the users need a well-defined format to define their schemas. This format may be called an _IDL_ (interface definition language) or a _DSL_ (domain specific language). A good DSL has the following properties:

- easy to learn
- concise, yet expressive enough
- extensible, but not bloated
- its parts are composable

The hard part of making a good DSL is finding the balance between _simplicity_ and _power_. Make it too simple and you lose some features; make it powerful but your lose its simplicity and conciseness.

The mikron DSL is used to define the structure of your message types. Each user-defined type (_custom_ type) is given a name and a definition, which may reference other custom or built-in types. Concerning their syntax, the built-in types can be either _simple_ (like `:byte` or `:string`) or _complex_ (like `[:vector ...]` or `[:record ...]`). Concerning their semantics, the following picture describes their relations:

TODO venn diagram

## Simple types

### `:byte`

8-bit signed integer, ranging from -128 to 127.

### `:ubyte`

8-bit unsigned integer, ranging from 0 to 255.

### `:short`

16-bit signed integer, ranging from -2

<sup>15</sup>

 to 2

<sup>15</sup>

 - 1.

### `:ushort`

16-bit unsigned integer, ranging from 0 to 2

<sup>16</sup>

 - 1.

### `:int`

32-bit signed integer, ranging from -2

<sup>31</sup>

 to 2

<sup>31</sup>

 - 1.

### `:uint`

32-bit unsigned integer, ranging from 0 to 2

<sup>32</sup>

 - 1.

### `:long`

64-bit signed integer, ranging from -2

<sup>63</sup>

 to 2

<sup>63</sup>

 - 1.

### `:varint`

Integer encoded with variable length, also know as _vbyte_.

### `:float`

32-bit floating point number.

### `:double`

64-bit floating point number.

### `:boolean`

1-bit boolean type

### `:char`

A single UTF-8 character.

### `:string`

UTF-8 encoded character string.

### `:raw`

Platform-specific binary format. `byte[]` in Clojure, `ArrayBuffer` in ClojureScript.

### `:keyword`

**edn** keyword (a string-like constant, like `:foo`)

### `:symbol`

**edn** symbol (a name which can be resolved at runtime, like `'foo`)

### `:nil`

A value which is `nil` (the equivalent of Java's `null`).

### `:any`

Any Clojure value which can be printed to a string via `pr-str` and read via `read-string`.

### `:date`

Platform-specific date construct. `java.util.Date` in Clojure, `js/Date` in ClojureScript.

## Complex types

Complex types are represented as vectors, like `[:map :byte :byte]`. Their second item may be a map with optional parameters.

### `[:list :x]`

A list of items, where each item has the type `:x`.

### `[:vector :x]`

A vector of items, where each item has the type `:x`.

### `[:set :x]`

A set of items, where each item has the type `:x`.

### `[:map :x :y]`

A map where each key is of type `:x` and each value is of type `:y`.

### `[:tuple [:x1 ... :xn]]`

A fixed-length vector where the first item is of type `:x1`, ..., the nth item is of type `:xn`.

### `[:record {:k1 :x1 ... :kn :xn}]`

A map with a predefined set of keys `:k1` ... `:kn`, which map to values of types `:x1` ... `:xn` respectively.

### `[:optional :x]`

A value which may `nil` or of type `:x`.

### `[:enum [:v1 ... :vn]]`

A value which is either `:v1` or ... or `:vn`.

### `[:multi selector {:v1 :x1 ... :vn :xn}]`

A union type, where a selector function is provided. If `(selector x)` returns `:vi`, then `x` will be handled as if it was of type `:xi`.

### `[:wrapped {:pre f :post g} :x]`

A wrapped type has 2 functions, `pre` and `post`. Before serialization, the value will be converted with the function `pre`, serialized and deserialized as an `:x`, and finally be converted with the function `post`.

## Composing schemas

You can define all your schemas in a hash-map, with keys as your custom schema names, and values as their definitions. For instance:

```
{:x [:tuple [:float :float]]  ;; x is a tuple of 2 floats, like a coordinate
 :y [:list :x]}               ;; y is a list of x-es

 ;; An example y value could be:
 ;; ([1.0f 2.0f] [3.0f 4.0f])
```

You can arbitrarily nest built-in complex types, and even recursive schema definitions are allowed.

## Examples

The following schema definition describes _box2d_ entities:

```
{:body     [:record {:user-data [:record {:id :int}]
                     :position  :coord
                     :angle     :float
                     :body-type [:enum [:dynamic :static :kinetic]]
                     :fixtures  [:list :fixture]}]
 :fixture  [:record {:user-data [:record {:color :int}]
                     :coords    [:list :coord]}]
 :coord    [:tuple [:float :float]]}
```
