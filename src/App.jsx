
import { createBrowserRouter, RouterProvider } from "react-router"
import HomeWrapper from "./wrappers/HomeWrapper";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import authLoader from "./lodders/authLodder";
import Logout from "./components/Logout";

const router = createBrowserRouter([
  {
  path: '/',
  element : <HomeWrapper/>,
  children:[
    {
      path:"",
      element: <Home />
    },
    {
      path:"Register",
      element: <Register />
    },
    {
      path:"Login",
      element: <Login />
    }
  ]
  },

  {
    path: '/dashboard',
    element: <DashboardWrapper />,
     loader: authLoader,
     hydrateFallbackElement: <div>Loading Dashboard...</div>
  },
  {
    path: "/logout",
    element: <Logout />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
