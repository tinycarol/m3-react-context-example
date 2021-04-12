import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  const onChange = (e) => setTheme({ color: e.target.value });
  return (
    <div className="ThemeSwitcher">
      Escribe el color de tu página:
      <input type="text" value={theme.color} onChange={onChange} />
    </div>
  );
}
