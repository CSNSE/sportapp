import React from 'react'
import { SportNavBar, UIEditSport } from "./ui-components";
import {useParams } from "react-router-dom";
import "./App.css";

function EditSport(){
    return <Put />;
}

  function Put() {
    const { cid } = useParams();
    console.log("found " +(cid));
    return (
      <div><header className="App-header">
        <SportNavBar/>
        <UIEditSport idProp= {cid}/>
        </header></div>
      );
    }

export default EditSport