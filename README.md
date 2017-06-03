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

**mikron** lets you define schemas and generates very efficient (de)serializing functions (among other things) for them.

Suppose we have a structure which represents a game state (a **snapshot**) and has the following layout:
- **time**: a timestamp
- **entities**: a list of entities

While an **entity** has the following attributes:
- **id**: an id
- **position**: a tuple of 2 numbers
- **angle**: a number

Let's get to work! First, require the core namespace and define our schemas:

```clojure
(require '[mikron.runtime.core :as mikron])

(mikron/defschema ::entity
  [:record {:id       :long
            :position [:tuple [:float :float]]
            :angle    :float}])

(mikron/defschema ::snapshot
  [:record {:time     :long
            :entities [:list ::entity]}])
```

Let's define an example **snapshot**:
```clojure
(def snapshot
  {:time     1000
   :entities [{:id 0, :position [0 0], :angle 30}
              {:id 1, :position [5 5], :angle 60}]})
```

Or, we could ask **mikron** to do it for us:
```clojure
(def snapshot (mikron/gen ::snapshot))
```

Now, we can serialize and then deserialize it (and do whatever we'd like with `packet` in-between):
```clojure
(def packet (mikron/pack ::snapshot snapshot))

(def snapshot' (mikron/unpack ::snapshot packet))
```

Here, `snapshot'` is either `:mikron/invalid` or a valid **snapshot**. We can also double check the latter:
```clojure
(mikron/valid? ::snapshot snapshot')
```

That's it in a nutshell. For more information, please check out the [wiki](https://github.com/moxaj/mikron/wiki) or the [Demo project](https://github.com/moxaj/mikron-demo).

## License

Copyright © 2017 Viktor Magyari

Distributed under the Eclipse Public License v1.0.
