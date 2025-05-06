import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <div className="page">
    <h1>欢迎来到演示网站</h1>
    <p>这是一个基础的Web项目示例</p>
  </div>
);

const About = () => (
  <div className="page">
    <h1>关于我们</h1>
    <p>这是一个使用React和TypeScript构建的演示项目</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;