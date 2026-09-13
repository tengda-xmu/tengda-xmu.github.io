---
layout: default
title: 人才培养
key: teaching
permalink: /teaching/
description: 腾达的硕士研究生招生、本科生科研培养、创新训练计划与学科竞赛指导，欢迎参与 AI 与航空工程交叉研究。
---

<h1 class="sr-only">人才培养</h1>

<section id="join" aria-labelledby="join-heading">
  <h2 id="join-heading">硕士研究生招生</h2>
  <p><strong>欢迎航空航天、机械、力学、人工智能、计算机等相关专业学生报考硕士研究生，共同开展“AI + 航空”交叉研究！</strong></p>
  <p><a class="inline-text-link" href="{{ '/research/' | relative_url }}">研究方向</a>包括航空智能运维、结构生成式设计、结构疲劳与可靠性设计。</p>
</section>

<section aria-labelledby="undergraduate-heading">
  <h2 id="undergraduate-heading">本科生科研培养</h2>
  <p><strong>鼓励优秀本科生加入课题组，参与科研项目、学科竞赛及创新实践。课题组可提供科研入门、项目实践和竞赛指导，欢迎感兴趣的同学前来交流！</strong></p>
</section>

<section id="student-results" aria-labelledby="student-results-heading">
  <h2 id="student-results-heading">本科生指导成果</h2>
  <ul class="record-list">
    {% for result in site.data.student_results %}
    <li>{{ result.year }}：{{ result.title }}，{{ result.distinction }}（{{ result.type }}）</li>
    {% endfor %}
  </ul>
</section>

<section aria-labelledby="education-heading">
  <h2 id="education-heading">教学改革</h2>
  <ul class="record-list">
    <li>2025：福建省本科高校教育教学研究项目（参与）</li>
  </ul>
</section>
