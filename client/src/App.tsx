import {
  createBrowserRouter,
} from "react-router-dom";


import './App.css'
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      }]
  },
{
  path: "*",
  element: <NotFound />,
}
]) 

  return {router}
}

export default App
