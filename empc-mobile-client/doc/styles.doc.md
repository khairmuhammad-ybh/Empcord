# Styles

Use of external stylesheets to segregate for different screens

---

**NO EXTRA DEPENDENCIES OTHER THAN `react-native`**

| StyleSheet  | Naming convention     |
| ----------- | --------------------- |
| main        | main.styles.js        |
| dashboard   | dashboard.styles.js   |
| progressBar | progressBar.styles.js |
| card        | card.styles.js        |
| blockModel  | blockModel.styles.js  |
| map         | map.styles.js         |

### Usage

**main.styles.js**

General purpose use, re-usable stylesheet to be use when in need to to implement common styling to a component

**dashboard.styles.js**

Styles used solely for dashboard screen (after login screen)

**progressBar.styles.js**

Styles used for _progressBar_ styling and alignment with the dashboard screen

**card.styles.js**

Styles used for creating a _card_ and to be populated by _FlatList_ component in dashboard screen

**blockModel.styles.js**

Styles used for creating a larger _card_ component for viewing full details of block information when user tapped on the _card_ populated by _FlatList_ from dashboard screen

**map.styles.js**

Styles used for setting size and alignment for _Map_ component that is being displayed in _blockModelScreen_ screen when user tapped on the _card_ populated by _FlatList_ from dashboard screen

### Source code

**main.styles.js**

```
import { StyleSheet } from "react-native";

const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    top: -25,
    width: 200,
    height: 200,
  },
  loginTextInput: {
    margin: 10,
    padding: 8,
    borderColor: "#000",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    width: "80%",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    margin: 20,
    padding: 12,
    width: "80%",
    borderRadius: 5,
  },
  resetPassword: {
    color: "#316EE1",
  },
  resetLinkContainer: {
    width: "80%",
    alignItems: "flex-end",
  },
  dashboardContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 50,
  },
});

export default stylesMain
```

**dashboard.styles.js**

```
import {StyleSheet} from 'react-native';

const stylesDashboard = StyleSheet.create({
  contentContainer: {
    flex: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  scrollContainer: {
    paddingStart: 20,
  },
  locationStatus: {
    fontWeight: "bold",
  },
  cardContentContainer: {
    marginTop: 15,
    alignSelf: "center",
  },
});
export default stylesDashboard;

```

**progressBar.styles.js**

```
import {StyleSheet} from 'react-native';

const stylesProgressBar = StyleSheet.create({
  progressBarButtonContainer: {
    marginTop: 15,
  },
  progressLabel: {
    // color: "#999",
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    alignSelf: 'center',
  },
});
export default stylesProgressBar;

```

**card.styles.js**

```
import {StyleSheet, Dimensions} from 'react-native';

const stylesCard = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F3F4F9',
    width: Dimensions.get('screen').width - 30,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 10,
  },
  cardStatus_Complete: {
    backgroundColor: '#58DD7E',
    width: 100,
    height: 10,
    borderRadius: 5,
    margin: 10,
    alignSelf: 'flex-start',
  },
  cardStatus_Pending: {
    backgroundColor: '#F0E47A',
    width: 100,
    height: 10,
    borderRadius: 5,
    margin: 10,
    alignSelf: 'flex-start',
  },
  cardContent: {
    padding: 10,
  },
  innerCardContent: {
    flexDirection: 'row',
  },
  cardDetailsText: {
    fontWeight: 'bold',
  },
});
export default stylesCard;

```

**blockModel.styles.js**

```
import { StyleSheet } from "react-native";

const stylesBlockModel = StyleSheet.create ({
    cardBlockDetailsText: {
        paddingBottom: 10,
      },
      cardBlockDivider: {
        paddingTop: 10,
        paddingBottom: 10,
      },
      cardDivider: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 5,
      },

})
export default stylesBlockModel;
```

**map.styles.js**

```
import {StyleSheet} from 'react-native';

const stylesMap = StyleSheet.create({
  mapCalloutTitle: {
    alignSelf: 'center',
    fontSize: 16,
  },
  mapCalloutDesc: {
    fontSize: 12,
  },
  mapDisplayLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  mapView: {
    width: '100%',
    height: 300,
  },
  userTitleHeader: {
    fontSize: 22,
  },
});
export default stylesMap;
```
