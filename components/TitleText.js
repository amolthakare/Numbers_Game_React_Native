import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'

const TitleText = ({children}) => {
  return (
    <Text style={styles.Text}>
        {children}
    </Text>
  )
}

export default TitleText

const styles = StyleSheet.create({
    Text:{
        color: '#8002d4',
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        borderRadius:8,
        borderColor: '#8002d4',
        padding: 8,
    }
})