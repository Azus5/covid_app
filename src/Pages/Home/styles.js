import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  cases_image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  deaths_block: {
    marginTop: 40,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    minWidth: "100%",
    minHeight: 100,
    backgroundColor: "#6973CA",
  },
  cases_block: {
    marginLeft: 40,
    minWidth: 150,
    borderRadius: 15,
    backgroundColor: "#6973CA",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    textAlign: "center",
    lineHeight: 18,
    color: "black",
  },
});
