import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const TitleText = ({ children }) => {
  return <Text style={styles.Text}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  Text: {
    color: Colors.primary700,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.primar600,
    padding: 8,
  },
});
