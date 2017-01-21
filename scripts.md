# Running tests and benchmarks

## 1 Setup

### Clojure

`lein do clean, repl`

### ClojureScript (browser)

- `lein do clean, javac, figwheel browser`
- visit `localhost:3349`

### ClojureScript (Node.js)

- `lein do clean, javac, figwheel node`
- `node node/app.js` (in separate window)

## 2 REPL

### Testing

- `(require '[clojure.test :refer [run-tests]])`
- `(require '[mikron.test])`
- `(run-tests 'mikron.test)`

### Benchmarks

- `(require '[mikron.benchmark.core :refer [benchmark]])`
- `(benchmark :stats <stats> :methods <methods> :schema <schema>)`
