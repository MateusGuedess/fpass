import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { HeroProvider } from "./context/heroContext";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { GlobalStyle } from "./style/GlobalStyle";

// Create a client
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Header />
      <HeroProvider>
        <RouterProvider router={router} />
      </HeroProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
