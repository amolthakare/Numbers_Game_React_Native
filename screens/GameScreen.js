import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import TitleText from "../components/TitleText";
import Number from "../components/NumberComponent";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/GuessLogItem";
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

const GameScreen = ({ enteredNumber, onGameOver, totalCount }) => {
  const initialGuess = generateRandomBetween(1, 100, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [count, setCount] = useState(1);
  const [guessedRounds,setGuessedRounds] = useState([initialGuess]);
  console.log(guessedRounds);
  useEffect(() => {
    if (currentGuess === enteredNumber) {
      onGameOver();
    }
  }, [currentGuess, enteredNumber, onGameOver]);

  function nextGuessHandler(direction) {
    setCount(guessRoundsListLength+2);
    totalCount(count);
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

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessedRounds((prev=> [newRandomNumber,...prev]));
  }

  const guessRoundsListLength = guessedRounds.length;

  return (
    <View style={styles.screen}>
      <TitleText>Opponents Choice</TitleText>
      <Number>{currentGuess}</Number>
      <Text style={styles.text}>Higher or Lower?</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.buttons}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessedRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex:1,
    padding: 24,
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttons: {
    // width:100,
    flex: 1,
  },
  text: {
    color: Colors.primary700,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
