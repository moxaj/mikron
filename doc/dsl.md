# Schema DSL (WORK IN PROGRESS)

## Primitive schemas

| Schema        | Description
| ---           | ---
| ```:byte```         | 8-bit signed integer
| ```:short```        | 16-bit signed integer
| ```:int```          | 32-bit signed integer
| ```:float```        | 32-bit single-precision float
| ```:double```       | 64-bit double-precision float
| ```:boolean```      | boolean
| ```:char```         | 16-bit Unicode character

###### Notes

* No support for unsigned integers

###### Implementation

* Boolean values only take 1 bit!

## Advanced schemas

| Schema        | Description
| ---           | ---
| ```:string```       | A sequence of chars (max. length: 127)
| ```:long-string```  | A sequence of chars (max. length: 32767)
| ```:keyword```      | A keyword (max. length: 127)
| ```:symbol```       | A symbol (max. length: 127)
| ```:any```          | Anything consumable by pr-str and read-string

###### Notes

* Use ```:any``` sparingly! It's both slow and verbose.

###### Implementation

* All advanced schemas are serialized as strings, so their size depends on their length. Therefore, you might prefer
to use ```:enum``` instead of ```:keyword```, ```:symbol``` or ```:string``` when you know the possible values beforehand.

## Composite schemas

Composite schemas are represented in a vector, like ```[:tuple [:byte :byte]]```. The first item is the
composite type, the second item is an optional map, containing additional options depending on the
composite type. The rest of the items are specific to each composite.

---


* ```[:list :x]```  
  ```[:list {:size :s} :x]```

A list of items, represented as a clojure list. ```:x``` must be a valid schema. ```:s``` must be either ```:byte```
or ```:short``` (maximum of 127 / 32768 items, respectively).

###### Example
 
a list of ints: ```[:list :int]```

###### Implementation

The overhead is the length of the list, serialized into 1 or 2 bytes.

---


* ```[:vector :x]```  
  ```[:vector {:size :s} :x]```

A list of items, represented as a clojure vector. ```:x``` must be a valid schema. ```:s``` must be either ```:byte```
or ```:short``` (maximum of 127 / 32768 items, respectively).

###### Example

a vector of bytes: ```[:vector :byte]```

###### Implementation

The overhead is the length of the vector, serialized into 1 or 2 bytes.

---


* ```[:set :x]```  
  ```[:set {:size :s} :x]```

A set of items, represented as a clojure set. ```:x``` must be a valid schema. ```:s``` must be either ```:byte```
or ```:short``` (maximum of 127 / 32768 items, respectively).

###### Example
 
a set of strings: ```[:set :string]```

###### Implementation

The overhead is the length of the set, serialized into 1 or 2 bytes.

---


* ```[:sorted-set :x]```  
  ```[:sorted-set {:size :s} :x]```

A sorted set of items, represented as a clojure sorted set. ```:x``` must be a valid schema. ```:s``` must be either
```:byte``` or ```:short``` (maximum of 127 / 32768 items, respectively).

###### Example
 
a sorted set of doubles: ```[:sorted-set :double]```

###### Implementation

The overhead is the length of the sorted set, serialized into 1 or 2 bytes.

---


* ```[:map :x :y]```  
  ```[:map {:size :s} :x :y]```

A map of items, represented as a clojure map. ```:x``` is the key-schema, ```:y``` is the value-schema. Both must be
valid schemas. ```:s``` must be either ```:byte``` or ```:short``` (maximum of 127 / 32768 items, respectively).

###### Example

a map from ints to strings: ```[:map :int :string]```

###### Implementation

The overhead is the length of the map, serialized into 1 or 2 bytes.

---


* ```[:sorted-map :x :y]```  
  ```[:sorted-map {:size :s} :x :y]```

A sorted map of items, represented as a clojure sorted-map. ```:x``` is the key-schema, ```:y``` is the value-schema.
Both must be valid schemas. ```:s``` must be either ```:byte``` or ```:short``` (maximum of 127 / 32768 items, respectively).

###### Example

a sorted map from ints to strings: ```[:sorted-map :int :string]```

###### Implementation

The overhead is the length of the sorted map, serialized into 1 or 2 bytes.

---


* ```[:optional :x]```

An optional value - may be an ```:x``` or ```nil```. ```:x``` must be a valid schema.

###### Example
 
an optional string: ```[:optional :string]```

###### Implementation

The overhead is 1 bit, indicating whether the data is present or not.

---


* ```[:enum [:k1 :k2 ... :kn]]```

An enum, which may be either of ```:k1, :k2, .. :kn```. ```:k```-s must be keywords.

###### Example
 
```[:enum [:cat :dog :horse :mouse]]```

###### Implementation

Each enum is assigned a 2 byte value and serialized as such.

---


* ```[:tuple [:x1 :x2 ... :xn]]```

A tuple of items, represented as a clojure vector. ```:x```-s must be valid schemas.

###### Example
 
a tuple of two floats (coordinates): ```[:tuple [:float :float]]```

###### Implementation

Zero overhead!

---


* ```[:record {:k1 :x1, :k2 :x2, ..., :kn :xn}]```  
  ```[:record {:extends [:s1 :s2 ... :sm] :constructor :c}
              {:k1 :x1, :k2 :x2, ..., :kn :xn}]```

A record is like a clojure record, a map with a predefined set of keys. May inherit key-schema pairs
from other records: the supers must be named in the ```:extends``` option. ```:s```-s must be
valid top-level records. ```:k```-s must be keywords. ```:x```-s must be valid schemas. The deserialized
value will be an ordinary clojure map, even if you serialized a record. To prevent this, specify the
```:constructor``` to be the ```map->``` factory function of your record.

**Notice: Do not establish a circular dependency between your records!**
However, there is no problem with multiple inheritance. The parent records are evaluated and merged from left to right,
then finally merged with the actual record.

###### Example
 
cats and dogs are special animals:

    {:animal [:record {:name :string}]
     :cat    [:record {:extends [:animal]}
                      {:whiskers-length :short}]
     :dog    [:record {:extends [:animal]}
                      {:friendly :boolean
                       :gps-coords [:tuple [:float :float]]}]}

So, a ```:cat``` could be ```{:name "Kitty", :whiskers-length 20}```, a ```:dog``` could be
```{:name "Doggy", :friendly true, :gps-coords [10.6 20.3]}```

###### Implementation

Zero overhead!

---

* ```[:multi selector {:v1 :x2, :v2 :x2, ..., :vn :xn}]```

Multi represents polymorphism: ```selector``` is called on the actual data, and depending on the result, a
schema ```:xk``` is selected and the data is serialized as such. ```selector``` must implement ```IFn```.
```:v```-s are the dispatch values. ```:x```-s must be valid schemas.

###### Example
 
an int or a byte-byte tuple

    [:multi number? {true  :int
                     false [:tuple [:byte :byte]]}]

*Note: selector doesn't have to be a predicate - it can have any number of different return values.*

###### Implementation

The overhead is 2 bytes, indicating which sub-schema the selector selected.

## Config

In your config definition, the schema definitions should look like this:

    {:my-schema1 :some-valid-schema1
     :my-schema2 :some-valid-schema2}

In the context of the above, ```:my-schema1``` and ```:my-schema2``` are considered valid schemas and may be referenced in
other schemas in the same config.

**Notice: Do not establish circular dependencies between your schemas!**
