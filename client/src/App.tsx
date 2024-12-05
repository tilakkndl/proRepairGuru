import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import './App.css'
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import WrapperComponent from './utils/wrapperCompoent'
import Services from "./pages/services/services";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <WrapperComponent/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services/>
      }
    ]
  },
{
  path: "*",
  element: <NotFound />,
}
]) 

return (
  <RouterProvider router={router} /> 
);
}

export default App
