import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

export const EndGameScreen = ({ enteredNumber, StartNewGame, totalRounds }) => {
  return (
    <View style={styles.rootContainer}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/gameover.jpg")}
        ></Image>
      </View>
      <Text style={styles.text}>
        Your Phone needed <Text style={styles.highlights}>{totalRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlights}>{enteredNumber}</Text>
      </Text>
      <PrimaryButton onPress={StartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    flex: 1,
    gap: 20,
  },
  text: {
    color: Colors.primary700,
    fontWeight: "bold",
    fontSize: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderColor: Colors.primary700,
    borderWidth: 3,
    borderRadius: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlights: {
    color: Colors.Secondary800,
    elevation: 8,
    fontSize: 22,
    fontWeight: "bold",
  },
});
