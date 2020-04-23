import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// styles
import styles from "../styles/card.styles";

class RecordCard extends Component {
  render() {
    let { onPress, recordsDetails } = this.props;

    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => onPress(recordsDetails)}
      >
        <View
          style={
            recordsDetails.status
              ? styles.cardStatus_Complete
              : styles.cardStatus_Pending
          }
        ></View>
        <View style={styles.cardContent}>
          {/* <Image
            source={require("../../assets/Empcord_logo_1920x1920.png")}
            style={{ width: 100, height: 100, alignSelf: "center"}}
          /> */}
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Name: </Text>
            <Text>{recordsDetails.attendee.username}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Last known location: </Text>
            <Text>{recordsDetails.blockDetails.address.block}, {recordsDetails.blockDetails.address.streetAddress}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Timestamp: </Text>
            <Text>{recordsDetails.timeStamp}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default RecordCard;
