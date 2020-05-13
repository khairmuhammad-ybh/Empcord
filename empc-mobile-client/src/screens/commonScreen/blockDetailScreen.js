import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

// styles
import stylesCard from '../../styles/card.styles';
import stylesBlock from '../../styles/blockDetail.styles';

// components
import GMap from '../../components/googleMap.component';

// redux
import {store} from '../../redux/store';

class BlockDirDetailsScreen extends Component {
  render() {
    const dirData = this.props.navigation.getParam('dirData', 'NO-ID');
    // console.log(dirData);
    let topFlex = store.getState().User.userRoles.includes('worker') ? 1 : 0.7;
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
              dirData.status
                ? stylesCard.cardStatus_Complete
                : stylesCard.cardStatus_Pending
            }
          />
          {store.getState().User.userRoles.includes('worker') ? (
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    stylesCard.cardDetailsText,
                    stylesBlock.cardBlockDetailsText,
                  ]}>
                  Officer:{' '}
                </Text>
                <Text>{dirData.assigned.officer}</Text>
              </View>
              <View style={stylesCard.innerCardContent}>
                <Text
                  style={[
                    stylesCard.cardDetailsText,
                    stylesBlock.cardBlockDetailsText,
                  ]}>
                  Zone:{' '}
                </Text>
                <Text>{dirData.assigned.zone}</Text>
              </View>
            </View>
          ) : null}
          <Text style={[stylesCard.cardDetailsText, stylesBlock.cardBlockDivider]}>
            Block Details{' '}
          </Text>
          <View style={stylesBlock.cardDivider} />
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[stylesCard.cardDetailsText, stylesBlock.cardBlockDetailsText]}>
              Block:{' '}
            </Text>
            <Text>{dirData.address.block}</Text>
          </View>
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[stylesCard.cardDetailsText, stylesBlock.cardBlockDetailsText]}>
              Address:{' '}
            </Text>
            <Text>{dirData.address.streetAddress}</Text>
          </View>
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[stylesCard.cardDetailsText, stylesBlock.cardBlockDetailsText]}>
              Location:{' '}
            </Text>
            <Text>{dirData.location.qrLoc}</Text>
          </View>
          <View style={stylesCard.innerCardContent}>
            <Text
              style={[stylesCard.cardDetailsText, stylesBlock.cardBlockDetailsText]}>
              Attendee:{' '}
            </Text>
            <Text>{dirData.Attendee ? dirData.Attendee : 'null'}</Text>
          </View>
        </View>
        <View style={{flex: 2, backgroundColor: '#cdd8da'}}>
          <GMap
            geo={dirData.geo}
            location={dirData.location}
            address={dirData.address}
            status={dirData.status}
          />
        </View>
      </View>
    );
  }
}
export default BlockDirDetailsScreen;
