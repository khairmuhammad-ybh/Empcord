import React, {Component} from 'react';
import {View, Text} from 'react-native';

// styles
import styles1 from '../../styles/dashboard.style';
import styles2 from '../../styles/card.styles';
import styles3 from '../../styles/blockModel.styles';
import styles4 from '../../styles/map.styles';

// components
import GMap from '../../components/googleMap.component';

class BlockDirDetailsScreen extends Component {
  render() {

    const recordData = this.props.navigation.getParam("recordData", "NO-ID");
    console.log(recordData);
    return (
      <View style={styles1.cardContentContainer}>
        <View style={styles2.cardContainer}>
          <View
            style={
                recordData.status
                ? styles2.cardStatus_Complete
                : styles2.cardStatus_Pending
            }
          />
          <View style={styles2.cardContent}>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Foreman:{' '}
              </Text>
              <Text>{recordData.attendee.username}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Zone:{' '}
              </Text>
              <Text>{recordData.attendee.officerInCharge.zone}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Officer In-charge:{' '}
              </Text>
              <Text>{recordData.attendee.officerInCharge.officerName}</Text>
            </View>
            {/* Divider */}
            <Text style={[styles2.cardDetailsText, styles3.cardBlockDivider]}> 
              Block Details{' '}
            </Text>
            <View style={styles3.cardDivider} />
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Block:{' '}
              </Text>
              <Text>{recordData.blockDetails.address.block}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Address:{' '}
              </Text>
              <Text>{recordData.blockDetails.address.streetAddress}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Location:{' '}
              </Text>
              <Text>{recordData.blockDetails.location.qrLoc}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Attendee:{' '}
              </Text>
              <Text>{recordData.Attendee ? recordData.attendee.username : 'null'}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                TimeStamp:{' '}
              </Text>
              <Text>{recordData.timeStamp}</Text>
            </View>
            <View style={(styles2.innerCardContent, styles4.mapDisplayLayout)}>
              <GMap
                geo={recordData.blockDetails.geo}
                location={recordData.blockDetails.location}
                address={recordData.blockDetails.address}
                status={recordData.status}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default BlockDirDetailsScreen;
