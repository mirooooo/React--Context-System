import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  // this is how we hook up Class component with Context Object
  // contextType special name
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Submit" : "Voorlegen";
    return <button className="ui button primary ">{text}</button>;
  }
}

export default Button;
