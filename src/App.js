import "./App.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  return (
    <div className="App" style={{marginTop: 20}}>
      <ThemeContextProvider>
        <ThemeSwitcher />
        <ClassComponent />
        <FunctionComponent />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
