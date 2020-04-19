import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE, Callout } from "react-native-maps";

// properties
import properties from "../utils/props.utils";

// Styles
import styles from "../styles/map.styles";

class GMap extends Component {
  render() {
    let { geo, location, address, status } = this.props;
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        initialRegion={{
          latitude: geo.latitude,
          longitude: geo.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: geo.latitude, longitude: geo.longitude }}
          pinColor={
            status ? properties.pinColorComplete : properties.pinColorPending
          }
        >
          <Callout>
            <View>
              <Text style={styles.mapCalloutTitle}>{location.qrLoc}</Text>
              <Text style={styles.mapCalloutDesc}>{address.block + ", " + address.streetAddress}</Text>
            </View>
          </Callout>
        </MapView.Marker>
        
      </MapView>
    );
  }
}
export default GMap;
