import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TitleText from "../components/TitleText";
import Number from "../components/NumberComponent";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ enteredNumber,onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(()=>{
    if(currentGuess===enteredNumber){
        onGameOver();
    }
  },[currentGuess,enteredNumber,onGameOver])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < enteredNumber) ||
      (direction === "greater" && currentGuess > enteredNumber)
    ) {
      Alert.alert("Don't lie!", "you know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <TitleText>Opponents Choice</TitleText>
      <Number>{currentGuess}</Number>
      <Text>Higher or Lower?</Text>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    marginTop: 10,
  },
});
