# Yancy Hou - 个人主页

学术个人主页。

## 在线访问

部署到 GitHub Pages 后访问：**https://yancy-hou.github.io/**

## 本地预览

直接用浏览器打开 `index.html`，或使用本地服务器：

```bash
# Python 3
python -m http.server 8000

# 然后访问 http://localhost:8000
```

## 自定义内容

编辑 `index.html` 修改以下内容：

- **头部**：姓名、职位、机构、联系方式、社交链接
- **个人简介**：教育背景、研究经历
- **最新动态**：按时间倒序添加新闻
- **代表性论文**：论文标题、作者、发表 venue、PDF/code 链接
- **课题组**：在读成员、已毕业学生
- **学术服务**：审稿经历等

## 目录结构

```
Yancy-hou.github.io/
├── index.html          # 主页面
├── assets/
│   └── css/
│       └── style.css   # 样式文件
├── images/             # 图片资源（如头像）
└── README.md
```

## 部署到 GitHub Pages

1. 将仓库推送到 GitHub：`Yancy-hou/Yancy-hou.github.io`
2. 进入仓库 **Settings** → **Pages**
3. 在 **Source** 中选择 **main** 分支，**保存**
4. 等待几分钟后访问 https://yancy-hou.github.io/
