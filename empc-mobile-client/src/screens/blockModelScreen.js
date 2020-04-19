import React, {Component} from 'react';
import {View, Text} from 'react-native';

// styles
import styles1 from '../styles/dashboard.style';
import styles2 from '../styles/card.styles';
import styles3 from '../styles/blockModel.styles';
import styles4 from '../styles/map.styles';

// components
import GMap from '../components/googleMap.component';

class BlockDirDetailsScreen extends Component {
  render() {

    const dirData = this.props.navigation.getParam("dirData", "NO-ID");
    console.log(dirData);
    return (
      <View style={styles1.cardContentContainer}>
        <View style={styles2.cardContainer}>
          <View
            style={
              dirData.status
                ? styles2.cardStatus_Complete
                : styles2.cardStatus_Pending
            }
          />
          <View style={styles2.cardContent}>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Officer:{' '}
              </Text>
              <Text>{dirData.assigned.officer}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Zone:{' '}
              </Text>
              <Text>{dirData.assigned.zone}</Text>
            </View>
            <Text style={[styles2.cardDetailsText, styles3.cardBlockDivider]}>
              Block Details{' '}
            </Text>
            <View style={styles3.cardDivider} />
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Block:{' '}
              </Text>
              <Text>{dirData.address.block}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Address:{' '}
              </Text>
              <Text>{dirData.address.streetAddress}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Location:{' '}
              </Text>
              <Text>{dirData.location.qrLoc}</Text>
            </View>
            <View style={styles2.innerCardContent}>
              <Text
                style={[styles2.cardDetailsText, styles3.cardBlockDetailsText]}>
                Attendee:{' '}
              </Text>
              <Text>{dirData.Attendee ? dirData.Attendee : 'null'}</Text>
            </View>
            <View style={(styles2.innerCardContent, styles4.mapDisplayLayout)}>
              <GMap
                geo={dirData.geo}
                location={dirData.location}
                address={dirData.address}
                status={dirData.status}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default BlockDirDetailsScreen;
