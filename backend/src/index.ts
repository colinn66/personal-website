import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { router as apiRouter } from './routes'

// 加载环境变量
dotenv.config()

const app = express()
const port = process.env.PORT || 4000

// 中间件
app.use(helmet())
app.use(cors())
app.use(express.json())

// 路由
app.use('/api', apiRouter)

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 错误处理
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: '服务器内部错误' })
})

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`)
})