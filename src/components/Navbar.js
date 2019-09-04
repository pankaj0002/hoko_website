
import React from 'react'
import {Link} from 'react-router-dom'
import weblogo from '../assets/img/weblogo.png';
import '../assets/navbar.css';


export default function Navbar() {
    return (
        <div className="navbar-container d-flex">
            <div className="row">
                <div className="logo-wrapper">
                    <Link to='/'><img src={weblogo}  className="img-fluid" alt="Weblogo" /></Link>
                </div>
                {/* <div className="spacer"/> */}
                <div className="navbar-link-wrapper">
                        <ul>
                            <li><Link to ='/'>Home</Link></li>
                            <li><Link to ='/About'>About</Link></li>
                            <li><Link to ='/Career'>Careers</Link></li>
                            <li><Link to ='/Blog'>Blog</Link></li>
                            <li><Link to ='/Contact'>Contact</Link></li>
                        </ul>
                      
                </div>
               
            </div>
</div>
       
    )
}
