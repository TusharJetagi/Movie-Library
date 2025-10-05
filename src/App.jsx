import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/watchlist",
    element: (
      <>
        <Navbar />
        <Watchlist />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
