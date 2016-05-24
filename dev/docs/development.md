# Development

My development process was a mixture of _TDD_ (test driven development) and _REPL
driven development_.

In _TDD_, development is driven by unit tests. Each iteration has the following
steps:
1. write a unit test (which fails)
2. do the least amount of work to pass the test
3. refactor

_REPL driven development_, however, is centered around the _REPL_ (read-eval-print-loop).
As the acronym suggest, there's a seperate runtime (called the _REPL_, for simplicity's
sake). The user can send arbitrary code to the runtime as strings, which is then **read**,
**evaluated** and **printed** for the user to see. Afterwards, the _REPL_ is ready to
receive commands again (the whole process is a **loop**).
