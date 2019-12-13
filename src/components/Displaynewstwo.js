import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom'
export class Displaynewstwo extends Component {
    // state={
    //     upload:null
    // }
    componentDidMount(){
    
      
      setTimeout(()=> this.props.caldate(this.props.ha,this.props.arr.newdate), 500)
       
            
    }
    render() {
        return (
            <div>
                <Link to={{ pathname: `/disc?page=${this.props.arr.id}` }}><p><h1 style={hone}>{this.props.arr.text}</h1><h3 style={hthree}>({this.props.arr.url})</h3></p></Link>
                <p><h4 style={bot}>{this.props.uploadtime}</h4><h4 style={bot}>Uploaded by:{this.props.arr.username}</h4></p>
            </div>
        )
    }
}
Displaynewstwo.propTypes={
    arr:Proptypes.array.isRequired
}
const hone={
    display:'inline-block'
}
const hthree={
    display:'inline-block',
    color:'#828282'
}
const bot={
    display:'inline-block',
    color:'#828282',
    borderRight:'.5px solid black',
    marginLeft:"10px",
    marginTop:"-30px"
}
export default Displaynewstwo
