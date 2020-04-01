import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logoImg: {
    top: -25,
    width: 200,
    height: 200
  },
  loginTextInput: {
    margin: 10,
    padding: 8,
    borderColor: "#000",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    width: "80%"
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
    color: "#316EE1"
  },
  resetLinkContainer: {
    width: "80%",
    alignItems: "flex-end"
  },
  dashboardContainer: {
    flex: 1
  },
  contentContainer: {
    flex: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    fontSize: 18
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 50
  },
  // CompleteScreen Style
  ContentContainer: {
    flex: 1
  },
  progressBar: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25
  },
  scrollContainer: {
    paddingStart: 20
  },
  locationStatus: {
    fontWeight: "bold"
  },
  scrollableContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#511313"
  },
  cardContentContainer: {
    marginTop: 15,
    alignSelf: "center"
  },
  // Card Component style
  cardContainer: {
    backgroundColor: "#F3F4F9",
    width: Dimensions.get("screen").width - 30,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 2,
    marginBottom: 10
  },
  cardStatus_Complete: {
    backgroundColor: "#58DD7E",
    width: 100,
    height: 10,
    borderRadius: 5,
    margin: 10,
    alignSelf: "flex-start"
  },
  cardStatus_Pending: {
    backgroundColor: "#F0E47A",
    width: 100,
    height: 10,
    borderRadius: 5,
    margin: 10,
    alignSelf: "flex-start"
  },
  cardContent: {
    padding: 10
  },
  innerCardContent: {
    flexDirection: "row"
  },
  cardDetailsText: {
    fontWeight: "bold"
  },
  // ProgressBar styles
  progressBarButtonContainer: {
    marginTop: 15
  },
  progressLabel: {
    // color: "#999",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    alignSelf: "center"
  }
});

export default styles;
