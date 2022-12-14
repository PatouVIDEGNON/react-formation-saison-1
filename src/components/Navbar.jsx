import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
       <div>
           <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
               <div className="container">
                   <a className="navbar-brand" href="#">Final</a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <NavLink className="nav-link " aria-current="page" to="/client">Client</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/prestation" >Prestation</NavLink>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </div>
    );
};

export default Navbar;