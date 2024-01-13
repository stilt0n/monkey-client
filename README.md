# About

A simple code editor front-end for an interpreter I'm writing. Since I've implemented the programming
language in vanilla Go without any libraries I decided the code editor should be the same.

The interpreter and language server can be found [here](https://github.com/stilt0n/monkey-interpreter-go)

Supports all features but the `print()` built in function (technically `print()` will output to stdout on
the server. But its output will not be visible on the client side)
