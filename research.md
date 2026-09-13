---
layout: default
title: 研究方向
key: research
permalink: /research/
description: 腾达的三个研究方向：AI 驱动的飞机与航空发动机智能运维、大模型驱动的结构生成式设计与可靠性优化、结构疲劳与可靠性设计。
---

<h1 class="sr-only">研究方向</h1>

<div class="research-directions">
  {% for item in site.data.research %}
  <section class="research-direction" id="{{ item.id }}" aria-labelledby="title-{{ item.id }}">
    <h2 id="title-{{ item.id }}">{{ item.display_title | escape }}</h2>
    <ul class="research-points record-list">
      {% for point in item.core_points %}
      <li>{{ point | escape }}</li>
      {% endfor %}
    </ul>
  </section>
  {% endfor %}
</div>
