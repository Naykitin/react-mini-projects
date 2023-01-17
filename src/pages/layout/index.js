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
         </ul>
      </nav>

      <Outlet />
   </>
  )
}

export default Layout