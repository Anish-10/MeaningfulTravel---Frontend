import React, { Component } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom'

class Places extends Component
{
    render()
    {
        return(
            <div>
                <div><Header></Header></div>
                <div>
                    <img src={process.env.PUBLIC_URL + 'Images/p1.jpg'} style={{width:"100%", height:"450px"}}></img>
                    <div class="container" style={{marginTop:"-20%"}}>
                        <h2 style={{color:"white", textAlign:"center", backgroundColor:"#0997DC", position:"relative"}}>Places to Visit in Kathmandu</h2><br/>
                        <div class="row">
                            <div class="col-sm-4">
                                <Link to="/places-info1"><div class="card">
                                    <div class="card-body">
                                        <img src={process.env.PUBLIC_URL + 'Images/p1.jpg'} style={{width:"100%", height:"200px"}}></img>
                                        <h4 style={{color:"white", textAlign:"center", backgroundColor:"#00D9D9", paddingTop:"5px"}}>ChandraGiri Temple</h4>
                                    </div>
                                </div></Link>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src={process.env.PUBLIC_URL + 'Images/p2.jpg'} style={{width:"100%", height:"200px"}}></img>
                                        <h4 style={{color:"white", textAlign:"center", backgroundColor:"#00D9D9", paddingTop:"5px"}}>Boudhanath Stupa</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src={process.env.PUBLIC_URL + 'Images/p3.jpg'} style={{width:"100%", height:"200px"}}></img>
                                        <h4 style={{color:"white", textAlign:"center", backgroundColor:"#00D9D9", paddingTop:"5px"}}>Kapan Monastry</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src={process.env.PUBLIC_URL + 'Images/p4.jpg'} style={{width:"100%", height:"200px"}}></img>
                                        <h4 style={{color:"white", textAlign:"center", backgroundColor:"#00D9D9", paddingTop:"5px"}}>Garden of Dreams</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src={process.env.PUBLIC_URL + 'Images/p5.jpg'} style={{width:"100%", height:"200px"}}></img>
                                        <h4 style={{color:"white", textAlign:"center", backgroundColor:"#00D9D9", paddingTop:"5px"}}>Durbar Square Kathmandu</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img src={process.env.PUBLIC_URL + 'Images/p6.jpg'} style={{width:"100%", height:"200px"}}></img>
                                        <h4 style={{color:"white", textAlign:"center", backgroundColor:"#00D9D9", paddingTop:"5px"}}>Taudaha Lake</h4>
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


export default Places;