import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

// styles
import stylesCard from '../../styles/card.styles';
import stylesBlock from '../../styles/blockDetail.styles';

// components
import GMap from '../../components/googleMap.component';

class BlockDirDetailsScreen extends Component {
  render() {
    const recordData = this.props.navigation.getParam('recordData', 'NO-ID');
    // console.log(recordData);
    let topFlex = 1.1;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#767676',
          marginTop: 15,
          alignSelf: 'center',
          width: Dimensions.get('screen').width - 30,
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2,
          marginBottom: 10,
        }}>
        <View
          style={{
            flex: topFlex,
            backgroundColor: '#F3F4F9',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <View
            style={
              recordData.status
                ? stylesCard.cardStatus_Complete
                : stylesCard.cardStatus_Pending
            }
          />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  stylesCard.cardDetailsText,
                  stylesBlock.cardBlockDetailsText,
                ]}>
                Foreman:{' '}
              </Text>
              <Text>{recordData.attendee.username}</Text>
            </View>
            <View style={stylesCard.innerCardContent}>
              <Text
                style={[
                  stylesCard.cardDetailsText,
                  stylesBlock.cardBlockDetailsText,
                ]}>
                Zone:{' '}
              </Text>
              <Text>{recordData.attendee.officerInCharge.zone}</Text>
            </View>
          </View>
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[
                stylesCard.cardDetailsText,
                stylesBlock.cardBlockDetailsText,
              ]}>
              Officer In-charge:{' '}
            </Text>
            <Text>{recordData.attendee.officerInCharge.officerName}</Text>
          </View>
          <Text
            style={[stylesCard.cardDetailsText, stylesBlock.cardBlockDivider]}>
            Block Details{' '}
          </Text>
          <View style={stylesBlock.cardDivider} />
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[
                stylesCard.cardDetailsText,
                stylesBlock.cardBlockDetailsText,
              ]}>
              Block:{' '}
            </Text>
            <Text>{recordData.blockDetails.address.block}</Text>
          </View>
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[
                stylesCard.cardDetailsText,
                stylesBlock.cardBlockDetailsText,
              ]}>
              Address:{' '}
            </Text>
            <Text>{recordData.blockDetails.address.streetAddress}</Text>
          </View>
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[
                stylesCard.cardDetailsText,
                stylesBlock.cardBlockDetailsText,
              ]}>
              Location:{' '}
            </Text>
            <Text>{recordData.blockDetails.location.qrLoc}</Text>
          </View>
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[
                stylesCard.cardDetailsText,
                stylesBlock.cardBlockDetailsText,
              ]}>
              Attendee:{' '}
            </Text>
            <Text>
              {recordData.Attendee ? recordData.attendee.username : 'null'}
            </Text>
          </View>
        </View>
        <View style={{flex: 2, backgroundColor: '#cdd8da'}}>
          <GMap
            geo={recordData.blockDetails.geo}
            location={recordData.blockDetails.location}
            address={recordData.blockDetails.address}
            status={recordData.status}
          />
        </View>
      </View>
    );
  }
}
export default BlockDirDetailsScreen;
