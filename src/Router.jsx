import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importation des composants
import Layout from "@pages/Layout";
import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Error404 from "@pages/Error404/Error404";
import Logement from "@pages/Logement/Logement";

// Définition des chemins de redirection vers la page d'accueil
const homeRedirectionPaths = [
  "/home",
  "/logement",
  "/logements",
  "/rooms",
  "/accueil",
];

const router = createBrowserRouter([
  {
    // Layout est le composant parent de toutes les pages
    element: <Layout />,
    // Les enfants de Layout sont les pages de l'application
    children: [
      { path: "/", index: true, element: <Home /> },
      ...homeRedirectionPaths.map((path) => ({ path, element: <Home /> })),
      { path: "/about", element: <About /> },
      { path: "/logements/:country?/:city?/:id", element: <Logement /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

// RouterProvider permet de fournir le router à l'application
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
