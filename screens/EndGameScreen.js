import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const EndGameScreen = () => {
  return (
    <View style={styles.text}>
        <Text>EndGameScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        marginTop:20,
        padding:20,
    }
})