import React, { Component } from "react";
import { View, Text } from "react-native";

// styles
import styles from "../styles/styles";

class BlockDirDetailsScreen extends Component {
  render() {
    const dirDetails = this.props.navigation.getParam("dirData", "NO-ID");
    console.log(dirDetails);
    return (
      <View style={styles.cardContainer}>
        <View
          style={
            dirDetails.status
              ? styles.cardStatus_Complete
              : styles.cardStatus_Pending
          }
        ></View>
        <View style={styles.cardContent}>
        <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Officer: </Text>
            <Text>{dirDetails.assigned.officer}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Zone: </Text>
            <Text>{dirDetails.assigned.zone}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Block Details </Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Block: </Text>
            <Text>{dirDetails.address.block}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Address: </Text>
            <Text>{dirDetails.address.streetAddress}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Location: </Text>
            <Text>{dirDetails.location.qrLoc}</Text>
          </View>
          <View style={styles.innerCardContent}>
            <Text style={styles.cardDetailsText}>Attendee: </Text>
            <Text>{dirDetails.Attendee ? dirDetails.Attendee : "null"}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default BlockDirDetailsScreen;
