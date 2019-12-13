import React, { Component } from 'react'
// import Pagint from './Pagint'
import Proptypes from 'prop-types'
export class Displayfour extends Component {
    state={
        pagenum:[]
    }
    componentDidMount(){
        const arr=this.props.arr;
        const newsperpage=this.props.newsperpage
        for (let i = 1; i <=Math.ceil(arr.length/newsperpage) ; i++) {
            this.state.pagenum.push(i)
            this.forceUpdate();
            
        }
    }
    addnum=(e)=>{
        e.preventDefault()
        this.props.addnum(e.target.id)
        console.log(e.target.id)
    }
    render() {
        return this.state.pagenum.map((val)=>(
            // <Pagint val={val}/>
            <button style={btn} id={val} onClick={this.addnum}>{val}</button>
        ))
    }
}
Displayfour.propTypes={
    arr:Proptypes.array.isRequired,
    newsperpage:Proptypes.number.isRequired
}
const pag={
    width:"400px",
    marginLeft:'40%',
    marginTop:'20px'
}
const btn={
    width:'60px',
    height:'30px',
    background:'#5caceb',
    color:'white',
    margin:'0 auto',
    marginLeft:'5px'
}
export default Displayfour
