import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Header extends Component
{
    render()
    {
        return(
            <div>
                <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" >
                <Link to=""><img src={process.env.PUBLIC_URL + 'Images/Logo.png'} style={{width:"200px"}}></img></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/home">
                    Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/places">
                    Places
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contactus">
                    Contact Us
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/aboutus">
                    About Us
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/user_profile">
                    Profile
                    </a>
                </li>
                </ul>
                </div>
                </nav>
            </div>
        )}
}


export default Header;