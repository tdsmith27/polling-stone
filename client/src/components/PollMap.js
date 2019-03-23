import ReactMapBoxGl, { Popup, Marker } from 'react-mapbox-gl';
import React from 'react';
import zipcode from 'zipcodes';
import mapboxgl from 'mapbox-gl';
import dummyData from '../mocklocationdata';
import pinImg from './logo.svg';

const pinImgStyle = {
   gridColumn: 1,
   gridRow: 1, 
   margin: 'auto'
}
const popupStyle = {
  zIndex: 40
}
const pinContainerStyle = {
  display: 'grid',
  textAlign: 'center'
}
const zipcodeInputStyle = {
  height:'5vh',
  width:'20vw',
  textAlign: 'center',
  fontSize: '1rem'
}
const zipcodePopupStyle = {
  position: 'absolute', 
  top: '7vh', 
  right: '5px', 
  width:'30vw', 
  backgroundColor: 'white', 
  textAlign:'center',
  fontSize:'1.2rem', 
  lineHeight:'2rem', 
  padding:'5px'
}
const mapContainerStyle = {
  height: '100%',
  width: '100%'
}
const zipFormStyle = {
  position:'absolute',
  top:5, 
  right:5
}
const Map = ReactMapBoxGl({
    accessToken: 'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'
})

class PollMapPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleMouseEnter() {
    this.setState({hover:true})
  }
  handleMouseLeave() {
    this.setState({hover:false})
  }
  render() {
    if (this.state.hover) {
      return (
        <div onMouseEnter={(e) => this.handleMouseEnter(e)} onMouseLeave={this.handleMouseLeave}> 
          <Marker
          coordinates={this.props.coords}
          anchor="bottom"
          >
            <img src={pinImg} height="30" width="30" style={pinImgStyle} alt={"Pin"} />
          </Marker>
          <Popup
          coordinates={this.props.coords}
          style={popupStyle}
          offset={{
            'bottom-left': [12, -38],  'bottom': [0, -20], 'bottom-right': [-12, -38]
          }}>
            <u>Address</u>:<br/>
            {this.props.address}<br />
            <u>Hours</u>:<br />
            {this.props.hours}
          </Popup>
        </div>
      )
    } else {
      return (
        <div onMouseEnter={(e) => this.handleMouseEnter(e)} onMouseLeave={this.handleMouseLeave}> 
        <Marker
          coordinates={this.props.coords}
          anchor="bottom"
          >
            <div style={pinContainerStyle}>
              <img src={pinImg} height="30" width="30" style={pinImgStyle} alt={"Pin"} />
            </div>
          </Marker>
        </div>
      )
    }
  }
}

class PollMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markers: [[-97.757729, 30.260281], [-97.740341, 30.274702], [-97.753317, 30.275432]],
            center: [-97.749672, 30.266375],
            input: '',
            zip: '78701',
            popup: false,
            invalidZip: false
          ///////////////Properties for when Polling locations are realeased to googles API/////////////////
        // street: '',
        // city: '',
        // state: '',
        // election: ''
        }
        this.handleLocation = this.handleLocation.bind(this)
        this.handleInput = this.handleInput.bind(this)
    } 
    /*async*/ handleLocation(e){
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
          this.setState({popup: true})
          setTimeout(()=>this.setState({popup: false}), 5000)
        }
        let location = zipcode.lookup(this.state.input)
        if (location) {
          let coordinates = new mapboxgl.LngLat(location.longitude, location.latitude)
          this.setState({
            center: coordinates
          })
        } else {
          this.setState({
            invalidZip: true
          })
          setTimeout(()=>this.setState({invalidZip: false, popup: false}), 3000)
        }
    }
    handleInput(e) {
        this.setState({
          input: e.target.value
        })
    }
    render(){
      if (!this.state.invalidZip) {
        if (!this.state.popup) {
          return (
          <>
            <Map center={this.state.center} zoom={[11]} containerStyle={mapContainerStyle} style={"mapbox://styles/mapbox/streets-v8"}> {//eslint-disable-line
            }
              <form onSubmit={this.handleLocation} style={zipFormStyle}>
                <input onChange={this.handleInput} type="text" placeholder="Search Polls by Zipcode" style={zipcodeInputStyle}></input>
              </form>
              {this.state.markers.map((pin, i) => {
                  return (
                      <PollMapPin 
                      coords={pin} 
                      address={dummyData[this.state.zip].locations[i].address}
                      hours={dummyData[this.state.zip].locations[i].hours}
                      key={i}
                      popups={this.state.popups}/>
                  )
              })}
            </Map>
          </>
          )
        } else {
          return (
            <>
              <Map center={this.state.center} zoom={[11]} containerStyle={mapContainerStyle} style={"mapbox://styles/mapbox/streets-v8"}> {//eslint-disable-line
            }
                <form onSubmit={this.handleLocation} style={zipFormStyle}>
                  <input onChange={this.handleInput} type="text" placeholder="Search Polls by Zipcode" style={zipcodeInputStyle}></input>
                </form>
                <div style={zipcodePopupStyle}>
                  The zipcode you entered did not contain mock location data.<br />
                  If you wanted to see example pins,<br />
                  Use zipcodes: 92260, 10009, 78628, or 78701
                </div>
                {this.state.markers.map((pin, i) => {
                    return (
                        <PollMapPin 
                        coords={pin} 
                        address={dummyData[this.state.zip].locations[i].address}
                        hours={dummyData[this.state.zip].locations[i].hours}
                        key={i}
                        popups={this.state.popups}/>
                    )
                })}
              </Map>
            </>
            )
        }

      } else {
        return (
                <>
              <Map center={this.state.center} zoom={[11]} containerStyle={mapContainerStyle} style={"mapbox://styles/mapbox/streets-v8"}> {//eslint-disable-line
            }
                <form onSubmit={this.handleLocation} style={zipFormStyle}>
                  <input onChange={this.handleInput} type="text" placeholder="Search Polls by Zipcode" style={zipcodeInputStyle}></input>
                </form>
                <div style={zipcodePopupStyle}>
                  Please enter a valid zipcode.
                </div>
                {this.state.markers.map((pin, i) => {
                    return (
                        <PollMapPin 
                        coords={pin} 
                        address={dummyData[this.state.zip].locations[i].address}
                        hours={dummyData[this.state.zip].locations[i].hours}
                        key={i}
                        popups={this.state.popups}/>
                    )
                })}
              </Map>
            </>
        )
      }
    }
}

export default PollMap;