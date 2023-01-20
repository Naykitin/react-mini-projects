import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
   <>
      <nav>
         <ul>
            <li>
               <NavLink to="/">Counter</NavLink>
            </li>
            <li>
               <NavLink to="/modal">Modal</NavLink>
            </li>
            <li>
               <NavLink to="/quiz">Quiz</NavLink>
            </li>
            <li>
               <NavLink to="/invitation">Invitation</NavLink>
            </li>
         </ul>
      </nav>

      <Outlet />
   </>
  )
}

export default Layout