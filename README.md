# seria
seria is a schema-based serialization library. Features:
- Efficient (de)serialization of edn values
- Fast, produces compact binary frames
- Supports both clj and cljs
- Extras: delta compression, interpolation, random data generation

## Latest versions
- `[moxaj/seria "x.x.x"]`
- `[moxaj/lein-seria "x.x.x"]`

## Installation
- add `[moxaj/seria "x.x.x"]` to your `:dependencies`
- add `[moxaj/lein-seria "x.x.x"]` to your `:plugins`

## Usage

1. define your config in `<something>.clj`
```
(def my-config :schemas {:x ...})
```

2. add a build to your `project.clj`:
```
...
:seria {"my-build" {:source        "src/common/<something>.clj"
                    :target        "src/common/<something>_compiled.cljc"
                    :namespace     "common.<something>-compiled"
                    :pretty-print? true}}
...
```

3. `lein seria my-build`

4. use your config  
```
(ns ...
  (:require [...
             [seria.core :refer [allocate-buffer with-params pack unpack gen]]
             [common.<something>-compiled :refer [my-config]]]))

(with-params {:config my-config :schema :x :buffer (allocate-buffer 10000)}
  (-> (gen) (pack) (unpack)))
;; allocates a 10Kb buffer, generates an :x, packs it and unpacks it

```

For more detailed information and advanced features, please check out the [wiki](https://github.com/moxaj/seria/wiki).  

## License

Copyright © 2015 Viktor Magyari

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
