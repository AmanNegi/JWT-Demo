import { useContext } from "react";
import Home from "./pages/Home/Home";
import { ThemeContext } from "./providers/theme_provider";

export default function App() {
  const themeProvider = useContext(ThemeContext);
  return (
    <main className={themeProvider.darkMode ? "dark bg-black" : " bg-white"}>
      <Home />
    </main>
  );
}
