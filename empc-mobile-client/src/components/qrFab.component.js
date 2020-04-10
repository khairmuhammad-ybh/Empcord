import React, { Component } from "react";
import { Icon } from "react-native-elements";

import { View, Fab } from "native-base";

// Navigation
import { withNavigation } from "react-navigation";

const SIZE = 80;
class QrFab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <View
        style={{
          position: "absolute",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: SIZE,
            height: SIZE,
            bottom: 20,
            borderRadius: SIZE / 2,
          }}
        >
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{
              backgroundColor: "#14C3EE",
              width: SIZE,
              height: SIZE,
              bottom: -20,
              left: -20,
              borderRadius: SIZE / 2,
            }}
            position="bottomLeft"
            onPress={() =>
              this.props.navigation.navigate("QrScanner", {
                navigation: this.props.navigation,
              })
            }
          >
            {/* <Icon name="qrcode" /> */}
            <Icon
              type="material-community"
              name="qrcode-scan"
              size={24}
              color="#F8F8F8"
            />
          </Fab>
        </View>
      </View>
    );
  }
}
export default withNavigation(QrFab);
