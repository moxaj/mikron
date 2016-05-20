# Technologies used

## Clojure

**Clojure** is a relatively new dynamic, general-purpose language. It is a compiled language, runs primarily on the JVM. Clojure is predominantly a functional language, placing great importance on immutable data structures. Features:

- dynamic development: the Clojure environment is fully dynamic - you can modify most things at runtime and test them immediately via hot reloading. Development is usually aided by a REPL, which provides instantaneous feedback, giving birth to the so called _"REPL driven development"_. The REPL is the heart of interactive development, enabling extremely quick prototyping and ad-hoc testing (which is then usually promoted to unit tests.).
- LISP: Clojure is a member of the _Lisp_ family. Along with many parentheses, it inherits two strong selling points of Lisp languages - the notion of code as data, and macros. Both features are vital to this project, thus will be explained in detail later on.
- Functional programming: although the ideas are decades old, the traits of functional programming are only recently being added to the major OOP languages (Java, C#). These features include higher order functions, partial application, and immutable data structures. In fact, most of the core API is built on the abstractions of these immutable data structures (primarily lists, vectors, sets and maps), therefore Clojure provides literal representations for all these composites.
- Concurrent programming: since most data structures are immutable, they can be readily shared between threads, easing multi-threaded programming greatly. Clojure also provides safe mechanisms to deal with mutable state, alleviating developers from having to deal with locks manually.
- Hosted on the JVM: Clojure was designed to be hosted, and its target is the JVM. It compiles to Java bytecode, thus places great importance on the cooperation with the host language. As a result, Clojure can utilize all the mature features and tools of the JVM world - type system, threads, GC, etc. Moreover, this also means that any piece of code written in Java is invokable from Clojure - each and every Java library is in reach!

## ClojureScript

ClojureScript is a fork of Clojure which compiles to JavaScript. The two languages are syntactically and semantically equivalent for most use cases. As with Clojure, interop with the host language is trivial. With JavaScript, two additional platforms can be reached: the browser and Node.js servers. This makes ClojureScript suitable for front-end development with all the advantages of the functional traits.

## Java

Efficient serialization requires high-performance 'native' frameworks to deal with binary frames. For the Clojure implementation, the **java.nio** package was chosen to handle these operations.

## JavaScript

For the ClojureScript implementation, the **ByteBuffer.js** serves as a view to the lower level primitives - typed ArrayBuffers. Luckily, the public API of **java.nio.ByteBuffer** and **ByteBuffer.js** are similar, so it was easy to abstract away the differences.

## Atom

**Atom** is a lightweight, extensible text editor built upon **Electron**. It's used mainly in the JavaScript / HTML / CSS world, but with certain plugins it can provide a convenient Clojure development environment (**proto-repl** and **parinfer** being the most important).

## Git

**Git** was chosen as the version control system, with **GitHub** as the repository host. It is simple to setup and use, as for solo developers the most basic commands (add, commit, push, pull) suffice.

## Leiningen

**Leiningen** is the most popular build tool and dependency manager for Clojure. It focuses on project automation and declarative configuration, therefore it is easy to learn and powerful enough for most use cases. If you want finer control over the configuration, **boot** is a viable alternative.

# Serialization

**Serialization** is the process of converting custom domain objects to _raw_ formats, which can then be stored or sent over the wire. **Deserialization** is the process of unmarshalling these raw formats into the original object. Since the definition is vague, there are countless different implementations with different characteristics. To name a few:

- **speed** of (de)serialization
- **size** of the _raw_ format
- human **readable** or **binary**?
- self-describing?
- **constraints** imposed upon the domain objects, if any
- does it require pre-runtime **code generation**?
- **schema**-based or schemaless?
- is it **forward / backward compatible**?

For example, **JSON** or **XML** serialization:

- isn't extraordinarily fast
- produces large messages
- does not require code generation or schemas
- places no constraints on the domain objects

Meanwhile, Google's **Protocol Buffers**:

- is extremely fast
- produces tiny messages
- requires code generation from an _IDL_, where you define the structure of your message types
- you have to use the generated classes

As you can see, Protocol Buffers (**protobuf** from now on) isn't usually for everyday use, but when you need extreme performance, it can come handy. The library I designed (called **mikron**) is more akin to protobuf, there are some differences though:

- mikron is slower (but will improve in this respect in the future)
- mikron utilizes code generation from a custom _DSL_, but it happens at _compile time_ via _macros_.
- you do not need to use any special data structures

The last two points make mikron relatively easy to setup and use (demonstrated with examples later).

# Implementation

# #
