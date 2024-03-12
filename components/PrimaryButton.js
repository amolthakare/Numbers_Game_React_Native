import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {

    function handlePress(){
        onPress()
    }
  return (
    <View style={styles.ButtonOutercontainer}>
      <Pressable
        style={styles.ButtonInnerContainer}
        onPress={handlePress}
        android_ripple={{ color: Colors.primary400 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  ButtonOutercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  ButtonInnerContainer: {
    backgroundColor: Colors.primar600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
