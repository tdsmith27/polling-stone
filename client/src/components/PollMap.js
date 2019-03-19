import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZGlub3N0YXJwbHVzIiwiYSI6ImNqdGVrZGFmbjAxZ3I0OW1ndGU0M2w1NHEifQ.NXU-IzfFbmcZ1v99GAqQSA",
});

class PollMap extends Component {
      constructor(props) {
        super(props);
        this.state = {
          markers: [[-0.2416815, 51.5285582], [0.2416816, 31.5285583], [0.2416816, 31.5285583], [10.2416816, 31.5285583], [40.2416816, 31.5285583], [20.2416816, 31.5285583], [0.3416816, 21.5285583], [10.2416816, 1.5285583]]
        }
      }
      render() {
        return (
          
          <Map style="mapbox://styles/mapbox/streets-v8" containerStyle={{width: '500px', height: '500px'}} >
          {this.state.markers.map((pin) => {
            return (
              <Marker
                coordinates={pin}
                anchor="bottom">
                <div>X</div>
              </Marker>
            )
          })}
          </Map>
        )
    }
}

export default PollMap