import { useContext } from "react";
import Switch from "../../../components/Switch";
import { ThemeContext } from "../../../providers/theme_provider";

// eslint-disable-next-line react/prop-types
function OutputView({ outputHeading, message }) {
  var themeProvider = useContext(ThemeContext);
  return (
    <div className="w-1/2 h-screen p-10 flex flex-col">
      <h1 className="text-4xl font-bold pt-5 mb-4 dark:text-white">
        {outputHeading ?? "Output"}
      </h1>
      {message != undefined && (
        <p className="dark:bg-gray-900 bg-slate-100  p-10 text-green-400 text-2xl font-bold break-all">
          {JSON.stringify(message)}
        </p>
      )}
      <div className="flex-1"></div>
      <label
        htmlFor="toggleSeven"
        className="flex cursor-pointer select-none items-center"
      >
        <Switch toggleDarkMode={themeProvider.toggleTheme} />
        <h1 className="dark:text-white ml-5">
          {!themeProvider.darkMode ? "Dark Mode" : "Light Mode"}
        </h1>
      </label>
    </div>
  );
}

export default OutputView;
