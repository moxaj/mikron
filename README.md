# mikron (WORK IN PROGRESS)

**mikron** is a schema-based serialization library for Clojure and ClojureScript.

[![Build Status](https://travis-ci.org/moxaj/mikron.svg?branch=master)](https://travis-ci.org/moxaj/mikron)

## Features

- great performance
- compact serialization format
- supports both Clojure and ClojureScript (browser and Node.js)
- flexible and extensible schema system
- extras goodies beyond serialization: data validation, delta encoding, random data generation

## Latest version

[![Clojars Project](https://img.shields.io/clojars/v/moxaj/mikron.svg)](https://clojars.org/moxaj/mikron)

## Quick start

**mikron** let's you define schemas via a [Hiccup](https://github.com/weavejester/hiccup)-like DSL, and generates very efficient (de)serializing functions (among other things) for them.

Let's say we have a structure which represents a game state (a **snapshot**) and has the following layout:
- **time**: a timestamp
- **entities**: a list of entities

While an **entity** consists of:
- **id**: an id
- **position**: a tuple of 2 numbers
- **angle**: a number

Let's get to work! First, require the core namespace and define our **entity** schema:

```clojure
(require '[mikron.core :as m])

(def s-entity
  (m/schema [:record {:id       :long
                      :position [:tuple [:float :float]]
                      :angle    :float}]))
```

For our **snapshot** schema, we'll use the shorthand `defschema` macro:
```clojure
(m/defschema s-snapshot
  [:record {:time     :long
            :entities [:list s-entity]}])
```

> **Note:** the top level schema doesn't necessarily have to be a `:record`, it can be any valid schema.

Let's define an example **snapshot**:
```clojure
(def snapshot
  {:time     1000
   :entities [{:id 0, :position [0 0], :angle 30}
              {:id 1, :position [5 5], :angle 60}]})
```

Or, we could ask **mikron** to do it for us:
```clojure
(def snapshot (m/gen s-snapshot))
;; => some value
```

Now, we can serialize and then deserialize it (and do whatever we'd like with `packet` in-between):
```clojure
(def packet (m/pack s-snapshot snapshot))

(def snapshot' (m/unpack s-snapshot packet))
```

Here, `snapshot'` is either `:mikron/invalid` or a valid **snapshot**. We can also double check the latter:
```clojure
(m/valid? s-snapshot snapshot')
;; => true
```

That's it in a nutshell. For more information, please check out the [wiki](https://github.com/moxaj/mikron/wiki) or the [Demo project](https://github.com/moxaj/mikron-demo).

## License

Copyright © 2017 Viktor Magyari

Distributed under the Eclipse Public License v1.0.
