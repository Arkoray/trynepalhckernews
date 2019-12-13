import React, { Component } from 'react';
import Header from './components/Header';
// import Displayfour from './components/Displayfour'
import Addnews from './components/Addnews';
import Displaynews from './components/Displaynews';
import Discription from './components/Discription';
import Login from './components/Login'
import Geoloc from './components/Geoloc'
import Sortarr from './components/Sortarr'
import Pagint from './components/Pagint'
import uuid from 'uuid';
import {BrowserRouter as Router,Route} from 'react-router-dom' 

export class App extends Component {
  state={
    arr:[{
      id:1,
      text:'abc',
      url:'url',
      discription:'ho',
      newdate:new Date("2019/12/11 17:15:08"),
      username:"admin"
},
{
  id:2,
  text:'zbc',
  url:'url',
  discription:'ho',
  newdate:new Date("2019/12/08 17:10:08"),
  username:"admin"

}],
    
    ha:"",
    uploadtime:null,
    currentpage:1,
    newsperpage:4,
  }
  inpdata=(text,url,discription,username,oldate)=>{

    const newarr={
      id:uuid.v4(),
      text:text,
      url:url,
      discription:discription,
      username:username,
      newdate:new Date(`${oldate}`)
    }
  
    this.setState({arr:[...this.state.arr,newarr]})
  }
  caldate=(dt,newdate)=>{
    // const rg=`${year}/${month}/${date}`
    const newdt= new Date(newdate)
    
    // const hu=this.state.ha
    // console.log(hu)
    const oldate= new Date(dt)
    const midate= Math.abs(newdt-oldate)
    console.log(newdt,oldate)
    // const tn=  oldate.getTime()-this.state.newdate.getTime()
    // const newtime=new Date(time-this.state.time)
    console.log(midate)
    const ms= parseInt(midate);
    const latestdate=ms/1000/86400
    const sendate=Math.round(latestdate)
    if(latestdate <1){
      const sec=ms/1000
      const min = Math.round(sec/60)
      const hrs = Math.round(min/60)
      // if(sec >)
      console.log(min)
      if(min > 60){
          this.setState({uploadtime:`${hrs} hours ago`})
      }
      else{
        this.setState({uploadtime:`${min} min ago`})
      }
    }
    else{
    this.setState({uploadtime:`${sendate} days ago`})
    }
  }
  sendsrch=(search)=>{
    this.setState({arr:[...this.state.arr].filter((val)=>{
      if(val.text === search){
        return val
      }
    })})
  }
  sortchng=(value)=>{
    const bl=value;
    console.log(bl)
    this.setState({arr:[...this.state.arr].sort((a,b)=>{
      var first=a[value]
      var second=b[value]
      console.log(first,second,value)
      if(value !== "newdate"){
       first= first.toUpperCase()
       second =second.toUpperCase()
      }
      if( first < second){
        return -1;
      }
      else {
        return 1
      }
    })})
  }
  addnum=(id)=>{
    this.setState({currentpage:Number(id)})
  }
  clcdate=()=>{
     var d = new Date();
        var date = d.getDate();
        var month = (d.getMonth()+1);
        var min= d.getMinutes();
        var sec=  d.getSeconds();
        var hrs= d.getHours();
        var hours=hrs.toString();
        var second=sec.toString();
        var minute=min.toString();
        if (min < 10) minute = "0" + minute;
        if (sec < 10) second = "0" + second;
        if (hrs < 10) hours = "0" + hours;
        var time=hours +":" +minute + ":" + second;
        var year = d.getFullYear();
        const oldate= `${year}/${month}/${date} ${time}`
  this.setState({ha:oldate})
}
  render() {
  return (
    <Router>
    <div className="App">
    <Header sendsrch={this.sendsrch}/>
    
      <Route path="/home" render={props=>(
        <React.Fragment>
           <Sortarr sortchng={this.sortchng}/>
    <Displaynews arr={this.state.arr} currentpage={this.state.currentpage} newsperpage={this.state.newsperpage} caldate={this.caldate} clcdate={this.clcdate} ha={this.state.ha} uploadtime={this.state.uploadtime}/>
    <Pagint arr={this.state.arr} newsperpage={this.state.newsperpage} addnum={this.addnum}/>
    <Geoloc/>
    {/* <Pagint clcdate={this.clcdate} ha={this.state.ha}/> */}
        </React.Fragment>
      )}>
   
    </Route>
    <Route exact path="/"><Login/></Route>
        <Route path="/add"><Addnews inpdata={this.inpdata} clcdate={this.clcdate} ha={this.state.ha}/></Route>
        <Route path="/disc"><Discription  arr={this.state.arr}/></Route>
    </div>
    </Router>
      )
    }
}

export default App;
