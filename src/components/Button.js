import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  // this is how we hook up Class component with Context Object
  // contextType special name
  static contextType = LanguageContext;
  render() {
    console.log(this.context);

    return <button className="ui button primary ">Submit</button>;
  }
}

export default Button;
