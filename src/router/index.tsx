
// import About from "../views/About"
// import User from "../views/User"
import React,{lazy}  from "react"
import Home from "../views/Home"
import { Navigate } from "react-router-dom"
import { Divider } from "antd"
const About= lazy(()=>import("../views/About"))
const User =lazy(()=>import("../views/User"))
const Page1 =lazy(()=>import("../views/Page1"))
const Page2 =lazy(()=>import("../views/Page2"))

const withLoadingComponent = (comp:JSX.Element)=>
           ( <React.Suspense  fallback={(<div>Loding...</div>)}>
             {comp}
            </React.Suspense>
            )

const routes = [
  {
    path:"/",
    element:<Navigate to ="/page1"/>
  } ,
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/page1",
        element: withLoadingComponent(<Page1/>)
      },
      {
        path:"/page2",
        element:withLoadingComponent(<Page2/>)
       }
    ]
  }
  // {
  //   path:"/home",
  //   element:<Home/>
  // } ,
  // {
  //   path:"/about",
  //   element: withLoadingComponent(<About/>)
  // } ,
  // {
  //   path:"/user",
  //   element:withLoadingComponent(<User/>)
  // } 

]
export  default routes