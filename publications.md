---
layout: default
title: 论文与成果
key: publications
permalink: /publications/
description: 腾达的学术论文、参编专著与发明专利，涵盖航空可靠性、智能代理建模、生成式设计、故障诊断与寿命预测。
---

<h1 class="sr-only">论文与成果</h1>

<section id="papers" aria-labelledby="papers-title" data-filter-group="publications">
  <h2 id="papers-title">学术论文</h2>
  {% include ordered-publications.html %}
  {% for year in publication_years %}
  <h3>{{ year }}</h3>
  <ol class="paper-list">
    {% assign year_papers = ordered_publications | where: 'year', year %}
    {% for paper in year_papers %}
    {% include publication.html paper=paper %}
    {% endfor %}
  </ol>
  {% endfor %}
</section>

<section id="books" aria-labelledby="books-title">
  <h2 id="books-title">参编专著</h2>
  <ul class="record-list">
    {% for book in site.data.books %}
    <li>{{ book.title }}，{{ book.publisher }}，{{ book.year }}（{{ book.role }}）.</li>
    {% endfor %}
  </ul>
</section>

<section id="patents" aria-labelledby="patents-title">
  <h2 id="patents-title">发明专利</h2>
  <ol class="record-list">
    {% for patent in site.data.patents %}
    <li>{{ patent.authors }}。{{ patent.title }}。{{ patent.number_type }}：{{ patent.number }}，{{ patent.date }}.</li>
    {% endfor %}
  </ol>
</section>
