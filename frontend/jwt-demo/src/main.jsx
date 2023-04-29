import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "./providers/theme_provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
