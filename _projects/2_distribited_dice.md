---
layout: page
title: Distributed Dice Game
description: Virtual 6-sided dice over an insecure network
img: /assets/img/projects/dice.png
importance: 2
category:
---

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.html path="assets/img/projects/dice.png" title="Dice" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-2 mt-md-0">
    </div>
</div>

[Github Repository](https://github.com/theauk/Distributed-Dice-Game-Protocol)

*Technologies: Go*

Alice and Bob wants to throw a virtual 6-sided dice over an insecure network. However, they do not trust each other and an adversary with access to the network must not be able to see that they are playing dice. This project simulates the game with a protocol to ensure confidentiality, authenticity, and integrity.

**Protocol Explanation**
1. The client and the server each create a certificate.
2. Each of the certificates are signed by a certificate authority (CA).
3. Alice rolls a random 6-sided dice.
4. Alice creates a commitment with her dice roll with the use of the hashed dice roll (with addition of additional bits) and a nonce.
5. Alice connects to Bob via TLS and the initial handshake is performed, which includes certificate verification.
6. Alice sends the commitment to Bob over the now encrypted TLS connection.
7. Bob rolls a random 6-sided dice.
8. Bob sends his dice roll to Alice over the encrypted TLS connection.
9. Alice sends her dice roll and nonce to Bob over the encrypted TLS connection.
10. Bob verifies Alice’s dice roll by verifying the commitment.
11. Given that Bob can verify the commitment, Alice and Bob can compute their common dice roll.