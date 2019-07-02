import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image, } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import  PickerExample  from './PickerExample'
import { ScrollView } from 'react-native-gesture-handler';
import FAB from 'react-native-fab'


class Restaurant extends React.Component {
  state = {
    city: undefined,
    total: undefined,
    order: [],

  }
  
   render() {
    const { navigation } = this.props;
    const order = navigation.getParam('order', 'no order selected in argument');
    const chosen_city = navigation.getParam('city', 'no value in argument');
    const total = navigation.getParam('totalPrice', 'no value in argument');

    console.disableYellowBox = true;
    
    this.state.order = order;
    this.state.city = chosen_city;
    this.state.total = total;
    console.log(this.state.city);
    console.log(this.state.total);
    console.log(this.state.order);

      return (
        <View>
        <ImageBackground source={require('../assets/clay-banks-1554997-unsplash.jpg')} style={styles.background}>
            <View style={styles.overlay}>
                    <View style={styles.header}>
                        <Text>Enter your informations</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.form}>

                        </View>
                    </ScrollView>
            </View>
        </ImageBackground>
        </View>
      )
   }
}
export default Restaurant

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
      flex: 1,
      backgroundColor:'rgba(255,255,255,0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    header: {
      width: '100%',
      height: 60,
      backgroundColor: '#F7B277',
      justifyContent:'center',
      borderWidth: 1,
      paddingHorizontal: 36,
      borderBottomColor: 'black',
      borderTopColor: 'black',
      alignItems:'center'
    },
    header_label: {
      fontWeight: 'bold',
      fontSize: 20,
    },
});

const form = StyleSheet.create({
  container:{
    height: 120,
    width: '100%',
    flexDirection:'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  restoInfo: {
    flexDirection: 'column',
  }
});