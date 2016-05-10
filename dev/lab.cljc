(ns lab)

(comment
  Overview and goal
     schema-based, binary, fast, compact, EDN

  Existing techniques
     schema-based and schemaless, binary and text based

  Technologies
     clojure, clojurescript, java, js, libraries ...

  Frame specification
      parts, reading, writing

  Buffer implementation
     java, js, node, output types

  Schema specification
     parts, structuring, varints

  Code generation
     !!!compile-time!!!
     parsing, validating, code generation

  Data generation

  Testing
     local and cross-platform

  Microbenchmarks
     size and performance

  Publishing
     open source, github repo, clojars repo, license

  Improvements
     performance, extensibility, forward/backward compatibility, memory sharing)
"
Goals:
 - fast
 - small messages
 - easy to use
 - usable by both server / client (clojure / clojurescript)

Serialization:
 - binary / text
 - with / without schema
 - self-describing
 - platforms?

Overview:
 - define schemas
 - generate code
 - data <-> binary

Techs:
 - java, clojure, js, clojurescript
 - java.nio, js/ByteBuffer
 - atom, git, github

Buffers:
 - clj: java.nio.ByteBuffer -> byte[]
 - cljs: js/ByteBuffer -> ArrayBuffer
 - relative read/write

Binary frame:
 - header: schema id, endianness, diffed?, meta-schema-id
 - payload

Schemas building:
 - primitives: integers, floating point numbers, boolean, char, varint
 - string, keyword, symbol, any, nil, date
 - list, vector, set, map, tuple, record, multi, optional, enum, wrapped

Testing
 - local: numerous unit tests
 - server - browser

Microbenchmarks
 - ~3.5-4.5x faster
 - ~2x smaller

Publishing
 - open source
 - github
 - clojars
 - license

Improvements
 - performance
 - versioning
 - extensibility
 - memory sharing

"
(comment
  Pseudo structure
    Coord
      float x, y

    Fixture
      int id
      Coord[] coords

    Body
      Coord position
      float angle
      string body-type
      Fixture[] fixtures

    Snapshot
      long time
      Body[] bodies

  nil)
