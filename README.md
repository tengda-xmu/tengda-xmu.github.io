# 腾达 · Da Teng — 个人学术主页

厦门大学航空航天学院助理教授、硕士生导师的个人学术主页。参考本仓库原始 Minimal Light 模板的布局与学术页面排版，采用中文内容、响应式布局和本地静态资源。

桌面页面最大宽度为 1240px，左右至少保留 24px 边距；顶栏与正文外框同宽，左侧个人资料栏 242px、栏间距 56px，右侧正文自适应剩余空间（大屏为 942px）。研究方向页使用与其他页相同的正文宽度。960px 及以下屏幕改为纵向排列，配合深蓝导航、白色背景和普通正文列表。全站文字统一使用 Microsoft YaHei（微软雅黑），调用访客设备上的系统字体，不打包分发字体文件；未安装时使用系统无衬线后备字体。旧版 `assets/fonts/` 及许可证作为历史资产保留，当前页面不加载。

导航左上使用白色厦门大学 logo，本地文件为 `assets/img/xmu-logo.png`，来源为[厦门大学官网 logo](https://www.xmu.edu.cn/images/logo.png)。点击 logo 返回个人主页首页。

## 内容结构

| 页面 | 路径 | 内容 |
| --- | --- | --- |
| 首页 | / | 单段个人简介、研究方向及研究范围、近期论文、招生说明、联系方式 |
| 研究方向 | /research/ | 航空智能运维、结构生成式设计、疲劳与可靠性 |
| 论文与成果 | /publications/ | 按年份排列的论文引用列表、参编专著、发明专利 |
| 科研项目 | /projects/ | 按主持与参与分类的项目、合作单位 |
| 人才培养 | /teaching/ | 硕士招生、本科生科研、学生成果、教改项目 |
| 学术服务 | /services/ | 任职、荣誉、会议组织与学术交流 |

首页简介合为一段，依次介绍身份、教育背景、荣誉、研究主线、项目合作、学术任职与论文成果，任职紧接在论文成果之前。首页展示完整方向标题与单段研究范围；研究页采用三个短标题，每个方向配两条单列圆点要点。方向标题复用“学术论文”的全站二级标题样式，使用深蓝文字和标题下方的细横线，不显示页面总标题或插图。培养页句首的“研究方向”直接链接到研究页。

## 本地运行

已验证：Ruby 3.3.12、Bundler 2.5.22、Jekyll 4.4.1、WEBrick 1.9.2。

首次准备：

```powershell
bundle install
Copy-Item _config.local.example.yml _config.local.yml
```

已有本地配置时保留该文件。运行：

```powershell
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --config _config.yml,_config.local.yml
```

访问 <http://127.0.0.1:4000/>，按 Ctrl+C 停止。应只运行一个使用此仓库的 Jekyll 预览进程。修改配置文件后需要重启；修改数据和页面后刷新浏览器即可。

构建与配置检查：

```powershell
bundle exec jekyll build --strict_front_matter --config _config.yml,_config.local.yml
bundle exec jekyll doctor --config _config.yml,_config.local.yml
```

Gemfile 中的 tzinfo 与 tzinfo-data 用于 Windows 下的 Asia/Shanghai 时区；Windows 配置依据 [Jekyll 官方文档](https://jekyllrb.com/docs/installation/windows/)。

## 更新资料

- `_data/profile.yml`：身份、邮箱、办公地点（`office`）、电话（`phone`）、电话备注（`phone_note`）、学术主页、荣誉、任职。首页介绍引用学术任职，联系区展示办公地点和电话。
- `_data/research.yml`：首页使用完整方向标题 `title` 和研究范围 `focus`；研究页使用短标题 `display_title` 和两条研究要点 `core_points`。更新时应保持两页的研究范围一致。研究页不使用插图；旧的 `research-engineering-scene.png` 和 `research-*.svg` 保留为历史资产，页面不引用。`introduction`、`context_lines`、`topics`、`keywords` 保留作为资料，页面不直接展示。
- `_data/publications.yml`：首页“近期论文”和论文页“学术论文”的共同数据源。两页通过 `_includes/ordered-publications.html` 按年份倒序排列，同一年保留此文件中的条目顺序；首页自动显示完整列表的前 3 篇，无须另行标记。新增同年论文时放在该年条目前方；修改或删除条目后，两页在重新生成时同步更新。作者角色用 `first`、`corresponding`、`coauthor`。
- `_data/projects.yml`：项目名称、来源、日期与主持/参与角色；`ongoing: true` 显示“在研”，`ongoing: false` 显示“结题”。
- `_data/books.yml`、`_data/patents.yml`：参编专著与专利。
- `_data/student_results.yml`：学生成果。
- `_data/conferences.yml`：会议记录与组织角色。
- `index.md`、`teaching.md`：总体介绍、招生说明、教改项目。
- `assets/img/da-teng.png`：个人照片。
- `assets/img/xmu-logo.png`：导航左上的厦门大学官网 logo。
- `assets/css/style.css`：布局、配色与响应式样式。
- `assets/fonts/`：旧版字体历史资产，以及 `Crimson-Pro-LICENSE.txt`、`Source-Sans-3-LICENSE.txt`、`Ubuntu-Mono-LICENSE.txt`；当前页面不加载这些字体。
- `assets/js/site.js`：移动端菜单与返回顶部。

论文按年份倒序分组，保留完整引用、作者角色与小字学术检索链接；科研项目按“主持项目”和“参与项目”分组。学术论文的英文句点 `.` 位于引用信息之后、作者身份说明（第一作者、通讯作者、合作作者）之前；专著和专利条目仍以英文句点 `.` 结尾；首页简介、招生说明及研究方向摘要保留正常句末标点，近期论文的英文句点放在作者身份之前；人才培养的两段邀请语使用中文感叹号；其他正文段落和列表条目不加结尾句号或分号，段内语句及论文引用字段之间的标点保留。所有内容直接展示，JavaScript 不可用时仍能阅读全部内容、使用移动端导航。所有页面的必要资源均在本地；外部学术主页和检索链接只在用户点击时访问。

## 发布配置

`_config.yml` 按目标访问地址 `https://tengda-xmu.github.io` 的用户主页路径设置：

```yaml
url: https://tengda-xmu.github.io
baseurl: ''
```

按照 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)，使用该根域名发布须将现有仓库 `tengda-xmu/tengda.github.io` 改名为 `tengda-xmu/tengda-xmu.github.io`，再启用 GitHub Pages。仓库改名尚待确认，发布尚未完成；配置就绪或代码同步不代表站点已经发布。模板中的链接、图标、照片、canonical 和 sitemap 均使用 Jekyll URL 过滤器适配站点路径。

旧 `html_source_file` 快照、旧研究组页、旧资源和独立 Scholar 爬虫从构建产物中排除。爬虫未接入此主页；继承的爬虫工作流不属于网站运行依赖。

## 来源与致谢

具体资料由站点所有者提供；未补造 DOI、学历时间、招生名额或课程信息。总体介绍中的“30 余篇”与详细列出的 26 篇代表性、合作论文分别呈现。书籍标注“参编”，专利记录包含公开申请，项目保留原脱敏名称。

模板来源：[yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light)。保留仓库原 LICENSE。
