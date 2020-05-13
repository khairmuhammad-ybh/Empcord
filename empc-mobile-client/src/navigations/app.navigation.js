import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// React Navigation v4
import {createStackNavigator} from 'react-navigation-stack';

// Stack Components
import BottomNavResolver from './bottomNavResolver.navigation';

// Components
import Logout from '../components/logout.component';
import QrScanner from '../components/qrScanner.component';

// Screens
import BlockDetails from '../screens/commonScreen/blockDetailScreen';
import RecordDetails from '../screens/officerScreen/recordDetailScreen';

// Icons
import {Icon} from 'react-native-elements';

// styles
import styles from '../styles/main.styles';

// Redux
import {store} from '../redux/store';

const AppNavigation = createStackNavigator(
  {
    BottomNavResolver: BottomNavResolver,
    // Data Navigation Screens
    QrScanner: QrScanner,
    BlockDetails: BlockDetails,
    // Officer data nav
    RecordDetails: RecordDetails,
  },
  {
    initialRouteName: 'BottomNavResolver',
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      if (routeName === 'BottomNavResolver') {
        return BottomTabStackOptions(navigation);
      } else if (routeName === 'QrScanner') {
        return QrScannerOptions(navigation);
      } else if (routeName === 'BlockDetails') {
        return BlockDetailOptions(navigation);
      } else if (routeName === 'RecordDetails') {
        return RecordDetailOptions(navigation);
      }
    },
  },
);

const BottomTabStackOptions = navigation => ({
  headerTitle: () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserSetting', navigation)}>
      <Text style={styles.userTitleHeader}>
        {store.getState().User.userName}
      </Text>
    </TouchableOpacity>
  ),
  headerLeft: () => null,
  headerRight: () => <Logout {...navigation} />,
});

const QrScannerOptions = navigation => ({
  title: 'QR Scanner',
  headerLeft: () => (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={'md-arrow-back'}
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

const BlockDetailOptions = navigation => ({
  title: 'Block Details',
  headerLeft: () => (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={'md-arrow-back'}
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

const RecordDetailOptions = navigation => ({
  title: 'Record Details',
  headerLeft: () => (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={'md-arrow-back'}
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

export default AppNavigation;
