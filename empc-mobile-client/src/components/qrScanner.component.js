import React, {Component} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
import {QRScannerView} from 'react-native-qrcode-scanner-view';

export default function QrScanner({navigation}) {
  // const onSuccess = e => {
  //   console.log(e)
  //   navigation.goBack()
  // };
  renderTitleBar = () => (
    <Text style={{color: 'white', textAlign: 'center', padding: 16}}>
      Title
    </Text>
  );

  renderMenu = () => (
    <Text style={{color: 'white', textAlign: 'center', padding: 16}}>Menu</Text>
  );

  barcodeReceived = event => {
    console.log('Type: ' + event.type + '\nData: ' + event.data);
    navigation.goBack()
  };


  return (
    // <QRCodeScanner
    //   onRead={onSuccess}
    //   // flashMode={QRCodeScanner.Constants.FlashMode.torch}
    //   topContent={
    //     <Text style={styles.centerText}>
    //       Go to{' '}
    //       <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
    //       your computer and scan the QR code.
    //     </Text>
    //   }
    // />
    <View style={{flex: 1}}>
      <QRScannerView
        onScanResult={barcodeReceived}
        // renderHeaderView={renderTitleBar}
        // renderFooterView={renderMenu}
        scanBarAnimateReverse={true}
        hintText={null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
