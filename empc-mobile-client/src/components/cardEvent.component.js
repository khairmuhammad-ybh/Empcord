import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Alert, TouchableOpacity} from "react-native";

// styles
import styles from '../styles/styles'

class CardEvent extends Component {
  render() {
    let { onPress, dirDetails } = this.props

    return (
      <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(dirDetails.id)}>
        <View style={dirDetails.status ? styles.cardStatus_Complete : styles.cardStatus_Pending}></View>
        <View style={styles.cardContent}>
          <Image
            source={require("../../assets/Empcord_logo_1920x1920.png")}
            style={{ width: 100, height: 100, alignSelf: "center"}}
          />
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Block: </Text>
            <Text>{dirDetails.block}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Address: </Text>
            <Text>{dirDetails.address}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Location: </Text>
            <Text>{dirDetails.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default CardEvent;

