import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PendingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PendingScreen</Text>
            </View>
        );
    }
}
export default PendingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});