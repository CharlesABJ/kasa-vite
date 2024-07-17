import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importation des composants
const Layout = lazy(() => import("@pages/Layout"));
const Home = lazy(() => import("@pages/Home/Home"));
const About = lazy(() => import("@pages/About/About"));
const Error404 = lazy(() => import("@pages/Error404/Error404"));
const Logement = lazy(() => import("@pages/Logement/Logement"));

// Définition des chemins de redirection vers la page d'accueil
const homeRedirectionPaths = ["/home", "test", "/rooms", "/accueil"];

const router = createBrowserRouter([
  {
    // Layout est le composant parent de toutes les pages
    element: (
      <Suspense fallback={<h1>Chargement...</h1>}>
        <Layout />
      </Suspense>
    ),
    // Les enfants de Layout sont les pages de l'application
    children: [
      {
        path: "/",
        index: true,
        element: (
          <Suspense fallback={<h1>Chargement...</h1>}>
            <Home />
          </Suspense>
        ),
      },
      ...homeRedirectionPaths.map((path) => ({
        path: path,
        element: (
          <Suspense fallback={<h1>Chargement...</h1>}>
            <Home />
          </Suspense>
        ),
      })),
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Chargement...</h1>}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/logements/:country?/:city?/:id",
        element: (
          <Suspense fallback={<h1>Chargement...</h1>}>
            <Logement />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<h1>Chargement...</h1>}>
            <Error404 />
          </Suspense>
        ),
      },
    ],
  },
]);

// RouterProvider permet de fournir le router à l'application, router est l'objet qui contient les routes et routerProvider permet de les afficher
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
