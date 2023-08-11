import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "./constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05C3DD",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 60,
    fontWeight: "500",
    color: "white",
  },
  weather: {
    // backgroundColor: "blue",
  },
  day: {
    alignItems: "flex-start",
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontSize: 100,
    fontWeight: "600",
    color: "white",
  },
  description: {
    marginTop: -20,
    fontSize: 40,
    color: "white",
  },
  tinyText: {
    marginTop: -10,
    fontSize: 30,
    color: "white",
  },
});

export default styles;
