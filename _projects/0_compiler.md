---
layout: page
title: >
     Compiler for smpl
description: >
    Optimizing compiler and SSA generation (without generator tools) for the smpl language
img: /assets/img/projects/graph.png
importance: 1
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/graph.png" title="IR Dot graph" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>

[Github Repository](https://github.com/theauk/Adv-Compiler-Construction)

*Technologies: Python*

This project was developed as a part of the UCI Advanced Compiler Construction class. The project required constructing an optimizing compiler for the small programming language smpl from scratch without using any lexer or parser generation tools. The compiler includes:

- Recursive-decent parsing 
- SSA-based intermediate representation generation
- Copy propagation
- Common subexpression elimination
- IR visualization (Dot graph language)
- Array support (incl. common subexpression elimination on redundant array loads)