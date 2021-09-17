import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup';

class Body extends Component
{
    render()
    {
        return(
            <div>
                <Route path = "/" exact component = {Login}/>
                <Route path = "/signup" exact component = {Signup}/>
            </div>
        )
    }
}

export default Body;