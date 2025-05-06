# Demo Web Project

这是一个基础的Web项目，包含前端和后端的基本设置。

## 项目结构

```
├── frontend/          # 前端代码
│   ├── src/          # 源代码
│   ├── public/       # 静态资源
│   └── package.json  # 前端依赖配置
├── backend/          # 后端代码
│   ├── src/          # 源代码
│   └── package.json  # 后端依赖配置
└── README.md         # 项目说明文档
```

## 开发环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/colinn66/demo-web-project.git
cd demo-web-project
```

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