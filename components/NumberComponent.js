import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors'

const NumberComponent = ({children}) => {
  return (
    <View style={styles.NumberContainer}>
      <Text style={styles.NumberText}>{children}</Text>
    </View>
  )
}

export default NumberComponent

const styles = StyleSheet.create({
  NumberContainer:{
    borderColor: Colors.Secondary800,
    borderWidth:2,
    margin:16,
    padding:8,
    borderRadius:8,
  },
  NumberText:{
    fontSize:28,
    textAlign:'center',
    fontWeight:'bold',
    color:Colors.Secondary800,
  }
})