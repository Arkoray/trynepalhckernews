import React, { Component } from 'react'

export class Geoloc extends Component {
    state={
        ready:false,
        geoarr:[],
        error:null
    }
    componentDidMount(){
        let getoptions={
            enableHighAccuracy:true,
            timeOut:1000 * 30,
            maximumAge: 60 * 60 * 24
        };
        navigator.geolocation.getCurrentPosition(this.geosucess,this.geofaliure,getoptions)
    }
    geosucess=(position)=>{
        console.log(position)
        this.setState({geoarr:{lat:position.coords.latitude,long:position.coords.longitude}})
    }
    geofaliure=(err)=>{
       console.log(err)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Geoloc
