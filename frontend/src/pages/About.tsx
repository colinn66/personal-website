import React from 'react'

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>关于我们</h1>
      <section className="about-content">
        <h2>公司简介</h2>
        <p>我们是一家致力于提供优质服务的公司，专注于为客户创造价值。</p>
        
        <h2>我们的使命</h2>
        <p>通过创新的解决方案，帮助客户实现业务目标，推动行业发展。</p>
        
        <h2>联系我们</h2>
        <div className="contact-info">
          <p>邮箱：contact@example.com</p>
          <p>电话：(+86) 123-4567-8900</p>
          <p>地址：中国北京市朝阳区xxx街xxx号</p>
        </div>
      </section>
    </div>
  )
}

export default About