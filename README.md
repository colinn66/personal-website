# 网站项目

这是一个全栈网站项目，包含前端和后端代码。

## 项目结构

```
├── frontend/           # 前端代码
│   ├── src/           # 源代码
│   ├── public/        # 静态资源
│   └── package.json   # 前端依赖配置
├── backend/           # 后端代码
│   ├── src/           # 源代码
│   └── package.json   # 后端依赖配置
├── docs/              # 项目文档
└── README.md         # 项目说明
```

## 开发环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 快速开始

1. 克隆项目
2. 安装依赖
   ```bash
   # 安装前端依赖
   cd frontend
   npm install

   # 安装后端依赖
   cd ../backend
   npm install
   ```
3. 启动开发服务器
   ```bash
   # 启动前端开发服务器
   cd frontend
   npm run dev

   # 启动后端服务器
   cd ../backend
   npm run dev
   ```

## 许可证

MIT