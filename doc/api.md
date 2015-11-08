# Public API (WORK IN PROGRESS)

#### ```(make-config name schema-definitions & args)```

Defines a new config with name, schema definitions and additional arguments. Additional arguments may contain:

* ```:max-bits``` Maximum number of bytes reserved for writing boolean types and other single-bit flags
 (```:optional```-s use a bit flag to indicate whether the item is nil or not). Defaults to 10000.
* ```:max-bytes``` Maximum number of bytes reserved for writing non-boolean primitives (and composites using them).
 Defaults to 10000.
* ```:buffer-count``` Number of buffers prepared for writing. See ```serialize-all```.

#### ```(defconfig name schema-definitions & args)```

Creates a new config (see ```make-config```) and a ```var``` with name ```name``` holding the config as value.

#### ```(serialize data schema config)```

Serializes given ```data``` as a ```schema``` (which must be a top-level schema, i.e. the keys of your schema-definitions),
using ```config```. **Note: This function isn't thread safe! Either serialize your data sequentially, or use**
```serialize-all```.