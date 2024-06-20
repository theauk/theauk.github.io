---
layout: page
title: Map of Denmark
description: Visualization, navigation, and route planning
img: /assets/img/projects/map.png
importance: 5
category:
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/map.png" title="Javigation screenshots" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

[Github Repository](https://github.com/theauk/Javigation)

*Technologies: Java*

Javigation is a map and navigation application built in Java that visualizes data in the OpenStreetMap (OSM) format. The program allows the user to explore the mapped data through different features such as navigating the map, address search, route navigation with turn-by-turn directions, and seeing the nearest road to the cursor. Some of the key parts of the code include:

- R-trees for range search among mapping elements.
- KD-trees and R-trees for nearest road (neighbor) search.
- Tries for address search.
- Dijktra and A* for route navigation.