# Serialization

_Serialization_ is the process of converting custom domain objects to _raw_ formats, which can then be stored or sent over the wire. _Deserialization_ is the process of unmarshalling these raw formats into the original object. Since the definition is vague, there are countless different implementations with different characteristics. To name a few:

- speed of (de)serialization
- size of the packed raw value
- human readable or binary?
- self-describing?
- constraints imposed upon the domain objects, if any
- does it require pre-runtime code generation?
- schema-based or schemaless?
- is it forward / backward compatible?

For example, JSON or XML serialization:

- isn't extraordinarily fast
- produces large messages
- does not require code generation or schemas
- places no constraints on the domain objects

Meanwhile, Google's Protocol Buffers:

- is extremely fast
- produces tiny messages
- requires code generation from an _IDL_, where you define the structure of your message types
- you have to use the generated classes

As you can see, Protocol Buffers (protobuf from now on) isn't usually for everyday use, but when you need extreme performance, it can come handy. The library I designed (called mikron) is more akin to protobuf, there are some differences though:

- mikron is slower (but will improve in this respect in the future)
- mikron utilizes code generation from a custom _DSL_, but it happens at _compile time_ via _macros_.
- you do not need to use any special data structures

The last two points make mikron relatively easy to setup and use (demonstrated with examples later).
