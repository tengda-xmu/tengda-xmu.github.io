---
layout: homepage
title: 首页
key: home
---
<h1 class="sr-only">个人简介</h1>

<p>厦门大学航空航天学院助理教授、硕士生导师，博士毕业于西北工业大学。福建省高层次人才（B 类）、厦门市高层次人才（B 类），IEEE Senior Member。长期从事人工智能驱动的航空装备智能可靠性设计与运维研究，主要研究方向为<strong>航空智能运维、结构生成式设计、疲劳可靠性</strong>。主持或参与国家自然科学基金、福建省自然科学基金、厦门市自然科学基金及民机科研专项等项目，与{% include collaborators.html %}等单位保持长期科研合作。担任 {% for appointment in site.data.profile.appointments %}{{ appointment.organization }} {{ appointment.role }}{% unless forloop.last %}、{% endunless %}{% endfor %}。在 <em>Reliability Engineering &amp; System Safety</em>、<em>Aerospace Science and Technology</em>、<em>Chinese Journal of Aeronautics</em>、航空学报等国内外期刊发表论文 30 余篇。</p>

<p>招生与培养： <strong>欢迎报考硕士研究生，也欢迎本科生参与科研训练、项目实践与创新成果培育！</strong><a href="{{ '/teaching/#join' | relative_url }}">了解详情</a>。</p>

<h2 id="research">研究方向</h2>
<ul class="research-list">
{% for item in site.data.research %}<li><a href="{{ '/research/' | relative_url }}#{{ item.id }}"><strong>{{ item.title }}</strong></a>：{{ item.focus }}。</li>
{% endfor %}</ul>

<h2 id="recent-publications">近期论文</h2>
<ul class="recent-papers">
{% include ordered-publications.html %}{% for paper in ordered_publications limit:3 %}<li><a href="{{ '/publications/' | relative_url }}#{{ paper.id }}">{{ paper.title | escape }}</a><br><em>{{ paper.journal | escape }}</em>, {{ paper.year }}. （{{ paper.role }}）</li>
{% endfor %}</ul>
<p><a href="{{ '/publications/' | relative_url }}">全部论文、专著与专利</a></p>

<h2 id="contact">联系方式</h2>
<ul class="contact-list">
  <li>办公地点：{{ site.data.profile.office }}</li>
  <li>联系方式：<a href="tel:+86{{ site.data.profile.phone }}">{{ site.data.profile.phone }}</a>（{{ site.data.profile.phone_note }}）</li>
  <li>邮箱：<a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a></li>
  <li>团队主页：<a href="https://isc.xmu.edu.cn" target="_blank" rel="noopener noreferrer">isc.xmu.edu.cn</a></li>
</ul>
