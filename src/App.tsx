import { useState } from 'react'
import Comp1 from '@/components/comp1'
import Comp2 from '@/components/comp2'
import {Button} from "antd"
import {UpCircleOutlined} from "@ant-design/icons"
import {useRoutes , Link} from "react-router-dom"
import routes from './router'


function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(routes)
  return (
    <div className="App">
      {/* <Link to= "/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
    {/* 顶级组件
    <Comp1></Comp1>
    <Comp2></Comp2>
    <Button type="primary">my button </Button>
    <UpCircleOutlined  style={{fontSize:"80px",color:"red"}}/> */}
  
    {/* <Outlet></Outlet> */}
    {outlet}
    </div>
  )
}

export default App
