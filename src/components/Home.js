import React from 'react';
import {Link} from 'react-router-dom';

function Home (){
    return(
      <ul>
       <li>
         <Link to="/google-calendar-oauth">Google Calendar OAuth</Link>
       </li>
       <li>
         <Link to="/linkedin-oauth">LinkedIn OAuth</Link>
       </li>
     </ul>
    )
}

export default Home;
