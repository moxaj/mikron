# seria
seria is a schema-based serialization library. Using a rich set of built in types,
you define your 'schemas' and seria generates tailor-made functions to handle any
data conforming to your schemas.

#### Features:
- Efficient (de)serialization of edn values
- Produces compact binary frames
- Supports both clj and cljs
- Extras goodies: delta compression, random data generation

#### Likely future improvements:
- Interpolation
- Node.js implementation

#### Not supported (yet?):
- Schema evolution (forward / backward compability)

## Latest versions
- `[moxaj/seria "x.x.x"]`
- `[moxaj/lein-seria "x.x.x"]`

Available at [clojars](https://clojars.org/).

## Installation
- add `[moxaj/seria "x.x.x"]` to your `:dependencies`
- add `[moxaj/lein-seria "x.x.x"]` to your `:plugins`

## Usage

1. define your config in `bar.clj`
```
(ns foo.bar)

{:schemas {:x ...}}
```

2. add a build to your `project.clj`:
```
:seria {"baz" {:source "src/foo/bar.clj"
```

3. `lein seria baz`

4. use your config  
```
(require '[seria.buffer :refer [allocate]]
         '[foo.bar :refer [pack-x gen-x unpack]])

(let [buffer (allocate 10000)])
  (-> (gen-x) (pack-x buffer) (unpack)))
;; allocates a 10Kb buffer, generates an :x, packs it and unpacks it

```

For more detailed information and advanced features, please check out the [wiki](https://github.com/moxaj/seria/wiki).  

## Benchmarks

Google's [protobuf](https://github.com/google/protobuf) currently runs circles around
seria, but compared to schema-less solutions, seria does pretty well:

![benchmarks](benchmarks.png?raw=true)

## License

Copyright © 2016 Viktor Magyari

Distributed under the Eclipse Public License v1.0.
