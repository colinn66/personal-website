import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>欢迎来到我的网站</h1>
      <section className="features">
        <div className="feature">
          <h2>特色功能一</h2>
          <p>这里是特色功能一的详细描述，展示产品的核心价值。</p>
        </div>
        <div className="feature">
          <h2>特色功能二</h2>
          <p>这里是特色功能二的详细描述，展示产品的核心价值。</p>
        </div>
        <div className="feature">
          <h2>特色功能三</h2>
          <p>这里是特色功能三的详细描述，展示产品的核心价值。</p>
        </div>
      </section>
    </div>
  )
}

export default Home