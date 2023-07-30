---
layout: page
title: >
    Haaukernetes
description: >
    Bachelor Project: Improving Haaukins (open-source CTF platform) using Kubernetes
img: /assets/img/projects/haaukernetes.png
importance: 1
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/haaukernetes.png" title="Haaukins and Kubernetes" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>

[Github Repository](https://github.com/Mai-Sigurd/Haaukernetes)

*Technologies: Go, Docker, Kubernetes, Shell, R*

This project examined whether it is feasible to manage user connections and challenges in [Haaukins](https://docs.haaukins.com/) (open-source CTF platform developed by Aalborg University) using Kubernetes. To answer this question, we developed the prototype Haaukernetes, which utilizes Kubernetes to simulate parts of Haaukins.

In Haaukernetes it is possible to for users to connect to challenges via the [Wireguard](https://www.wireguard.com/) VPN and in-browser [Apache Guacamole](https://guacamole.apache.org/) while still keeping users isolated from each other and the internet. After setting up a Kubernetes cluster, adding Apache Guacamole, and running the Go program, the user can interact with an API to create users that can access CTF challenges via the two connection methods. The project consists of different parts:

- Scripts for installing a Kubernetes cluster with the Calico network plugin.
- Scripts for installing Apache Guacamole, a remote desktop gateway, on the cluster.
- Scripts for installing the [Kube-prometheus stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) for monitoring the cluster.
- Source program written in Go.
- R code used for generating performance test graphs.