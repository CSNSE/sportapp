
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {SportHomePage, SportNavBar, PersonCard, UICreateSport, UIEditSport, TeamCard, SportCard, TeamNavBar, TeamCardCollection, TeamCreateForm} from "./ui-components";
import { Routes, Route, Router} from 'react-router-dom';
import NewSport from './NewSport'
import EditSport from './EditSport';
import NewTeam from './NewTeam'
import EditTeam from './EditTeam'

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
      <Route exact path='/' element={<div><SportHomePage/></div>}/>
        <Route exact path='/team' element={<div><SportNavBar/><TeamCardCollection/></div>}/>
        <Route exact path='/newt' element= {<div><NewTeam/></div>} />
        <Route exact path='/newt2' element= {<div><TeamCreateForm/></div>} />
        <Route exact path='/editt/:cid' element= {<div><EditTeam/></div>} />
        <Route exact path='/edit/:cid' element= {<div><EditSport/></div>} />
      </Routes>
    </header></div>
    );
}
}

export default withAuthenticator(App);