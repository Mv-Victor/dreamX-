# Drama.Land UI 验收标准 - 截图清单

**登录信息**:
- 邮箱：1181348296@qq.com
- 密码：zxcvb123

---

## 📸 必须截图的页面

### 1. Canvas 画布页 (最重要！) ⭐⭐⭐

**URL**: 
```
https://cn.drama.land/zh-cn/canvas?projectId=bfd3f19f-8bd8-403b-8408-e016367d5c9b&seriesId=a875a8a4-e879-4e37-80ff-e3ebedb744f0&projectType=multi_episodes
```

**截图内容**:
- [ ] 完整页面截图（包含左侧导航、画布、右侧面板）
- [ ] 节点详情展开截图（点击任意节点）
- [ ] 右侧 DetailPanel 展开截图
- [ ] 画布空白处右键菜单截图

**DevTools 查看**:
```css
/* 画布容器 */
.canvas-container {
  background: ???;
  padding: ???;
}

/* 节点卡片 */
.react-flow__node {
  width: ???px;
  box-shadow: ???;
  border-radius: ???;
  border: ???;
  background: ???;
  padding: ???;
}

/* 连线 */
.react-flow__edge-path {
  stroke: ???;
  stroke-width: ???;
}
```

---

### 2. 左侧导航栏特写 ⭐⭐⭐

**截图内容**:
- [ ] 左侧导航完整截图
- [ ] 导航图标悬浮效果截图（鼠标 hover）
- [ ] 导航选中状态截图

**DevTools 查看**:
```css
/* 左侧导航容器 */
.left-sidebar {
  width: ???px;
  position: fixed/absolute;
  top: ???px;
  left: ???px;
  background: ???;
  box-shadow: ???;
  border-radius: ???;
  padding: ???;
  gap: ???; /* 图标间距 */
}

/* 导航图标 */
.nav-icon {
  width: ???px;
  height: ???px;
  color: ???;
}

/* 悬浮状态 */
.nav-icon:hover {
  background: ???;
  color: ???;
  border-radius: ???;
}

/* 选中状态 */
.nav-icon.active {
  background: ???;
  color: ???;
}
```

---

### 3. 右侧 DetailPanel 特写 ⭐⭐⭐

**截图内容**:
- [ ] DetailPanel 完整展开截图
- [ ] 表单输入框特写
- [ ] 按钮样式特写
- [ ] 分段控件 (SegmentedControl) 特写

**DevTools 查看**:
```css
/* DetailPanel 容器 */
.detail-panel {
  width: ???px;
  background: ???;
  padding: ???;
  border-left: ???;
}

/* Section 标题 */
.section-header {
  font-size: ???;
  color: ???;
  margin-bottom: ???;
  gap: ???; /* 图标和文字间距 */
}

/* 输入框 */
.input {
  height: ???px;
  border-radius: ???;
  border: ???;
  background: ???;
  padding: ???;
  font-size: ???;
  color: ???;
}

/* 输入框聚焦 */
.input:focus {
  border: ???;
  outline: ???;
}

/* 按钮 */
.button-primary {
  height: ???px;
  border-radius: ???;
  background: ???;
  color: ???;
  font-size: ???;
  padding: ???;
}

/* SegmentedControl */
.segmented-control {
  background: ???;
  border-radius: ???;
  padding: ???;
  gap: ???;
}

.segmented-control-item {
  padding: ???;
  border-radius: ???;
  font-size: ???;
}

.segmented-control-item.active {
  background: ???;
  color: ???;
}
```

---

### 4. 节点卡片特写 ⭐⭐

**截图内容**:
- [ ] 单个节点卡片正面截图
- [ ] 节点标题栏特写（图标、文字、颜色）
- [ ] 节点内容区特写（字段布局、间距）
- [ ] 节点状态 Badge 特写（completed/generating/pending/locked）

**DevTools 查看**:
```css
/* 节点卡片 */
.node-card {
  width: ???px;
  box-shadow: ???;
  border-radius: ???;
  border: ???;
  background: ???;
  padding: ???;
}

/* 节点标题栏 */
.node-header {
  height: ???px;
  background: ???;
  border-radius: ???;
  padding: ???;
  gap: ???; /* 图标和文字间距 */
  font-size: ???;
  color: ???;
}

/* 节点内容区 */
.node-content {
  padding: ???;
  gap: ???; /* 字段间距 */
}

/* 状态 Badge */
.status-badge {
  font-size: ???;
  padding: ???;
  border-radius: ???;
  background: ???;
  color: ???;
}
```

---

### 5. 首页 ⭐

**URL**: `https://cn.drama.land/zh-cn`

**截图内容**:
- [ ] 完整首页截图
- [ ] 上传按钮特写（确保文字一行）
- [ ] Hero 区域截图
- [ ] 搜索框截图

**DevTools 查看**:
```css
/* 上传按钮 */
.upload-button {
  white-space: nowrap; /* 确保一行 */
  padding: ???;
  border-radius: ???;
  background: ???;
  color: ???;
  font-size: ???;
  height: ???;
}

/* Hero 标题 */
.hero-title {
  font-size: ???;
  font-weight: ???;
  color: ???;
}

/* 搜索框 */
.search-box {
  width: ???px;
  height: ???px;
  border-radius: ???;
  background: ???;
  border: ???;
  padding: ???;
}
```

---

### 6. 项目列表页 ⭐

**URL**: `https://cn.drama.land/zh-cn/projects`

**截图内容**:
- [ ] 完整项目列表截图
- [ ] 单个项目卡片特写
- [ ] 卡片悬浮效果截图（鼠标 hover）
- [ ] 网格布局截图

**DevTools 查看**:
```css
/* 网格布局 */
.projects-grid {
  grid-template-columns: ???; /* repeat(?, ???px) */
  gap: ???; /* 卡片间距 */
}

/* 项目卡片 */
.project-card {
  width: ???px;
  height: ???px;
  border-radius: ???;
  border: ???;
  background: ???;
  box-shadow: ???;
  padding: ???;
}

/* 卡片悬浮 */
.project-card:hover {
  box-shadow: ???;
  border: ???;
  transform: ???;
}
```

---

### 7. 存档页 ⭐

**URL**: `https://cn.drama.land/zh-cn/archive`

**截图内容**:
- [ ] 完整存档页截图
- [ ] 左侧导航截图
- [ ] 内容区布局截图

---

### 8. 资产页 ⭐

**URL**: `https://cn.drama.land/zh-cn/assets`

**截图内容**:
- [ ] 完整资产页截图
- [ ] 分类筛选器截图
- [ ] 资产卡片截图

---

## 🎨 颜色规范

**品牌色**:
- 主色（Drama 红）: `#C0031C`
- 强调色：`#FF4D4D`

**背景色**:
- 主背景：`#000000` (纯黑)
- 卡片背景：`#0a0a0f`
- 侧边栏背景：`#050505`

**文字透明度**:
- 主要文字：`rgba(255, 255, 255, 0.90)`
- 次要文字：`rgba(255, 255, 255, 0.80)`
- 提示文字：`rgba(255, 255, 255, 0.60)`
- 禁用文字：`rgba(255, 255, 255, 0.40)`
- 微弱文字：`rgba(255, 255, 255, 0.30)`
- 最淡文字：`rgba(255, 255, 255, 0.20)`

**边框**:
- 默认边框：`rgba(255, 255, 255, 0.10)`
- 强调边框：`rgba(255, 255, 255, 0.20)`

---

## 📦 交付格式

请将截图和 CSS 信息整理后发到群里，格式：

```
## Canvas 画布页
[截图 1: 完整页面]
[截图 2: 节点详情展开]

### 关键 CSS
- 画布背景：#xxx
- 节点宽度：240px
- 节点阴影：0 4px 12px rgba(0,0,0,0.5)
- 节点圆角：8px
...
```

---

**优先级**: Canvas 画布页 > 左侧导航 > 右侧 DetailPanel > 节点卡片 > 其他页面
