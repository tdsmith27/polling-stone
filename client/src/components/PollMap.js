import ReactMapBoxGl, { Marker } from 'react-mapbox-gl';
import React from 'react';
import zipcode from 'zipcodes';
import mapboxgl from 'mapbox-gl';
import dummyData from '../mocklocationdata';
import $ from 'jquery';
import Axios from 'axios';



const Map = ReactMapBoxGl({
    accessToken: 'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'
})
class PollMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markers: [[-97.757729, 30.260281], [-97.740341, 30.274702], [-97.753317, 30.275432]],
            center: [-97.749672, 30.266375],
            input: '',
            zip: '78701',
            ///////////////Properties for when Polling locations are realeased to googles API/////////////////
            // street: '', 
            // city: '',
            // state: '',
            // election: ''
        }
        this.handleLocation = this.handleLocation.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    } 

    async handleLocation(e){
        e.preventDefault()
        ////////////////////////////////uncomment to make work when polling locations are released////////////
        // let street = '1263 Pacific Ave.'
        // let city = 'Kansas City'
        // let state = 'KS'
        // let election = '2000'
        // let value = await Axios.get(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCHbtdkMNeSPRf7uMjp_uJzscPhOD5ZZGw&address=${street}%20${city}%20${state}&electionId=${election}`)
        // let newNew = value.data.pollingLocations.map((poll) => {
        //     let {line1, city, state, zip} = poll.address
        //     let pollAddress = `${line1}, ${city}, ${state}, ${zip}`
        //     return pollAddress
        // })
        // console.log(newNew);
        // let newValue = await newNew.map(async(address) => {
        //     let coordinates = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCHbtdkMNeSPRf7uMjp_uJzscPhOD5ZZGw`);
        //     return [coordinates.data.results[0].geometry.location.lng, coordinates.data.results[0].geometry.location.lat]
        // })
        //         console.log(await newValue[0]);

        if (dummyData[this.state.input]){
          let newMarkers = [];
          dummyData[this.state.input].locations.forEach((location) => {
            newMarkers.push(location.coordinates);
          })
          this.setState({markers: newMarkers, zip:this.state.input})
        } else {
            return
        }
        let location = zipcode.lookup(this.state.input)
        let coordinates = new mapboxgl.LngLat(location.longitude, location.latitude)
        this.setState({
            center: coordinates
        })
    }
    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleMouseEnter(e, i) {
      $(e.target.parentNode).append(
        `<div class="removeme" style="padding:5px;text-align:left;margin-left:150px;background-color:white;width:150px;grid-column:1;grid-row:1">
        <u>Address</u>:<br/>${dummyData[this.state.zip].locations[i].address}<br /><u>Hours</u>:<br />${dummyData[this.state.zip].locations[i].hours}
          </div>`
        )
    }
    handleMouseLeave() {
      $('.removeme').remove()
    }
    render(){ 
        return (
            <>
        <Map center={this.state.center} zoom={[11]} containerStyle={{height: '100%', width: '100%'}} style="mapbox://styles/mapbox/streets-v8">
        <form onSubmit={this.handleLocation} style={{position:'absolute', top:5, right:5}}>
        <input onChange={this.handleInput} type="text" placeholder="Search Polls by Zipcode" style={{height:'25px', width:'150px','textAlign': 'center'}}></input>
        </form>
        {this.state.markers.map((pin, i) => {
            return (

                    <Marker key={i}
                    coordinates={pin}
                    anchor="bottom" onMouseEnter={(e) => this.handleMouseEnter(e, i)} onMouseLeave={this.handleMouseLeave}>
                    <div style={{'display': 'grid', 'textAlign': 'center',}}><img src="http://ichef.bbci.co.uk/news/976/cpsprodpb/12787/production/_95455657_3312a880-230e-474c-b1d9-bb7c94f8b00e.jpg" height="15" width="15" style={{'gridColumn': 1, 'gridRow': 1, margin: 'auto'}}></img></div>
                    </Marker>
            )
        })}
        </Map>
        </>
        )
    }
}

export default PollMap