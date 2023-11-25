import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Aprendizaje } from "./pages/aprendizaje/Aprendizaje";
import { Finanzas } from "./pages/finanzas/Finanzas";
import { Clientes } from "./pages/clientes/Clientes";
import { Procesos } from "./pages/procesos/Procesos";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/finanzas",
          element: <Finanzas />,
        },
        {
          path: "/clientes",
          element: <Clientes />,
        },
        {
          path: "/aprendizaje",
          element: <Aprendizaje />,
        },
        {
          path: "/procesos",
          element: <Procesos />,
        }
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
