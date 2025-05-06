import express from 'express'

export const router = express.Router()

// 示例 API 路由
router.get('/hello', (req, res) => {
  res.json({ message: '欢迎访问 API' })
})

// 获取特色功能列表
router.get('/features', (req, res) => {
  const features = [
    {
      id: 1,
      title: '特色功能一',
      description: '这里是特色功能一的详细描述'
    },
    {
      id: 2,
      title: '特色功能二',
      description: '这里是特色功能二的详细描述'
    },
    {
      id: 3,
      title: '特色功能三',
      description: '这里是特色功能三的详细描述'
    }
  ]
  res.json(features)
})

// 获取关于我们的信息
router.get('/about', (req, res) => {
  const aboutInfo = {
    company: '我们是一家致力于提供优质服务的公司，专注于为客户创造价值。',
    mission: '通过创新的解决方案，帮助客户实现业务目标，推动行业发展。',
    contact: {
      email: 'contact@example.com',
      phone: '(+86) 123-4567-8900',
      address: '中国北京市朝阳区xxx街xxx号'
    }
  }
  res.json(aboutInfo)
})