# Mikron (WORK IN PROGRESS)

Mikron is a schema-based serialization library for Clojure and ClojureScript.

[![Build Status](https://travis-ci.org/moxaj/mikron.svg?branch=master)](https://travis-ci.org/moxaj/mikron)

## Features

- great performance
- compact serialization format
- supports Clojure, ClojureScript(browser and Node.js)
- flexible and extensible schema system
- extras goodies beyond serialization: data validation, delta compression, random data generation

### Not supported (yet?)

- Schema evolution (forward / backward compability)

## Latest version

`[moxaj/mikron "0.5.0"]`

## Installation

Simply add `[moxaj/mikron "x.x.x"]` to your `:dependencies`.

## Walkthrough

Let's say we'd like to pass around some information about people between the server and the client, both running clojure(script). Each person has

- a **name**, represented as a **string**
- an **age**, represented as an **integer**
- an associated list of **tags**, for whatever reasons, represented as **keywords**, taken from a finite set

Since we know the schema ahead of time, **mikron** can generate _very_ efficient packer and unpacker functions, among other things. Let's see how it can be done:

```clojure
;; First, require the relevant namespace and refer some symbols
(require '[mikron.core :refer [schema defschema pack unpack gen diff undiff]])

;; Define a schema from our description
(def person-schema
  (schema [:record {:name :string
                    :age  :ubyte
                    :tags [:vector [:enum [:a :b :c :d :e]]]}]))

;; Or, just use the shorthand 'defschema'
(defschema person-schema
  [:record {:name :string
            :age  :ubyte
            :tags [:vector [:enum [:a :b :c :d :e]]]}])

;; As you can see, the DSL syntax is heavily inspired by Hiccup

;; We also need a schema for a list of people
(defschema person-list-schema
  [:list person-schema])

;; Let's define an example packet
(def person-list
  [{:name "Frank", :age 30, :tags [:a :b :c]}
   {:name "Joe",   :age 21, :tags [:b :e]}])

;; Or, generate one from our schema (generates some funny looking names,
;; don't expect anything fancy here)
(def person-list (gen person-list-schema))

;; Now we're ready to serialize (pack) it
(def packet (pack person-list-schema person-list))

;; 'packet' is a raw binary value (and instance of byte[] or ArrayBuffer),
;; persist it, send it around the network, do whatever you'd like

;; Let's assume we're on the client side now (with the exact same schema definitions),
;; having received 'packet', let's deserialize (unpack) it
(def person-list' (:value (unpack person-list-schema packet)))

;; 'person-list'' is either :mikron/invalid or a valid person list
;; We can also double-check if it conforms to the schema
(valid? person-list-schema person-list') ; => true

;; We're already pretty fast, but suppose we need even better performance
;; Let's define a custom record for our people
(defrecord Person [^String name ^long age tags])

;; We can make use of the record structure in our schemas
;; Watch out! - from now on, the generated functions only accept actual records
(defschema person-schema
  [:record {:type [Person name age tags]} ; <= !
           {:name :string
            :age  :ubyte
            :tags [:vector [:enum [:a :b :c :d :e]]]}])

;; Redefine our list schema as well to use vectors (they are faster to iterate)
;; Watch out! - from now on, you have to use vectors, not lists!
(defschema person-list-schema
  [:vector person-schema])

;; Now you can use the new schemas
```

That's it in a nutshell. For more information, please check out the [wiki](https://github.com/moxaj/mikron/wiki) or the [Demo project](https://github.com/moxaj/mikron-demo).

## License

Copyright © 2016 Viktor Magyari

Distributed under the Eclipse Public License v1.0.
