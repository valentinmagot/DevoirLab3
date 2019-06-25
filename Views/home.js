import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import  PickerExample  from './PickerExample'

class Home extends Component {
   render() {
      return (
        <View>
        <ImageBackground source={require('../assets/clay-banks-1554997-unsplash.jpg')} style={styles.background}>
        <PickerExample />
        </ImageBackground>
        </View>
      )
   }
}
export default Home

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%',
    },
    margin: {
        flex: 1,
        margin: 36,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1.0,
    },
    overlay: {
      width: '100%',
      height: '100%',
      backgroundColor:'rgba(255,255,255,0.5)',
      alignItems: 'center',
      justifyContent: 'center',
    },

});

const search = StyleSheet.create({
  container:{
    height: 133, 
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    backgroundColor:'grey',
    padding: 0, 
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  input: {
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1, 
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  btn_container: {
    borderWidth: 1, 
    height: 60,
  },
  btn:{
    height: '100%',
    backgroundColor:'#F7B277',
  },
  btn_title:{
    color:'black'
  },
});

const pickers = StyleSheet.create({
  container: {
    flexDirection:'row', 
    height: 79, 
    // backgroundColor: 'skyblue',
  },
});

const left_field = StyleSheet.create({
    layout: {
      width: '50%',
      height:'100%', 
      // backgroundColor:'red', 
      flexDirection:"column",
      justifyContent: 'space-between',
    },
    label: {
      fontFamily: 'Helvetica',
      fontSize: 20,
      fontWeight: 'bold',
    }

});

const right_field = StyleSheet.create({
  layout: {
    width: '50%',
    height:'100%', 
    // backgroundColor:'yellow', 
    flexDirection:"column",
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'flex-end'
  }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      width:146,
      height: 40,
      fontSize: 11,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 11,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: 'white',

    },
    iconContainer: {
        top: 8,
        right: 20,
      },
});