# mikron (WORK IN PROGRESS)

**mikron** is a schema-based serialization library for Clojure and ClojureScript.

## Features

- great performance
- compact serialization format
- supports Clojure, ClojureScript(browser) and ClojureScript(Node.js)
- flexible and extensible schema system
- extras goodies beyond serialization: data validation, delta compression, random data generation, linear interpolation

### Not supported (yet?):

- Schema evolution (forward / backward compability)

## Latest version

`[moxaj/mikron "0.4.0"]`

## Installation

Simply add `[moxaj/mikron "x.x.x"]` to your `:dependencies`.

## Quick start

```
(ns foo.bar
  (:require [mikron.core :refer [defprocessors pack unpack]]))

;; Define an ::ints schema
(defprocessors {:schemas {::ints [:vector :int]}})

;; Pack and unpack [1 2 3 4 5] as ::ints
(->> [1 2 3 4 5] (pack ::ints) (unpack) :value) ;; => [1 2 3 4 5]
```

For more information, please check out the [wiki](https://github.com/moxaj/mikron/wiki) or the [Demo project](https://github.com/moxaj/mikron-demo).

## License

Copyright © 2016 Viktor Magyari

Distributed under the Eclipse Public License v1.0.
