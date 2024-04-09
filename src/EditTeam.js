import React from 'react'
import { SportNavBar, UIEditTeam } from "./ui-components";
import {useParams } from "react-router-dom";
import "./App.css";

function EditTeam(){
    return <Put />;
}

  function Put() {
    const { cid } = useParams();
    console.log("found " +(cid));
    return (
      <div><header className="App-header">
        <SportNavBar/>
        <UIEditTeam idProp= {cid}/>
        </header></div>
      );
    }

export default EditTeam