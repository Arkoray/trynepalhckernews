import React, { Component } from 'react'

export class Sortarr extends Component {
    sortchng=(e)=>{
        this.props.sortchng(e.target.value)

    }
    render() {
        return (
            <div style={sort}>
                <select style={inp} onChange={this.sortchng}>
                <option value="text">Name</option>
                <option value="newdate">Time</option>
                
                
                </select>
            </div>
        )
    }
}
const sort={
    marginLeft:'40%',
    width:'400px',
    marginTop:'20px',
    marginBottom:'20px'
}
const inp={
    width:'50%',

}
export default Sortarr
