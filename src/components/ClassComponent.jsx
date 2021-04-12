import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class ClassComponent extends React.Component {
  render() {
    return (
      <h1 style={{ color: this.context.theme.color }}>
        Hola, soy un componente de clase!
      </h1>
    );
  }
}
ClassComponent.contextType = ThemeContext;
