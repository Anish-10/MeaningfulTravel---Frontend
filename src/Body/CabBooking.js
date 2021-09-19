import React, { Component } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"  
import {Link} from 'react-router-dom'

class CabBooking extends Component
{
    render()
    {
        return(
            <div>
                <div><Header></Header></div>
                <div style={{background:"url('https://assets-cdn.kathmandupost.com/uploads/source/news/2019/money/tourist-take-pictures-at-poonhill-(2).jpg')"}}>
                    <div class="container" >
                        <div class="card" style={{width:"50%", marginLeft:"25%", boxShadow:"0px 0px 10px blue"}}>
                            <div class="card-body">
                                <h5 class="card-title" style={{backgroundColor:"Yellow", height:"30px", textAlign:"center", fontSize:"25px"}}>Book A Cab</h5>
                                <hr/>
                                <div class="input-group" style={{borderColor:"Red"}}>Name:
                                    <input class="input--style-2" type="text" placeholder="Your Name" name="Fullname" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>Phone Number:
                                    <input class="input--style-2" type="text" placeholder="Your Mobile Name" name="Fullname" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>Pickup Location:
                                    <input class="input--style-2" type="text" name="Fullname" value="Radisson Hotel Kathmandu"></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>Drop Location:
                                    <input class="input--style-2" type="text" placeholder="Enter a destination location" name="Fullname" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>Pickup Date:
                                    <input class="input--style-2" type="date" placeholder="Enter a destination location" name="Fullname" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>Pickup Time:
                                    <input class="input--style-2" type="time" placeholder="Enter a destination location" name="Fullname" ></input>
                                </div>
                                <div class="p-t-30" >
                                <button class="btn btn--radius btn--green" type="submit" data-toggle="modal" data-target="#BookCabNow">Book Now</button>

                                <div class="modal fade" id="BookCabNow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-body">
                                        <h4>Cab Booking Successfull. Check your Profile.</h4>
                                        <br/>
                                        </div>
                                        <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                    </div>
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

export default CabBooking;