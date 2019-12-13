import React, { Component } from 'react'
import Displayfour from './Displayfour'
import Proptypes from 'prop-types'
export class Pagint extends Component {
   
    render() {
        return(
            <div style={pag}>
                <Displayfour arr={this.props.arr} newsperpage={this.props.newsperpage} addnum={this.props.addnum}/>
            </div>
        )
    }
}
Pagint.propTypes={
    arr:Proptypes.array.isRequired,
    newsperpage:Proptypes.number.isRequired
}
const pag={
    width:"400px",
    marginLeft:'40%',
    marginTop:'20px'
}

export default Pagint
