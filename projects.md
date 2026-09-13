---
layout: default
title: 科研项目
key: projects
permalink: /projects/
description: 腾达主持与参与的科研项目，涵盖航空结构可靠性设计、飞机故障预测、航空数据智能分析和多源数据融合。
---

<h1 class="sr-only">科研项目</h1>

{% assign lead_projects = site.data.projects | where: 'role', '主持' %}
{% assign participating_projects = site.data.projects | where: 'role', '参与' %}
<div data-filter-group="projects">
  <section aria-labelledby="lead-projects-title">
    <h2 id="lead-projects-title">主持项目</h2>
    <ol class="record-list">
      {% for project in lead_projects %}
      <li data-filter-item data-role="{{ project.role_key }}">{{ project.title }}. {{ project.funder }}，{{ project.dates }}（{{ project.role }}，{% if project.ongoing %}在研{% else %}结题{% endif %}）</li>
      {% endfor %}
    </ol>
  </section>

  <section aria-labelledby="participating-projects-title">
    <h2 id="participating-projects-title">参与项目</h2>
    <ol class="record-list">
      {% for project in participating_projects %}
      <li data-filter-item data-role="{{ project.role_key }}">{{ project.title }}. {{ project.funder }}，{{ project.dates }}（{{ project.role }}，{% if project.ongoing %}在研{% else %}结题{% endif %}）</li>
      {% endfor %}
    </ol>
  </section>
</div>

<section aria-labelledby="partners-title">
  <h2 id="partners-title">科研合作</h2>
  <p>与{% include collaborators.html %}等单位保持长期科研合作</p>
  <p>联系交流：<a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a></p>
</section>
