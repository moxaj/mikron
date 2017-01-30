# Running tests

## Clojure

`lein test`

## ClojureScript (browser)

- `lein do clean, javac, figwheel browser`
- visit `localhost:3349`

## ClojureScript (Node.js)

- either
  - `lein do clean, javac, figwheel node` (for REPL)
  - `lein do clean, javac, cljsbuild once node`
- `node resources/test/node/app.js`

## ClojureScript (headless browser)

TODO: phantom.js does not support TypedArray.slice :disappointed:

## ClojureScript (bootstrapped with Lumo)

TODO

# Running benchmarks
