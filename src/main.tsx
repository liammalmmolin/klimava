import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// After a new deploy, an already-open tab may request lazy chunks whose hashed
// filenames no longer exist ("Importing a module script failed"). Reload once
// to fetch the fresh index; the guard prevents reload loops.
const RELOAD_KEY = "klimava-chunk-reload";
const reloadOnce = () => {
  const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
  if (Date.now() - last < 10000) return;
  sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  window.location.reload();
};
window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  reloadOnce();
});
window.addEventListener("unhandledrejection", (event) => {
  const msg = String(event.reason?.message ?? event.reason ?? "");
  if (/Importing a module script failed|Failed to fetch dynamically imported module|error loading dynamically imported module/i.test(msg)) {
    reloadOnce();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
