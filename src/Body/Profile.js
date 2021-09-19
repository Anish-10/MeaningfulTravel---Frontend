import React, { Component } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom'

class Profile extends Component
{
    render()
    {
        return(
            <div>
                <div><Header></Header></div>
                <div style={{}}>
                    <div class="card" style={{margin:"1%", background:"url('https://wallpaperaccess.com/full/1134542.jpg')"}}>
                        <div class="card-body">
                            <h2 style={{background:"linear-gradient(red,blue)", color:"white", textAlign:"center", fontFamily:"Comic Sans MS"}}>Your Profile</h2>
                            <div class="row" style={{marginTop:"10px"}}>
                                <div class="col-sm-6">
                                    <img src={process.env.PUBLIC_URL + 'Images/pp.jpeg'} style={{width:"100%"}}></img>
                                </div>
                                <div class="col-sm-6">
                                    <h2><b>Name:</b> Anish Nepal</h2>
                                    <h2><b>Address:</b> Taudaha, Kathmandu</h2>
                                    <h2><b>Phone Number:</b> 98611000000</h2>
                                    <br/>
                                    <button class="btn btn--radius btn--green" type="submit">Update Profile</button>
                                    <br/>
                                    <br/>
                                    <h3><b>No. of trips in 1 year:</b> 5</h3>
                                    <h3><b>No. of trips in past 2 years:</b> 8</h3>
                                    <h3><b>No. of trips in past 3 years:</b> 10</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="card" style={{margin:"1%", background:"url('https://i.pinimg.com/originals/69/10/dd/6910dd2b7d3f33f66c7137752306f482.jpg')"}}>
                        <h2 style={{marginLeft:"1%", marginTop:"10px", background:"linear-gradient(red,blue)", color:"white",  fontFamily:"Comic Sans MS", width:"30%", textAlign:"center"}}>Your Current Bookings</h2>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <img src={process.env.PUBLIC_URL + 'Images/h2.jpg'} style={{width:"100%"}}></img>
                                            &nbsp;
                                            <h4><em style={{fontWeight:"bold"}}>Hotel Name:</em> Radisson Hotel Kathmandu</h4>
                                            <h4><em style={{fontWeight:"bold"}}>Booking for:</em> 10 days</h4>
                                            <h4><em style={{fontWeight:"bold"}}>Adult:</em> 2 <em style={{fontWeight:"bold"}}>Children:</em> 2</h4>
                                            <h4><em style={{fontWeight:"bold"}}>Total Price for Hotel:</em> Rs.7000</h4>
                                            <h4><em style={{fontWeight:"bold"}}>Total Price for Cab:</em> Rs.8000</h4>
                                            <br/>
                                            <button class="btn btn--radius btn--green" type="submit">Cancel Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><Footer></Footer></div>
            </div>
        )
    }
}


export default Profile;