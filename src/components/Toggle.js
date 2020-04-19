import React, { Component } from "react";
import Switch from "react-switch";
 
class Toggle extends Component {
  
  state = { checked: false }
 
  handleChange = (checked) => {
    this.setState({ checked });
  }
 
  render() {
    return (
      <div className="toggle">
       <h2 className="public-btn">Public </h2>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </div>
    );
  }
}

export default Toggle