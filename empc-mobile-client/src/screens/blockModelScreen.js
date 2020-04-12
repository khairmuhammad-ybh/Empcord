import React, { Component } from "react";
import { View, Text } from "react-native";

// styles
import styles from "../styles/styles";

// components
import GMap from "..//components/googleMap.component";

class BlockDirDetailsScreen extends Component {
  render() {
    const dirDetails = this.props.navigation.getParam("dirData", "NO-ID");
    // console.log(dirDetails);
    return (
      <View style={styles.cardContentContainer}>
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
              <Text style={[styles.cardDetailsText, styles.cardBlockDetailsText]}>Officer: </Text>
              <Text>{dirDetails.assigned.officer}</Text>
            </View>
            <View style={styles.innerCardContent}>
              <Text style={[styles.cardDetailsText, styles.cardBlockDetailsText]}>Zone: </Text>
              <Text>{dirDetails.assigned.zone}</Text>
            </View>
            <Text style={[styles.cardDetailsText, styles.cardBlockDivider]}>Block Details </Text>
            <View style={styles.cardDivider}/>
            <View style={styles.innerCardContent}>
              <Text style={[styles.cardDetailsText, styles.cardBlockDetailsText]}>Block: </Text>
              <Text>{dirDetails.address.block}</Text>
            </View>
            <View style={styles.innerCardContent}>
              <Text style={[styles.cardDetailsText, styles.cardBlockDetailsText]}>Address: </Text>
              <Text>{dirDetails.address.streetAddress}</Text>
            </View>
            <View style={styles.innerCardContent}>
              <Text style={[styles.cardDetailsText, styles.cardBlockDetailsText]}>Location: </Text>
              <Text>{dirDetails.location.qrLoc}</Text>
            </View>
            <View style={styles.innerCardContent}>
              <Text style={[styles.cardDetailsText, styles.cardBlockDetailsText]}>Attendee: </Text>
              <Text>{dirDetails.Attendee ? dirDetails.Attendee : "null"}</Text>
            </View>
            <View
              style={
                (styles.innerCardContent,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 25,
                })
              }
            >
              <GMap geo={dirDetails.geo} location={dirDetails.location} address={dirDetails.address} status={dirDetails.status} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default BlockDirDetailsScreen;
