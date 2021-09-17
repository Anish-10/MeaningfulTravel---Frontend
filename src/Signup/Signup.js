import { event, nodeName } from 'jquery';
import React, { Component , state, userSignup} from 'react';
import '../CSS/main.css'
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Signup extends Component
{
    state = 
    {
        Fullname : "",
        Address : "",
        PhoneNumber : "",
        Username : "",
        Password : "",
        SignupCheck : false
    }

    userSignup = (e) =>
    {
        e.preventDefault();
        const data = {
            Fullname : this.state.Fullname,
            Address : this.state.Address,
            PhoneNumber : this.state.PhoneNumber,
            Username : this.state.Username,
            Password : this.state.Password
        }
        console.log(data);
        axios.post("http://localhost:100/signup", data)
        .then(response =>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render()
    {
        return(
            <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
                <div class="wrapper wrapper--w960">
                    <div class="card card-2">
                        <div class="card-heading" ></div>
                        <div class="card-body">
                            <h2 class="title">Sign Up</h2>
                            <form method="POST">
                                <div class="input-group">
                                    <input class="input--style-2" type="text" placeholder="Fullname" name="Fullname" value = {this.state.Fullname} onChange = {(event)=>{this.setState({Fullname:event.target.value})}}></input>
                                </div>
                                <div class="row row-space">
                                    <div class="col-6">
                                        <div class="input-group">
                                            <input class="input--style-2" type="text" placeholder="Address" name="Address" value = {this.state.Address} onChange = {(event)=>{this.setState({Address:event.target.value})}}></input>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group">
                                            <input class="input--style-2" type="text" placeholder="Phone Number" name="phonenumber" value = {this.state.PhoneNumber} onChange = {(event)=>{this.setState({PhoneNumber:event.target.value})}}></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <input class="input--style-2" type="text" placeholder="Username" name="Username" value = {this.state.Username} onChange = {(event)=>{this.setState({Username:event.target.value})}}></input>
                                </div>
                                <div class="input-group">
                                    <input class="input--style-2" type="password" placeholder="Password" name="Password" value = {this.state.Password} onChange = {(event)=>{this.setState({Password:event.target.value})}}></input>
                                </div>
                                <div class="p-t-30">
                                    <button class="btn btn--radius btn--green" type="submit" onClick = {this.userSignup}>Sign Up</button>
                                </div>
                                <br/>
                                <p>Already have an account ? <Link to="/" style={{textDecoration:"none"}}>Sign In </Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;