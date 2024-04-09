import React, { Component } from 'react'
import { UINewTeam, SportNavBar } from "./ui-components";
import "./App.css";

class NewTeam extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        <SportNavBar/>
        <UINewTeam style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewTeam