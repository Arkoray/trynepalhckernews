import React, { Component } from 'react'
import Proptypes from 'prop-types'
export class Discriptiontwo extends Component {
  componentDidMount(){
  
  }
    render() {
        return (
            <div>
               
                <p style={pad}><h1>{this.props.newarr.text}</h1></p>
                <p style={pad}><h3>{this.props.newarr.discription}</h3></p>
            </div>
        )
    }
}
Discriptiontwo.propTypes={
    newarr:Proptypes.array.isRequired
    }
    const pad={
    
        marginLeft:"30px"
    }
export default Discriptiontwo
