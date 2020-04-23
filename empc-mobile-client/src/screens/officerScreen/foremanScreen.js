import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

// Progress Bar
import ProgressBar from '../../components/progressBar.component';

// Components
import RecordCard from '../../components/recordCard.component';

// Styles
import styles from '../../styles/dashboard.style';

class ForemanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          _id: 1,
          qrCode: {
            qrId: '6fb8cc81-ff78-45fb-9de0-346048a17883',
            qrData:
              '9c13e938-75f5-4035-b5fa-f6dc262e15ffex-in64a1a3d8-72d1-4904-8dce-f6737ca4d207',
          },
          attendee: {
            username: 'Cooke',
            officerInCharge: {
              officerName: 'Good',
              zone: 'zone 1',
            },
            geo: {
              latitude: 43.397036,
              longitude: 122.424856,
            },
          },
          status: true,
          blockDetails: {
            address: {
              block: 287,
              streetAddress: 'Montague Terrace, Hiko, Montana, 1996',
            },
            location: {
              qrLoc: 'Meserole Street',
              qrGeo: {
                latitude: -88.476945,
                longitude: 77.056105,
              },
            },
            geo: {
              latitude: 1.43183,
              longitude: 103.78032,
            },
          },
          timeStamp: 'Dec 03.1998 12:27:36:am',
        },
        {
          _id: 2,
          qrCode: {
            qrId: '3e2abe8b-a72c-497e-9923-b58d7e73b5f0',
            qrData:
              '5ffd4a34-9a9c-453d-bfa2-65d26a52fd51non-eu88436c38-d41e-4567-a8ea-1896e89dc99a',
          },
          attendee: {
            username: 'Zamora',
            officerInCharge: {
              officerName: 'Navarro',
              zone: 'zone 1',
            },
            geo: {
              latitude: -84.083944,
              longitude: 83.186693,
            },
          },
          status: true,
          blockDetails: {
            address: {
              block: 899,
              streetAddress: 'Cass Place, Gila, Oklahoma, 1558',
            },
            location: {
              qrLoc: 'Anthony Street',
              qrGeo: {
                latitude: 86.744116,
                longitude: -59.840514,
              },
            },
            geo: {
              latitude: 6.248798,
              longitude: -112.23455,
            },
          },
          timeStamp: 'Aug 21.1996 4:52:15:pm',
        },
        {
          _id: 3,
          qrCode: {
            qrId: 'c7433469-9790-425d-8a71-364c3ab69743',
            qrData:
              'a17dbadd-fda4-4a0e-ac1f-bcea8ff691fdea-magnad80187ed-9409-44fa-8cd3-e1c4d8050e84',
          },
          attendee: {
            username: 'Sheppard',
            officerInCharge: {
              officerName: 'Romero',
              zone: 'zone 1',
            },
            geo: {
              latitude: -14.060917,
              longitude: 147.846851,
            },
          },
          status: true,
          blockDetails: {
            address: {
              block: 983,
              streetAddress: 'Judge Street, Waiohinu, Mississippi, 4772',
            },
            location: {
              qrLoc: 'Belmont Avenue',
              qrGeo: {
                latitude: -6.427594,
                longitude: 71.927839,
              },
            },
            geo: {
              latitude: -38.112367,
              longitude: 69.14225,
            },
          },
          timeStamp: 'Jul 10.1989 6:14:22:am',
        },
      ],
    };
  }

  onPress = recordData => {
    this.props.navigation.navigate('RecordDetails', {recordData: recordData});
  };

  render() {
    return (
      <View style={styles.ContentContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.progressBar}>
            <ProgressBar
              total={this.state.records.length}
              type={'Completed'}
              progressTrend={true}
              row={true}
            />
          </View>
          <View style={styles.progressBar}>
            <ProgressBar
              total={this.state.records.length}
              type={'Pending'}
              progressTrend={false}
              row={true}
            />
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <Text style={styles.locationStatus}>Last updated location:</Text>
          <Text>Woodlands st 32</Text>
        </View>
        <FlatList
          style={styles.cardContentContainer}
          data={this.state.records}
          renderItem={({item}) => (
            <RecordCard onPress={this.onPress} recordsDetails={item} />
          )}
          keyExtractor={item => item._id.toString()}
        />
      </View>
    );
  }
}
export default ForemanScreen;
