import React, { Component } from 'react'

export class Addnews extends Component {
    state={
        title:"",
        url:"",
        discription:"",
        newarr:[
    ],
    time:""
    }
    componentWillMount(){
        this.props.clcdate()
    }
    inpchng=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    inpdata=(e)=>{
        e.preventDefault();
        this.setState({time:this.props.ha})
        // var d = new Date();
        // var date = d.getDate();
        // var month = (d.getMonth()+1);
        // var min= d.getMinutes();
        // var sec=  d.getSeconds();
        // var hrs= d.getHours();
        // var hours=hrs.toString();
        // var second=sec.toString();
        // var minute=min.toString();
        // if (min < 10) minute = "0" + minute;
        // if (sec < 10) second = "0" + second;
        // if (hrs < 10) hours = "0" + hours;
        // var time=hours +":" +minute + ":" + second;
        // var year = d.getFullYear();
        // const oldate= `${year}/${month}/${date} ${time}`
        const oldate="17:02:08";
        const newdate=this.props.ha;
        console.log(newdate)
        const username=localStorage.getItem('Username')
        console.log(username)
        
        this.props.inpdata(this.state.title,this.state.url,this.state.discription,username,newdate)
        this.setState({title:"",url:"",discription:""})
    }
    render() {
        return (
            <div style={di}>
                <h1 style={mt}>Your title</h1>
              <input type="text" name="title" value={this.state.title} onChange={this.inpchng}/><br/>
              <h1 style={mt}> Source Url</h1>
              <input type="text" name="url" value={this.state.url} onChange={this.inpchng}/> <br/>
              <h1 style={mt}> YourDiscription</h1>
              <textarea rows="4" name="discription" value={this.state.discription} cols="50" onChange={this.inpchng}>
              </textarea>
              <button onClick={this.inpdata}>ADD</button>
            </div>
        )
    }
}
const di={
    width:'200px',
    marginLeft:'40%'
}
const mt={
    marginTop:'20px'
}
export default Addnews
