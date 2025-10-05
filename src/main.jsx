import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WatchlistProvider } from "./context/WatchlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchlistProvider>
      <App />
      <ToastContainer position="top-center" autoClose={2000} />
    </WatchlistProvider>
  </StrictMode>
);
