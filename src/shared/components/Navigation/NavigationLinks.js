import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = (props) => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Welcome</NavLink>
        </li>
        <li>
            <NavLink to="/whymeditate">Why Meditation</NavLink>
        </li>
        <li>
            <NavLink to="/mediation">Meditate</NavLink>
        </li>
    </ul>
}


export default NavigationLinks;