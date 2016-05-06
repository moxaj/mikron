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
