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

export default stylesMain;
