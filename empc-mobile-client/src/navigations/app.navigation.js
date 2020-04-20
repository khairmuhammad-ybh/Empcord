import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// React Navigation v4
import {createStackNavigator} from 'react-navigation-stack';

// Stack Components
import BottomTabStack from './bottomNav.navigation';

// Components
import Logout from '../components/logout.component';
import QrScanner from '../components/qrScanner.component';

// Screens
import BlockModel from '../screens/blockModelScreen';

// Icons
import {Icon} from 'react-native-elements';

// styles
import styles from '../styles/main.styles';

// Redux
import {store} from '../redux/store';

const AppNavigation = createStackNavigator(
  {
    BottomTabStack: BottomTabStack,
    // Data Navigation Screens
    QrScanner: QrScanner,
    BlockModel: BlockModel,
  },
  {
    initialRouteName: 'BottomTabStack',
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      if (routeName === 'BottomTabStack') {
        return BottomTabStackOptions(navigation);
      } else if (routeName === 'QrScanner') {
        return QrScannerOptions(navigation);
      } else if (routeName === 'BlockModel') {
        return BlockModelOptions(navigation);
      }
    },
  },
);

const BottomTabStackOptions = navigation => ({
  headerTitle: () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserSetting', navigation)}>
      <Text style={styles.userTitleHeader}>{store.getState().User.userName}</Text>
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

const BlockModelOptions = navigation => ({
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

export default AppNavigation;
