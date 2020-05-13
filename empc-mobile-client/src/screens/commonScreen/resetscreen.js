import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ResetScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ResetScreen</Text>
            </View>
        );
    }
}
export default ResetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});