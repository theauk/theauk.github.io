---
layout: page
title: C-- Interpreter
description: Scanning, parsing, and interpreting C--
img: /assets/img/projects/c_minus.png
importance: 4
category:
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/c_minus.png" title="Javigation screenshots" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>

[Github Repository](https://github.com/theauk/C-Minus-Interpreter)

*Technologies: C, Lex, Yacc*

The project includes a scanner.l and parser.y file, which act as an interpreter for parts of the C-- language. The program has been built with Lex, Yacc, and C. The outputs of the interpreter are text strings printed in the command line, which gives an overview of the symbol table and if the interpretation was successful. If the interpretation is unsuccessful, the user is informed with an error message. 