import React, { Component } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'


class PlaceDescription extends Component
{
    render()
    {
        return(
            <div>
                <div><Header></Header></div>
                <div>
                    {/* Information */}
                    <div class="card" style={{marginLeft:"0.5%", marginRight:"0.5%"}}>
                        <div class="card-body">
                            <h3 style={{fontFamily:"Comic Sans MS", fontWeight:"bold", textDecoration:"underline"}}>Information</h3>
                            <p style={{textAlign:"justify"}}>Chandragiri Temple is situated at the top hill, seven kilometers away from Thankot. 
                            It lies on the south-west side of the Kathmandu valley. 
                            The temple is also known as Bhaleshwor Mahadev temple. 
                            Hindu devotees come here to worship Lord Shiva and take blessings. 
                            It is believed that it is the same spot where Satidevi’s forehead fell off from her dead body in the place. 
                            According to the legend, it is believed that Shiva’s consort gave up her life jumping in a fire pyre when Daksha insulted her husband. 
                            Since then, it is said Bhaleshwor Mahadev appeared in this place where the temple is situated. 
                            The hill provides panoramic views of the Himalayan ranges from Annapurna to Everest. 
                            Many Hindus pilgrimages all over the world visit this temple at least once in their lifetime.
                            Animals are sacrificed in this temple to make the Lord happy.  
                            A cable-car is provided for the visitors to get up to the hill.  
                            We would recommend you to visit this temple at least once if you are near this place.</p>
                        </div>
                    </div>

                    {/* Photos */}
                    <div class="card" style={{marginLeft:"0.5%", marginRight:"0.5%", marginTop:"0.5%"}}>
                        <div class="card-body">
                            <h3 style={{fontFamily:"Comic Sans MS", fontWeight:"bold", textDecoration:"underline"}}>Photos</h3>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/i1.jpg'} style={{height:"100%"}}></img>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/i2.jpg'} style={{height:"100%"}}></img>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/i3.jpg'} style={{height:"100%"}}></img>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <Link to="/places-info1"><div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/p1.jpg'} style={{height:"100%", position:"absolute", opacity:"0.5"}}></img>
                                        <h3 style={{position:"relative", textAlign:"center", paddingTop:"35%"}}>+10</h3>
                                    </div></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Videos */}
                    <div class="card" style={{marginLeft:"0.5%", marginRight:"0.5%", marginTop:"0.5%"}}>
                        <div class="card-body">
                            <h3 style={{fontFamily:"Comic Sans MS", fontWeight:"bold", textDecoration:"underline"}}>Videos</h3>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="card" style={{height:"100%"}}>
                                        <ReactPlayer url='https://www.youtube.com/watch?v=5H_mEnfHwfo'/>
                                    </div>
                                </div>
                                
                                <div class="col-sm-6">
                                    <div class="card" style={{height:"100%"}}>
                                        <ReactPlayer url='https://www.youtube.com/watch?v=IpWCD2Fh1hA'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Weather Information */}
                    <div class="card" style={{marginLeft:"0.5%", marginRight:"0.5%"}}>
                        <div class="card-body">
                            <h3 style={{fontFamily:"Comic Sans MS", fontWeight:"bold", textDecoration:"underline"}}>Weather Information</h3>
                            <p style={{textAlign:"justify"}}><b>Chandragiri Weather in January-March:</b> These months are considered as the best time to visit Chandragiri owing to temperatures ranging from 34℉ to 81℉. An ideal situation to get around exploring all the points of interest in Chandragiri. Expect an average precipitation of 23.27 mm.</p><br/>
                            <p style={{textAlign:"justify"}}><b>Chandragiri Weather in April:</b> With average humidity of 70%, temperatures sway between 52℉ to 88℉. Now this may cause a little discomfort, but we are sure not complaining! This weather is perfect to go sightseeing around the city of Chandragiri. This time period sees an average precipitation of 122 mm.</p><br/>
                            <p style={{textAlign:"justify"}}><b>Chandragiri Weather in May:</b> If you love sunny weather that isn't too cold to hinder your travel and not hot enough to make you sweat as you explore the gorgeous spots of Chandragiri, then May is the month for you! The temperature swings between 57℉ and 90℉ and the average temperature is 73℉. This is an ideal time to visit Chandragiri. The average precipitation recorded around this time is 12.43 mm.</p><br/>
                            <p style={{textAlign:"justify"}}><b>Chandragiri Weather in June:</b> The highest temperature recorded is 86℉ which would make you want to run to the nearest café to down a glass of chilled drink, but the moderate humidity of 79% makes this month an excellent time to visit Chandragiri. This time period sees an average precipitation of 170.74 mm.</p><br/>
                            <p style={{textAlign:"justify"}}><b>Chandragiri Weather in July-September:</b> A pleasant time to be in the Chandragiri, the temperature lies within the range of 61℉ and 88℉, the average being 73℉. Although the weather is humid, it is not hot enough to make you not like it outdoors! All in all, a good time to be here! The average precipitation recorded around this time is 236.48 mm.</p><br/>
                            <p style={{textAlign:"justify"}}><b>Chandragiri Weather in October-November:</b> An excellent season to visit Chandragiri, the average temperature falls around 63℉. The weather is great for outdoors, the air being moderately humid. This is most likely one of the best times to visit Chandragiri and also a tourist high season. The average precipitation recorded around this time is 34.87 mm.</p><br/>
                            <p style={{textAlign:"justify"}}><b>Chandragiri Weather in December:</b> If you are contemplating the best time to visit Chandragiri, the month of December fits the bill just right. The weather is nice and sultry with the lowest temperature being around 36℉ and the warmest being a usual 72℉. Albeit a humidity of 66%, December marks a good time to explore the best things to do in Chandragiri. Expect an average precipitation of 6.53 mm.</p><br/>
                        </div>
                    </div>

                    {/* Activities */}
                    <div class="card" style={{marginLeft:"0.5%", marginRight:"0.5%"}}>
                        <div class="card-body">
                            <h3 style={{fontFamily:"Comic Sans MS", fontWeight:"bold", textDecoration:"underline"}}>Activities</h3>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/a1.jpg'} style={{height:"100%"}}></img>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/a2.jpg'} style={{height:"100%"}}></img>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/a3.jpg'} style={{height:"100%"}}></img>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <Link to="/places-info1"><div class="card" style={{height:"100%"}}>
                                        <img src={process.env.PUBLIC_URL + 'Images/a4.jpg'} style={{height:"100%", position:"absolute", opacity:"0.5"}}></img>
                                    </div></Link>
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


export default PlaceDescription;