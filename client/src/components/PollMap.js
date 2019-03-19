import ReactMapBoxGl, {Layer, Feature, Marker} from 'react-mapbox-gl';
import React from 'react';
import zipcode from 'zipcodes';
import mapboxgl from 'mapbox-gl';
import dummyData from '../mocklocationdata'
import $ from 'jquery';
import { render } from 'react-testing-library';
//0dfb6c5087b74071bfd1730df6e96375

const Map = ReactMapBoxGl({
    accessToken: 'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'
})
class PollMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markers: [[-0.3416815, 51.5285584]],
            center: [-0.3416815, 51.5285584],
            input: '',
            zip: ''
        }
        this.handleLocation = this.handleLocation.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    } 
    handleLocation(e){
        e.preventDefault()
        if (dummyData[this.state.input]){
          let newMarkers = [];
          dummyData[this.state.input].locations.forEach((location) => {
            newMarkers.push(location.coordinates);
          })
          this.setState({markers: newMarkers, zip:this.state.input})
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
      console.log(dummyData)
      console.log('Mouse entering', i)
      $(e.target.parentNode).append(
        `<div class="removeme" style="margin-left:100px;background-color:white;height:100px;width:100px;grid-column:1;grid-row:1">
          ${dummyData[this.state.zip].locations[i].address}<br />${dummyData[this.state.zip].locations[i].hours}
          </div>`
        )
    }
    handleMouseLeave() {
      $('.removeme').remove()
    }
    render(){ 
        return (
            <div>
            <form onSubmit={this.handleLocation}>
            <input onChange={this.handleInput} type="text"></input>
            </form>
        <Map center={this.state.center} zoom={[11]} containerStyle={{height: '600px', width: '600px'}} style="mapbox://styles/mapbox/streets-v8">
        {this.state.markers.map((pin, i) => {
            return (

                    <Marker key={i}
                    coordinates={pin}
                    anchor="bottom" onMouseEnter={(e) => this.handleMouseEnter(e, i)} onMouseLeave={this.handleMouseLeave}>
                    <div style={{'display': 'grid', 'text-align': 'center',}}><img src="http://ichef.bbci.co.uk/news/976/cpsprodpb/12787/production/_95455657_3312a880-230e-474c-b1d9-bb7c94f8b00e.jpg" height="15" width="15" style={{'grid-column': 1, 'grid-row': 1, margin: 'auto'}}></img></div>
                    </Marker>
            )
        })}
        </Map>
        </div>
        )
    }
}
// class PollMap extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             viewport: {
//               width: 400,
//               height: 400,
//               latitude: 37.7577,
//               longitude: -122.4376,
//               zoom: 12
//             },
//             input: ''
//           };
//           this.dummyData = 78665
//           this.handleLocation = this.handleLocation.bind(this);
//           this.handleInput = this.handleInput.bind(this);
//           this.handleSubmit = this.handleSubmit.bind(this)
//         }
//         handleInput(e) {
//             this.setState({
//                 input: e.target.value
//             })
//         }
        
//         handleSubmit(e) {
//             e.preventDefault();
//             this.handleLocation(this.state.input)
//         }
        
//         handleLocation (zipcode) {
//             let location = zipcodes.lookup(zipcode);
//             this.setState({
//                 viewport:{
//                     width: 400,
//                     height: 400,
//                     latitude: location.latitude,
//                     longitude: location.longitude,
//                     zoom: 11
//                 }
//             })
//         }
//         componentDidMount() {
//             this.handleLocation(75605)
            
//         }
//     render() {
//         return (
//         <div>
//             <form onSubmit={this.handleSubmit}>
//                 <input onChange={this.handleInput} type="text"></input>
//             </form>
//             <ReactMapGL
//                 {...this.state.viewport}
//                 onViewportChange={(viewport) => this.setState({viewport})}
//                 mapboxApiAccessToken={'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'}
//             />
//         </div>
//         );
//     }
// }

export default PollMap