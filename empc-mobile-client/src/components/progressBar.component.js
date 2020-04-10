import React, { Component } from "react";
import { View, Dimensions, Button, Text } from "react-native";

import ProgressBarAnimated from "react-native-progress-bar-animated";

// redux
import { connect } from "react-redux";
import { store } from "../redux/store";
import * as Actions from "../redux/actions";

// styles
import styles from "../styles/styles";

class CompletionBar extends Component {
  componentDidMount() {
    let { total, progressTrend } = this.props;
    // console.log(`Total: ${total} progressTrend: ${progressTrend}`);

    store.dispatch(
      Actions.set_total_progress_bar_state({ total, progressTrend })
    );
  }

  updateProgressBar = () => {
    let { progressTrend } = this.props;
    if (progressTrend) {
      store.dispatch(Actions.update_incremental_progress_bar_state());
    } else {
      store.dispatch(Actions.update_decremental_progress_bar_state());
    }

    store.dispatch(Actions.update_progress_bar_state({ progressTrend }));
  };

  render() {
    const barWidth = Dimensions.get("screen").width - 30;

    let { type, progressTrend } = this.props;

    return (
      <View>
        <View>
          <Text style={styles.progressLabel}>
            {type}:{" "}
            {progressTrend
              ? store.getState().ProgressBar.completed
              : store.getState().ProgressBar.pending}
            /{store.getState().ProgressBar.total}
          </Text>
          <ProgressBarAnimated
            width={barWidth}
            value={
              progressTrend
                ? store.getState().ProgressBar.progressCompleted
                : store.getState().ProgressBar.progressPending
            }
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
