import React, { Component } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom'

class Home extends Component
{
    render()
    {
        return(
            <div>
                <div><Header></Header></div>
                <div style={{background:"url('https://assets-cdn.kathmandupost.com/uploads/source/news/2019/money/tourist-take-pictures-at-poonhill-(2).jpg')"}}>
                    <div class="container" >
                        <div class="card" style={{width:"30%", marginLeft:"70%"}}>
                            <div class="card-body">
                                <h5 class="card-title" style={{backgroundColor:"Yellow", height:"30px", textAlign:"center", fontSize:"25px"}}>Book A Tour</h5>
                                <hr/>
                                <div class="input-group" style={{borderColor:"Red"}}>
                                    <input class="input--style-2" type="text" placeholder="Destination" name="Fullname" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>
                                    <p>From</p>
                                    <input class="input--style-2" type="date" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>
                                    <p>To</p>
                                    <input class="input--style-2" type="date" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>
                                    <input class="input--style-2" type="number" placeholder="Adults" name="Fullname" ></input>
                                </div>
                                <div class="input-group" style={{borderColor:"Red"}}>
                                    <input class="input--style-2" type="number" placeholder="Childern" name="Fullname"></input>
                                </div>
                                <div class="p-t-30" >
                                    <Link to="/bookhotels"><button class="btn btn--radius btn--green" type="submit" style={{borderColor:"Blue"}}>Search</button></Link>
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


export default Home;