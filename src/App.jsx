import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AppLayout from "./assets/component/layout/appLayout";
import { Entrygate } from "./assets/component/Entrygate";
// import { useSelector } from "react-redux";
import { Pricex } from "./assets/component/layout/Pricex";

 const app=()=>{
  // const login=useSelector((state)=>state.authx);
  const router=createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
     children:  [{
              path:"/login",
              element: <Entrygate />
              
            },
            {
              path:"/a",
              element:true ? <Pricex/>: <Navigate to={"/"}/>
              
            }
          
          
          ]
    },
    

  ])

return <RouterProvider router={router}/>

 }
export default app;