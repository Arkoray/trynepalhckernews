import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Discriptiontwo from './Discriptiontwo'

export class Discription extends Component {
    state={
        newarr:[]
    }
    
    componentWillMount(){
        let pth= window.location.href;
        let spl=pth.split("=",2);
        let br=spl[1];
        console.log(br)
        this.setState({newarr:this.props.arr.filter((val)=>{
            if(val.id == br){
                return val
                
            }
            
        })})
        this.forceUpdate();
        
    }
    render() {
        return this.state.newarr.map((val)=>(
            <div style={maindiv}>
            <Discriptiontwo newarr={val}/>
            </div>
        ))
                   
          
    }
}
Discription.propTypes={
arr:Proptypes.array.isRequired
}
const maindiv={
width:'60%',
marginLeft:'20%',
background:'#f6f6ef'
}
export default Discription
