import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式
import "reset-css"
// UI样式

// 全局样式
import "@/assets/style/globle.scss"

// 组件样式

import App from './App'
import Router from "./router"
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router /> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>

  </React.StrictMode>,
)
