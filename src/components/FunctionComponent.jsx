import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/* export default function FunctionComponent() {
	
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <h1 style={{ color: value.color }}>
          Hola, soy un componente funcional!
        </h1>
      )}
    </ThemeContext.Consumer>
  );
} */

export default function FunctionComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <h1 style={{ color: theme.color }}>Hola, soy un componente funcional!</h1>
  );
}
