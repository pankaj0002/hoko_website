import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../assets/map.css'


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 12.912984,
         lng: 77.642147
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC1wrGUPnuY2rEHYxM5S4z-LoTUsvcmVzo'
})(MapContainer);