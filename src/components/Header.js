import React, { Component } from 'react'
import {Link} from'react-router-dom'
export class Header extends Component {
    state={
        search:null,
    }
    chng=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    sendsrch=(e)=>{
        e.preventDefault()
        this.props.sendsrch(this.state.search)
    }
    render() {
        return (
            <div style={head}>
                <Link to={{pathname:'/home'}}><h1 style={par}>Nepal Hacker News</h1></Link>
                <input style={inp} type="text" name="search" value={this.state.search} onChange={this.chng}/>
                <button style={btn} onClick={this.sendsrch}>Search</button>
                <Link to={{pathname:'/add'}} ><button style={add}>Add News</button></Link>
            
            </div>
        )
    }
}
const head={
    width:'90%',
    background:'#ff6600',
    color:'white',
    marginLeft:"5%",
    
}
const inp={
    marginLeft:'40%',
    marginBottom:"40px",
    width:'200px'
   
}
const par={
    marginLeft:'10%',
    display:'inline',
    marginTop:'20px'
}
const btn={
    background:'green',
    color:'white'
}
const add={
    background:'green',
    marginLeft:'200px',
    width:'100px',
    height:'30px',
    color:'white'
}


export default Header
