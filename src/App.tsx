import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import './App.css'
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import WrapperComponent from './utils/wrapperCompoent'
import Services from "./pages/services/services";
import JoinUs from "./pages/joinus/JoinUs";
import ServiceList from "./pages/services_list/ServiceList";
import ServiceDetails from "./pages/service_details/ServiceDetails";
import Contact from "./pages/contact/Contact";


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
      },
      {
        path: "/joinus",
        element: <JoinUs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/services_list",
        element: <ServiceList/>
      },
      {
        path: "/service_details",
        element: <ServiceDetails/>
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
