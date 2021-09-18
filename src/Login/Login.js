import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
import React, { Component,state,userLogin } from 'react'
import '../CSS/main.css'


class Login extends Component
{
    state = {
        Username : "",
        Password : "",
        loginCheck : false,
        message : ""
    }

    userLogin = (e) =>
    {
        e.preventDefault()
        const data = {
            Username : this.state.Username,
            Password : this.state.Password
        }

        console.log(data)
        axios.post("http://localhost:100/login", data)
        .then(response =>{
            console.log(response)
            localStorage.setItem('token', response.data.token);
            this.setState({
                loginCheck : true,
                message : response.data.message
            })
        })
        .catch(err=>{
            console.log(err.response)
            this.setState({
                message : err.response.data.message
            })
        })
    }

    render()
    {
        //redirect
        // if(this.state.loginCheck == true)
        // {
        //     return window.location.href="/"
        // }
        if(this.state.message){
            var msg = this.state.message
        }

        return(
            <div>
                <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
                    <div class="wrapper wrapper--w960">
                        <div class="card card-2">
                            <div class="card-heading"></div>
                            <div class="card-body">
                                <h2 class="title">Sign In</h2>
                                <form method="POST">
                                    <div class="input-group">
                                        <input class="input--style-2" type="text" placeholder="Username" name="Username" value={this.state.Username} onChange={(event)=>{this.setState({Username:event.target.value})}}></input>
                                    </div>
                                    <div class="input-group">
                                        <input class="input--style-2" type="password" placeholder="Password" name="Password" value={this.state.Password} onChange={(event)=>{this.setState({Password:event.target.value})}}></input>
                                    </div>
                                    <div class="p-t-30">
                                        <button class="btn btn--radius btn--green" type="submit" data-toggle="modal" data-target="#loginModal" onClick={this.userLogin}>Sign In</button>

                                        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                <div class="modal-body">
                                                    <h4>{msg}</h4>
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
                                    <br/>
                                    <p>Don't have an account ? <Link to="/signup" style={{textDecoration:"none"}}>Sign Up </Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Login;