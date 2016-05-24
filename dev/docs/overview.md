# Goals

The goal of this project was to create an efficient, schema-based, cross-platform serialization library for the Clojure and ClojureScript languages. The main driving force were the lack of suitable libraries for my use cases and also a desire to learn about the language and its tools. To accomplish this task, I have done the following:

- **specify** a set of built-in **types** which cover most Clojure values (numbers, strings, lists, etc.)
- **design** a **DSL** by which the schemas can be described
- **implement** the **parsing** and **validation** of these schemas
- **implement** the compile-time **code generation** for these schemas
- **design** a platform-independent **buffer API**
- **provide buffer implementations** for the Clojure and ClojureScript languages
- **specify** a **header / payload format** for the binary frames

Furthermore,

- numerous **unit tests** were made to ensure the correctness of the code (in _TDD_ style)
- **benchmarks** were made, comparing my solution to a wide range of available serialization libraries
- the entire project was made available on **GitHub** with wiki pages, and on a **public repository** called **Clojars**

The final product has room for improvements, but it has nevertheless met my expectations. It has a simple but expressive schema _DSL_, an _API_ which is trivial to use and has great performance characteristics.
