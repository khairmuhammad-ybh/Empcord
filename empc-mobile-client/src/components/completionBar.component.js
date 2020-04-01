import React, { Component } from "react";
import { View, Dimensions, Button, Text } from "react-native";

import ProgressBarAnimated from "react-native-progress-bar-animated";

// redux
import { connect } from "react-redux";
import { store } from "../redux/store";
import * as Actions from '../redux/actions'

// styles
import styles from "../styles/styles";


class CompletionBar extends Component {
  componentDidMount() {
    let { total } = this.props;
    console.log(`Total: ${total}`);

    store.dispatch(Actions.set_total_progress_bar_state({total}))
  }

  updateProgressBar = () => {
    store.dispatch(Actions.update_completed_progress_bar_state())
    store.dispatch(Actions.update_progress_bar_status())
  }

  render() {
    const barWidth = Dimensions.get("screen").width - 30;

    return (
      <View>
        <View>
          <Text style={styles.progressLabel}>
            Completed: {store.getState().ProgressBar.completed}/
            {store.getState().ProgressBar.total}
          </Text>
          <ProgressBarAnimated
            width={barWidth}
            value={store.getState().ProgressBar.progress}
            backgroundColorOnComplete="#6CC644"
          />
          {/* <View style={styles.progressBarButtonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase Progress bar"
                onPress={() => this.updateProgressBar()}
              />
            </View>
          </View> */}
        </View>
      </View>
    );
  }
}

const stp = store => {
  let { ProgressBar } = store;

  return {
    progressBarState: ProgressBar
  };
};

export default connect(stp)(CompletionBar);
