import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import Home from '../Body/Home'
import BookHotels from '../Body/BookHotels'
import Places from '../Body/Places'
import Profile from '../Body/Profile'
import CabBooking from '../Body/CabBooking'
import PlaceDesc from '../Body/PlaceDescription'

class Body extends Component
{
    render()
    {
        return(
            <div>
                <Route path = "/" exact component = {Login}/>
                <Route path = "/signup" exact component = {Signup}/>
                <Route path = "/home" exact component = {Home}/>
                <Route path = "/bookhotels" exact component = {BookHotels}/>
                <Route path = "/places" exact component = {Places}/>
                <Route path = "/user_profile" exact component = {Profile}/>
                <Route path = "/cab_booking" exact component = {CabBooking}/>
                <Route path = "/places-info1" exact component = {PlaceDesc}/>
            </div>
        )
    }
}

export default Body;