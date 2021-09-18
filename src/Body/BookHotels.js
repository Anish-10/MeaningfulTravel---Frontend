import React, { Component } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

class BookHotels extends Component
{
    render()
    {
        return(
            <div>
                <div><Header></Header></div>
                <div style={{background:"url('https://assets-cdn.kathmandupost.com/uploads/source/news/2019/money/tourist-take-pictures-at-poonhill-(2).jpg')"}}>
                    <div class="container">
                        <h3 style={{padding:"30px", textAlign:"center"}}>Kathmandu: 100+ Properties are found</h3>
                        <div class="card" style={{boxShadow:"0 3px 5px red"}}>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img src={process.env.PUBLIC_URL + 'Images/h1.jpg'} style={{width:"100%", height:"100%"}} />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3><b>Kathmandu Marriot Hotel</b></h3>
                                        <h6>Manakamana Marg, Kathmandu</h6>
                                        <br/> 
                                        <br/> 
                                        <h5 style={{backgroundColor:"Green", color:"white", width:"30%", textAlign:"center"}}>Limited Time Deal</h5>
                                        <p><b>1 Deluxe Bed</b></p>
                                        <h5 style={{color:"Green", fontWeight:"bold"}}>Breakfast Included</h5>
                                        <h5 style={{color:"Green", fontWeight:"bold"}}>Free Cancellations. No pre-payment needed</h5>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="row">
                                            <div class="col-sm">
                                                <h5 style={{fontWeight:"bold"}}>Faboulous</h5>
                                                <p style={{fontWeight:"bold"}}>Reviews: 81</p>
                                            </div>
                                            <div class="col-sm">
                                                <h5 style={{backgroundColor:"#090A3B", color:"white", textAlign:"center"}}>8.2</h5>
                                            </div>
                                        </div>
                                        <br/>
                                        <p><em><b>Adults:</b></em>2 <em><b>Childern:</b></em>2</p>
                                        <p><em><b>Price:</b></em> Rs.5550</p>
                                            <button class="btn btn--radius btn--green" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"  style={{marginTop:"5px", boxShadow:"0 3px 5px red"}}>
                            <div class="card-body">
                            <div class="row">
                                    <div class="col-sm-4">
                                        <img src={process.env.PUBLIC_URL + 'Images/h2.jpg'} style={{width:"100%", height:"100%"}} />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3><b>Radisson Hotel Kathmandu</b></h3>
                                        <h6>Ward Number 2, Kathmandu</h6>
                                        <br/> 
                                        <br/> 
                                        <h5 style={{backgroundColor:"Green", color:"white", width:"30%", textAlign:"center"}}>Limited Time Deal</h5>
                                        <p><b>King Size Bed</b></p>
                                        <h5 style={{color:"Green", fontWeight:"bold"}}>Breakfast and Lunch Included</h5>
                                        <h5 style={{color:"Green", fontWeight:"bold"}}>Free Cancellations. No pre-payment needed</h5>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="row">
                                            <div class="col-sm">
                                                <h5 style={{fontWeight:"bold"}}>Faboulous</h5>
                                                <p style={{fontWeight:"bold"}}>Reviews: 118</p>
                                            </div>
                                            <div class="col-sm">
                                                <h5 style={{backgroundColor:"#090A3B", color:"white", textAlign:"center"}}>9.8</h5>
                                            </div>
                                        </div>
                                        <br/>
                                        <p><em><b>Adults:</b></em>2 <em><b>Childern:</b></em>2</p>
                                        <p><em><b>Price:</b></em> Rs.7000</p>
                                            <button class="btn btn--radius btn--green" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"  style={{marginTop:"5px", boxShadow:"0 3px 5px red"}}>
                            <div class="card-body">
                            <div class="row">
                                    <div class="col-sm-4">
                                        <img src={process.env.PUBLIC_URL + 'Images/h3.jpg'} style={{width:"100%", height:"100%"}} />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3><b>Hotel Shankar Kathmandu</b></h3>
                                        <h6>Durbar Marg, Kathmandu</h6>
                                        <br/> 
                                        <br/> 
                                        <p><b>2 Normal Bed</b></p>
                                        <h5 style={{color:"Green", fontWeight:"bold"}}>Breakfast Included</h5>
                                        <h5 style={{color:"Green", fontWeight:"bold"}}>Free Cancellations. No pre-payment needed</h5>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="row">
                                            <div class="col-sm">
                                                <h5 style={{fontWeight:"bold"}}>Faboulous</h5>
                                                <p style={{fontWeight:"bold"}}>Reviews: 100</p>
                                            </div>
                                            <div class="col-sm">
                                                <h5 style={{backgroundColor:"#090A3B", color:"white", textAlign:"center"}}>7.2</h5>
                                            </div>
                                        </div>
                                        <br/>
                                        <p><em><b>Adults:</b></em>2 <em><b>Childern:</b></em>2</p>
                                        <p><em><b>Price:</b></em> Rs.5550</p>
                                            <button class="btn btn--radius btn--green" type="submit">Book Now</button>
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


export default BookHotels;