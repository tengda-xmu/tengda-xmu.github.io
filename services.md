---
layout: default
title: 学术服务
key: services
permalink: /services/
description: 腾达的学术任职、人才荣誉、会议组织与学术交流。
---

<h1 class="sr-only">学术服务</h1>

<section id="honors" aria-labelledby="honors-title">
  <h2 id="honors-title">人才与荣誉</h2>
  <ul class="record-list">
    {% for honor in site.data.profile.honors %}
    <li>{{ honor.title }}（{{ honor.detail }}）</li>
    {% endfor %}
  </ul>
</section>

<section id="appointments" aria-labelledby="appointments-title">
  <h2 id="appointments-title">学术任职</h2>
  <ul class="record-list">
    {% for item in site.data.profile.appointments %}
    <li>{{ item.organization }}，{{ item.role }}（{{ item.type }}）</li>
    {% endfor %}
  </ul>
</section>

<section id="conferences" aria-labelledby="conferences-title">
  <h2 id="conferences-title">会议与学术交流</h2>
  <h3>会议组织</h3>
  <ul class="record-list">
    {% assign current_month = site.time | date: '%Y.%m' %}
    {% assign organizing_conferences = site.data.conferences | where: 'organizing', true %}
    {% for item in organizing_conferences %}
    <li>{{ item.date }}：{{ item.title }}，{{ item.city }}（{{ item.role }}{% if item.date >= current_month %}，会议安排{% endif %}）</li>
    {% endfor %}
  </ul>

  <h3>学术交流与报告</h3>
  <ul class="record-list">
    {% assign exchange_conferences = site.data.conferences | where_exp: 'conference', 'conference.organizing != true' %}
    {% for item in exchange_conferences %}
    <li>{{ item.date }}：{{ item.title }}，{{ item.city }}{% if item.role %}（{{ item.role }}）{% endif %}</li>
    {% endfor %}
  </ul>
</section>
