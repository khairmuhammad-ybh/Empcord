import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BlockDirDetailsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>BlockDirDetailsScreen</Text>
                <Text>{this.props.navigation.getParam("id", "NO-ID")}</Text>
            </View>
        );
    }
}
export default BlockDirDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});