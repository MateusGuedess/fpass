import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import { HeroProvider } from "./context/heroContext";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { GlobalStyle } from "./style/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <HeroProvider>
      <RouterProvider router={router} />
    </HeroProvider>
  </React.StrictMode>
);
