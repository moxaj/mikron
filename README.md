# WORK IN PROGRESS

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
- `[moxaj/seria "0.2.1"]`
- `[moxaj/lein-seria "0.2.1"]`

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
seria (benchmarks to come), but compared to schema-less solutions, seria does pretty well:

![benchmarks](https://raw.githubusercontent.com/moxaj/seria/master/benchmarks.png)

Stress data were `:snapshots`:
```
{:body     [:s/record {:user-data [:s/record {:id :s/int}]
                       :position  :coord
                       :angle     :s/float
                       :body-type [:s/enum [:dynamic :static :kinetic]]
                       :fixtures  [:s/list :fixture]}]
 :fixture  [:s/record {:user-data [:s/record {:color :s/int}]
                       :coords    [:s/list :coord]}]
 :coord    [:s/tuple [:s/float :s/float]]
 :snapshot [:s/record {:time   :s/long
                       :bodies [:s/list :body]}]}
```
This of course heavily favors seria (which for example does not serialize the
keys of the records).

Considering a list of 3 to 5 doubles, we get the following results:

![benchmarks](https://raw.githubusercontent.com/moxaj/seria/master/benchmarks2.png)

Even with such a simple schema, seria performs a roundtrip roughly twice as fast
as the next contender!

## License

Copyright © 2016 Viktor Magyari

Distributed under the Eclipse Public License v1.0.
