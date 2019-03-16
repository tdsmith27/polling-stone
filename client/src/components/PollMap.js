import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
class PollMap extends Component {
    state = {
        viewport: {
          width: 400,
          height: 400,
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8
        }
      };
      render() {
        return (
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'}
          />
        );
    }
}

export default PollMap