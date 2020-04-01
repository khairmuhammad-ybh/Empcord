import React, { Component } from "react";
import { View, Text, Alert, FlatList } from "react-native";

// Progress Bar
import CompletionBar from "../components/completionBar.component";

// Components
import CardEvent from "../components/cardEvent.component";

// Styles
import styles from "../styles/styles";

// Navigation
import { withNavigation } from "react-navigation";

class CompleteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directories: [
        {
          id: "1",
          block: "2009",
          address: "39 High Crossing Plaza",
          location: "Hoard",
          status: true
        },
        {
          id: "2",
          block: "1999",
          address: "693 Heffernan Trail",
          location: "La Follette",
          status: true
        },
        {
          id: "3",
          block: "1999",
          address: "44033 Rowland Place",
          location: "Main",
          status: true
        },
        {
          id: "4",
          block: "1993",
          address: "51 Shopko Circle",
          location: "Menomonie",
          status: false
        },
        {
          id: "5",
          block: "2006",
          address: "96097 Emmet Point",
          location: "Tennessee",
          status: true
        },
        {
          id: "6",
          block: "2009",
          address: "6 Prairieview Place",
          location: "Spaight",
          status: true
        },
        {
          id: "7",
          block: "1991",
          address: "07 Melvin Street",
          location: "Pankratz",
          status: true
        },
        {
          id: "8",
          block: "2006",
          address: "6 Little Fleur Point",
          location: "Haas",
          status: true
        },
        {
          id: "9",
          block: "2000",
          address: "0 Pierstorff Plaza",
          location: "Calypso",
          status: true
        },
        {
          id: "10",
          block: "2009",
          address: "917 Lindbergh Avenue",
          location: "Rutledge",
          status: false
        },
        {
          id: "11",
          block: "1992",
          address: "305 Stephen Park",
          location: "John Wall",
          status: false
        },
        {
          id: "12",
          block: "1994",
          address: "0 Trailsway Trail",
          location: "Grim",
          status: true
        },
        {
          id: "13",
          block: "2010",
          address: "23034 Atwood Place",
          location: "Fisk",
          status: true
        },
        {
          id: "14",
          block: "2012",
          address: "36810 Northview Hill",
          location: "Meadow Valley",
          status: true
        },
        {
          id: "15",
          block: "2001",
          address: "55 Summerview Way",
          location: "Anhalt",
          status: true
        },
        {
          id: "16",
          block: "1959",
          address: "39719 Bartillon Lane",
          location: "Lien",
          status: false
        },
        {
          id: "17",
          block: "1995",
          address: "96179 Namekagon Junction",
          location: "Lukken",
          status: true
        },
        {
          id: "18",
          block: "2003",
          address: "77568 Dexter Hill",
          location: "Orin",
          status: false
        },
        {
          id: "19",
          block: "2012",
          address: "3646 Nova Plaza",
          location: "Havey",
          status: true
        },
        {
          id: "20",
          block: "2003",
          address: "90 Bobwhite Plaza",
          location: "Laurel",
          status: false
        }
      ]
    };
  }

  onPress = id => {
    Alert.alert("Card pressed", `card ${id} is pressed`);
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.ContentContainer}>
        <View style={styles.progressBar}>
          <CompletionBar total={30}/>
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
        />
      </View>
    );
  }
}
export default withNavigation(CompleteScreen);
