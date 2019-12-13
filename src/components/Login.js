import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Login extends Component {
    state={
        username:"",
        password:""
    }
    log=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    local=(e)=>{
        const username=this.state.username
        localStorage.setItem('Username',username)
    }
    render() {
        return (
            <div style={maindiv}>
                <div style={secdiv}>
               <h1>Username</h1>
               <input type="text" name="username" value={this.state.username} onChange={this.log}/> 
               <h1>Password</h1>
               <input type="password" name="password" value={this.state.password} onChange={this.log}/><br/>
               <Link to={{pathname:'/home'}}><button style={btn} onClick={this.local}>Login</button></Link>
               </div>
            </div>
        )
    }
}
const maindiv={
    width:'30%',
    marginLeft:'30%',
    background:'#f6f6ef'
    }
    const secdiv={
        width:'50%',
        marginLeft:'40%',
        
    }
const btn={
    background:'green',
    color:'white',
    marginTop:"20px"
}
export default Login
