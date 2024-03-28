
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {SportHomePage, SportNavBar, PersonCard, UICreateSport, UIEditSport, TeamCard, SportCard, TeamNavBar, TeamCardCollection} from "./ui-components";
import { Routes, Route, Router} from 'react-router-dom';
import NewSport from './NewSport'
import EditSport from './EditSport';

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
      <Route exact path='/' element={<div><SportHomePage/></div>}/>
        <Route exact path='/team' element={<div><SportNavBar/><TeamCardCollection/></div>}/>
        <Route exact path='/new' element= {<div><NewSport/></div>} />
        <Route exact path='/edit/:cid' element= {<div><EditSport/></div>} />
      </Routes>
    </header></div>
    );
}
}

export default withAuthenticator(App);