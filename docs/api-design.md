# DreamX Studio API 接口设计

基于 Drama.Land 接口规范设计，所有接口返回统一格式。

---

## 统一响应格式

```typescript
interface ApiResponse<T> {
  code: number;           // 200 成功，其他为错误码
  message: string;        // 响应消息
  data: T;                // 业务数据
}

interface ErrorResponse {
  code: number;
  message: string;
  data: null;
}
```

---

## 用户模块

### GET `/api/v1/user/get_user_info`
获取当前用户信息

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "uid": "user_001",
    "nickname": "栋少",
    "avatar": "https://cos.dreamx.studio/avatars/user_001.jpg",
    "email": "user@example.com",
    "created_at": 1709020800000
  }
}
```

### GET `/api/v1/user/credits/summary`
获取用户积分汇总

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "total_credits": 4825,
    "used_credits": 1175,
    "available_credits": 3650,
    "subscription_tier": "STARTER"
  }
}
```

### GET `/api/v1/user/get_points_config`
获取积分配置规则

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "daily_check_in": 10,
    "share_invite": 50,
    "complete_project": 100,
    "costs": {
      "chat_message": 1,
      "story_bible_generate": 20,
      "character_pack_generate": 50,
      "planning_center_generate": 15,
      "script_generate": 10,
      "scene_design_generate": 50,
      "segment_design_generate": 60,
      "video_generate_single": 300,
      "music_generate": 50,
      "compose_export": 5
    }
  }
}
```

---

## 项目模块

### GET `/api/v1/project/list`
获取项目列表

**Query Params：**
- `page`: 页码（默认 1）
- `page_size`: 每页数量（默认 20）
- `project_type`: 项目类型过滤（可选）

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "total": 3,
    "projects": [
      {
        "project_id": "p-001",
        "project_type": "multi_episodes",
        "series_id": "s-001",
        "series_title": "共生劫：白骨夫人的生死局",
        "drama_cover": "https://cos.dreamx.studio/covers/p-001.jpg",
        "updated_at": 1709020800000,
        "episode_count": 4,
        "current_state": "check_point"
      }
    ]
  }
}
```

### POST `/api/v1/project/create`
创建新项目

**请求：**
```json
{
  "project_type": "multi_episodes",
  "idea_text": "千年白骨精为求解脱轮回之苦...",
  "language": "zh-CN",
  "extra": {
    "episode_count": 4,
    "episode_duration": 60,
    "camera_frame_ratio": "9:16"
  }
}
```

**响应：**
```json
{
  "code": 200,
  "message": "项目创建成功",
  "data": {
    "project_id": "p-002",
    "series_id": "s-002",
    "series_title": "千年白骨精为求解脱轮回之苦",
    "current_state": "check_point"
  }
}
```

### GET `/api/v1/project/{project_id}`
获取项目详情

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "project_id": "p-001",
    "project_type": "multi_episodes",
    "series_id": "s-001",
    "series_title": "共生劫：白骨夫人的生死局",
    "drama_cover": "https://cos.dreamx.studio/covers/p-001.jpg",
    "created_at": 1709020800000,
    "updated_at": 1709020800000,
    "episode_count": 4,
    "current_state": "script",
    "check_point": { ... },
    "characters": [...],
    "episodes": [...]
  }
}
```

### POST `/api/v1/project/resume`
恢复/进入项目

**请求：**
```json
{
  "project_id": "p-001",
  "series_id": "s-001"
}
```

**响应：** 同 GET `/project/{project_id}`

---

## 画布/查询模块

### POST `/api/v1/query/main_canvas`
获取画布核心数据（节点 + 状态）

**请求：**
```json
{
  "project_id": "p-001",
  "series_id": "s-001",
  "event": "query_project_state"
}
```

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "series_id": "s-001",
    "current_state": "script",
    "nodes": [
      {
        "id": "node-0",
        "type": "entry",
        "label": "开始",
        "status": "completed",
        "locked": false
      },
      {
        "id": "node-1",
        "type": "checkpoint",
        "label": "基础信息",
        "status": "completed",
        "locked": false
      },
      {
        "id": "node-2",
        "type": "storybible",
        "label": "故事圣经",
        "status": "completed",
        "locked": false
      },
      {
        "id": "node-3",
        "type": "characterpack",
        "label": "角色集",
        "status": "active",
        "locked": false
      },
      {
        "id": "node-4",
        "type": "planningcenter",
        "label": "规划中心",
        "status": "pending",
        "locked": true
      }
    ],
    "edges": [
      { "source": "node-0", "target": "node-1" },
      { "source": "node-1", "target": "node-2" },
      { "source": "node-2", "target": "node-3" },
      { "source": "node-3", "target": "node-4" }
    ]
  }
}
```

### GET `/api/v1/query/visual_style_list`
获取视觉风格列表

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": [
    {
      "id": 1,
      "title": "Immersive Raw Realism",
      "type": "Realistic/Live",
      "description": "Wide-angle natural lighting with continuous dynamic movement...",
      "img_url": "https://cos.dreamx.studio/styles/1.jpg"
    }
  ]
}
```

### GET `/api/v1/query/voices`
获取配音角色列表

**Query Params：**
- `language`: zh-CN | en-US（可选）
- `gender`: Male | Female（可选）

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "voice_list": [
      {
        "id": "v-zh-001",
        "name": "霸道总裁",
        "description": "低沉磁性男声，气场强大",
        "audio_url": "https://cos.dreamx.studio/voices/v-zh-001.mp3",
        "age": ["Adult"],
        "language": "zh-CN",
        "gender": "Male"
      }
    ]
  }
}
```

---

## AI 生成模块

### POST `/api/v1/ai/generate_story_bible`
生成故事圣经

**请求：**
```json
{
  "project_id": "p-001",
  "series_id": "s-001",
  "idea_text": "千年白骨精...",
  "options": {
    "count": 3,
    "genre": "奇幻/爱情"
  }
}
```

**响应：**
```json
{
  "code": 200,
  "message": "生成成功",
  "data": {
    "options": [
      {
        "id": 1,
        "title": "命运交织",
        "genre": "奇幻 / 爱情",
        "logline": "千年白骨精为求解脱轮回之苦...",
        "synopsis": "白骨夫人本是千年妖族女王..."
      }
    ]
  }
}
```

### POST `/api/v1/ai/generate_characters`
生成角色集

**请求：**
```json
{
  "project_id": "p-001",
  "series_id": "s-001",
  "story_bible_id": 1
}
```

**响应：**
```json
{
  "code": 200,
  "message": "生成成功",
  "data": {
    "characters": [
      {
        "id": "c-001",
        "name": "白骨夫人",
        "occupation": "妖族女王",
        "level": "major",
        "gender": "女",
        "age": "外表 25",
        "height": "170cm",
        "brief_bio": "千年白骨精修炼成人形...",
        "appearance": "银白长发，冰蓝色瞳孔...",
        "image_url": "https://cos.dreamx.studio/characters/c-001.jpg",
        "voice_id": "v-zh-002"
      }
    ]
  }
}
```

### POST `/api/v1/ai/generate_script`
生成剧本

**请求：**
```json
{
  "project_id": "p-001",
  "series_id": "s-001",
  "episode_id": "e-001"
}
```

**响应：**
```json
{
  "code": 200,
  "message": "生成成功",
  "data": {
    "episode_id": "e-001",
    "scenes": [
      {
        "scene_number": 1,
        "header": "外景 - 荒山古道 - 黄昏",
        "description": "夕阳西下，一条蜿蜒的古道穿过荒凉的山谷。",
        "dialogue": [
          "悟空：师父，前方妖气甚重，我们还是绕道吧。",
          "唐僧：阿弥陀佛，既是前路，便无退路。"
        ],
        "vo_narration": "命运的齿轮，在这一刻开始转动。"
      }
    ]
  }
}
```

---

## 档案馆/Showcases 模块

### GET `/api/v1/showcase/items`
获取档案馆作品列表

**Query Params：**
- `page`: 页码
- `page_size`: 每页数量
- `type`: all | image | video（可选）

**响应：**
```json
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "total": 100,
    "items": [
      {
        "id": "show-001",
        "type": "video",
        "title": "共生劫：白骨夫人的生死局",
        "cover_url": "https://cos.dreamx.studio/showcases/show-001.jpg",
        "video_url": "https://cos.dreamx.studio/showcases/show-001.mp4",
        "duration": 58,
        "views": 12300,
        "created_at": 1709020800000,
        "project_type": "multi_episodes"
      },
      {
        "id": "show-002",
        "type": "image",
        "title": "赛博朋克角色设计",
        "cover_url": "https://cos.dreamx.studio/showcases/show-002.jpg",
        "image_url": "https://cos.dreamx.studio/showcases/show-002.jpg",
        "views": 5200,
        "created_at": 1709020800000
      }
    ]
  }
}
```

---

## 错误码规范

| Code | Message | 说明 |
|------|---------|------|
| 200 | 请求成功 | 正常成功响应 |
| 400 | 请求参数错误 | 缺少必填参数或格式错误 |
| 401 | 未授权 | 用户未登录或 token 过期 |
| 403 | 权限不足 | 积分不足或订阅等级不够 |
| 404 | 资源不存在 | 项目/角色等不存在 |
| 429 | 请求过于频繁 | 触发限流 |
| 500 | 服务器内部错误 | AI 生成失败等 |
| 503 | 服务不可用 | 维护中或过载 |

---

## Mock 数据层实现

所有 API 在 `/src/mock/api/` 目录下实现，返回格式严格遵循上述规范。

```typescript
// src/mock/api/project.ts
export async function getProjectList(params: { page: number; page_size: number }): Promise<ApiResponse<ProjectListData>> {
  return {
    code: 200,
    message: '请求成功',
    data: {
      total: mockProjects.length,
      projects: mockProjects.slice((params.page - 1) * params.page_size, params.page * params.page_size)
    }
  };
}
```
