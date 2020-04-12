import React, { Component } from "react";
import { View, Text, Alert, FlatList } from "react-native";

// Progress Bar
import ProgressBar from "../components/progressBar.component";

// Components
import CardEvent from "../components/cardEvent.component";

// Styles
import styles from "../styles/styles";

// Navigation
import { withNavigation } from "react-navigation";

class PendingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directories: [
        {
          _id: 1,
          assigned: {
            zone: "zone 1",
            officer: "Flowers",
          },
          status: true,
          address: {
            block: 349,
            streetAddress: "Hampton Place, Cloverdale, Palau, 5112",
          },
          location: {
            qrLoc: "Madison Place",
            qrGeo: {
              latitude: 71.253554,
              longitude: -125.656675,
            },
          },
          geo: {
            latitude: 8.309004,
            longitude: -111.844985,
          },
          Attendee: null,
        },
        {
          _id: 2,
          assigned: {
            zone: "zone 1",
            officer: "Eaton",
          },
          status: true,
          address: {
            block: 436,
            streetAddress: "Murdock Court, Trucksville, Iowa, 8331",
          },
          location: {
            qrLoc: "Montrose Avenue",
            qrGeo: {
              latitude: -48.502619,
              longitude: -56.610438,
            },
          },
          geo: {
            latitude: 71.371485,
            longitude: -95.423675,
          },
          Attendee: null,
        },
        {
          _id: 3,
          assigned: {
            zone: "zone 1",
            officer: "Jackson",
          },
          status: false,
          address: {
            block: 715,
            streetAddress: "Sedgwick Place, Darrtown, New Jersey, 1399",
          },
          location: {
            qrLoc: "Sumpter Street",
            qrGeo: {
              latitude: 73.73245,
              longitude: 158.639391,
            },
          },
          geo: {
            latitude: -48.913043,
            longitude: -132.130956,
          },
          Attendee: null,
        },
        {
          _id: 4,
          assigned: {
            zone: "zone 1",
            officer: "Payne",
          },
          status: false,
          address: {
            block: 722,
            streetAddress: "Plaza Street, Taycheedah, New York, 5121",
          },
          location: {
            qrLoc: "Bay Street",
            qrGeo: {
              latitude: 87.797504,
              longitude: 126.375572,
            },
          },
          geo: {
            latitude: -68.76948,
            longitude: -173.937717,
          },
          Attendee: null,
        },
        {
          _id: 5,
          assigned: {
            zone: "zone 1",
            officer: "Patrick",
          },
          status: true,
          address: {
            block: 261,
            streetAddress: "Surf Avenue, Summertown, Montana, 1504",
          },
          location: {
            qrLoc: "Central Avenue",
            qrGeo: {
              latitude: -62.452696,
              longitude: 65.781115,
            },
          },
          geo: {
            latitude: -85.72301,
            longitude: -107.6588,
          },
          Attendee: "Burt",
        },
        {
          _id: 6,
          assigned: {
            zone: "zone 1",
            officer: "Keller",
          },
          status: false,
          address: {
            block: 133,
            streetAddress: "Campus Place, Canby, Arizona, 4246",
          },
          location: {
            qrLoc: "Banner Avenue",
            qrGeo: {
              latitude: -31.508172,
              longitude: -161.568692,
            },
          },
          geo: {
            latitude: 72.748379,
            longitude: 7.69143,
          },
          Attendee: "Rivas",
        },
        {
          _id: 7,
          assigned: {
            zone: "zone 1",
            officer: "Alvarado",
          },
          status: false,
          address: {
            block: 986,
            streetAddress: "Jodie Court, Yogaville, Mississippi, 3583",
          },
          location: {
            qrLoc: "Vandervoort Place",
            qrGeo: {
              latitude: -79.554969,
              longitude: -82.302137,
            },
          },
          geo: {
            latitude: 71.726052,
            longitude: 135.479055,
          },
          Attendee: "Quinn",
        },
        {
          _id: 8,
          assigned: {
            zone: "zone 1",
            officer: "Contreras",
          },
          status: true,
          address: {
            block: 742,
            streetAddress: "Conklin Avenue, Cetronia, Ohio, 9282",
          },
          location: {
            qrLoc: "Rogers Avenue",
            qrGeo: {
              latitude: -19.758594,
              longitude: -50.509438,
            },
          },
          geo: {
            latitude: 74.273161,
            longitude: -24.034644,
          },
          Attendee: null,
        },
        {
          _id: 9,
          assigned: {
            zone: "zone 1",
            officer: "Adams",
          },
          status: false,
          address: {
            block: 103,
            streetAddress: "Moore Place, Thermal, Tennessee, 6323",
          },
          location: {
            qrLoc: "Kane Place",
            qrGeo: {
              latitude: 60.013915,
              longitude: -23.641535,
            },
          },
          geo: {
            latitude: -12.069559,
            longitude: 12.52593,
          },
          Attendee: null,
        },
        {
          _id: 10,
          assigned: {
            zone: "zone 1",
            officer: "Pollard",
          },
          status: false,
          address: {
            block: 160,
            streetAddress: "Krier Place, Harmon, Alaska, 3573",
          },
          location: {
            qrLoc: "Village Road",
            qrGeo: {
              latitude: 41.200095,
              longitude: -71.735968,
            },
          },
          geo: {
            latitude: -14.263913,
            longitude: 159.614574,
          },
          Attendee: "Lane",
        },
      ],
    };
  }

  onPress = (dirDetails) => {
    this.props.navigation.navigate("BlockModel", { dirData: dirDetails });
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.ContentContainer}>
        <View style={styles.progressBar}>
          <ProgressBar
            total={this.state.directories.length}
            type={"Pending"}
            progressTrend={false}
          />
        </View>
        <View style={styles.scrollContainer}>
          <Text style={styles.locationStatus}>Last updated location:</Text>
          <Text>Woodlands st 32</Text>
        </View>
        <FlatList
          style={styles.cardContentContainer}
          data={this.state.directories}
          renderItem={({ item }) => (
            <CardEvent onPress={this.onPress} dirDetails={item} />
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
    );
  }
}
export default withNavigation(PendingScreen);
