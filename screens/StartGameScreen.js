import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
function StartGameScreen({pickedNumber}) {
    const [enteredNumber,setEnteredNumber] = useState('')
    function handleInputNumber(enteredText){
        setEnteredNumber(enteredText);
    }

    function handleSaveButton(){
        let number = parseInt(enteredNumber);
        if(isNaN(number) || number<=0){
            Alert.alert(
                'Invalid Number!',
                'Number has to be in between 0 to 99',
                [{text:'Okay', style:'destructive', onPress:handleInputNumber}]
            );
            return;
        }
        pickedNumber(number)
    }

    function handleResetButton(){
        setEnteredNumber('');
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleInputNumber}
        value={enteredNumber}
      ></TextInput>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <PrimaryButton onPress={handleResetButton}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttons}>
          <PrimaryButton onPress={handleSaveButton}>Save</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.Secondary300,
    marginTop: 100,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  numberInput: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomWidth: 2,
    color: Colors.primary500,
    borderBottomColor: Colors.primary500,
    fontWeight: "bold",
    marginVertical: 8,
    alignItems: "center",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttons: {
    // width:100,
    flex: 1,
  },
});
