import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Displaynewstwo from './Displaynewstwo';

export class Displaynews extends Component {
state={
    indexoflastnews:null,
    indexoffirstnews:null,
    currentnews:[],
    newarr:[]
}
componentWillMount(){

    this.props.clcdate()
}
    render() {
        const newarr=this.props.arr
        const currentpage=this.props.currentpage;
        const newsperpage=this.props.newsperpage
        const indexoflastnews=currentpage * newsperpage
        const indexoffirstnews=indexoflastnews-newsperpage
        const currentnews= newarr.slice(indexoffirstnews,indexoflastnews)
        return currentnews.map((val) =>(
            <div style={di}>
            <Displaynewstwo arr={val} ha={this.props.ha} caldate={this.props.caldate} uploadtime={this.props.uploadtime}/>
            
            </div>
        ))
    }
}
Displaynews.propTypes={
    arr:Proptypes.array.isRequired
}
const di={
    width:"500px",
    marginLeft:'40%',
    MarginTop:'30px',
    background:'#f6f6ef'
}
export default Displaynews
