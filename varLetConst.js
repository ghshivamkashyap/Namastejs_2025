/*
| Feature                | var                          | let                              | const                        |
|------------------------|------------------------------|----------------------------------|------------------------------|
| Scope                 | Function scope               | Block scope                       | Block scope                 |
| Redeclaration         | Allowed                      | Not allowed                       | Not allowed                 |
| Reassignment          | Allowed                      | Allowed                           | Not allowed                 |
| Hoisting              | Hoisted (initialized as undefined) | Hoisted (not initialized)   | Hoisted (not initialized)   |
| Temporal Dead Zone    | No                           | Yes                               | Yes                         |
| Use Case              | Legacy code, avoid in modern JS | For variables that can change  | For constants that won't change |
*/
var a;
var a;
