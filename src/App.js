/*App.js*/

import React, {useState} from 'react';
import {BrowserRouter as Router,  Routes,  Route,  Link} from 'react-router-dom';
import Home from './components/Home';
import GoogleCalendarOauth from './components/GoogleCalendarOauth';
import LinkedInOauth from './components/LinkedInOauth';

function App() {
 return (
   <Router>
     <div className="App">
      <Routes>
         <Route exact path='/' element={< Home />}></Route>
         <Route exact path='/google-calendar-oauth' element={< GoogleCalendarOauth />}></Route>
         <Route exact path='/linkedin-oauth' element={< LinkedInOauth />}></Route>
      </Routes>
     </div>
   </Router>
 )
}

export default App;
