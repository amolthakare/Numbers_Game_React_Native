import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { EndGameScreen } from "./screens/EndGameScreen";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  let screen = (
    <StartGameScreen pickedNumber={handlePickedNumber}></StartGameScreen>
  );

  if (enteredNumber) {
    screen = (
      <GameScreen
        enteredNumber={enteredNumber}
        onGameOver={gameOverHandler}
        totalCount={handleCount}
      />
    );
  }

  function handleCount(count) {
    setNumberOfRounds(count);
  }

  function handlePickedNumber(number) {
    setEnteredNumber(number);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function handleNewGame() {
    setEnteredNumber(null);
    setNumberOfRounds(0);
    screen = <StartGameScreen pickedNumber={handlePickedNumber} />;
  }

  if (gameIsOver && enteredNumber) {
    screen = (
      <EndGameScreen
        enteredNumber={enteredNumber}
        totalRounds={numberOfRounds}
        StartNewGame={handleNewGame}
      ></EndGameScreen>
    );
  }

  return (
    <LinearGradient
      colors={["#b1bdfc", "#fa619c"]}
      style={styles.linearGradient}
    >
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styles.linearGradient}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.linearGradient}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
