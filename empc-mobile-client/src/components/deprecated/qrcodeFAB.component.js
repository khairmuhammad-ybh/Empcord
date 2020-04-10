import React, { Component } from "react";
import { View, Fab } from "native-base";
import { Alert } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Navigation
import { withNavigation } from "react-navigation";

// QR Scanner
import QrScanner from "../qrScanner.component";

class QrcodeFAB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    let IconComponent;
    IconComponent = MaterialCommunityIcons;
    return (
      // <Container>
      <View style={{ flex: 1 }}>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#14C3EE" }}
          position="bottomLeft"
          onPress={() => this.props.navigation.navigate("QrScanner", {navigation: this.props.navigation})}
        >
          {/* <Icon name="qrcode" /> */}
          <IconComponent name="qrcode-scan" />
        </Fab>
      </View>
      // </Container>
    );
  }
}

export default withNavigation(QrcodeFAB);
