import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image, FlatList, List, ListItem, TouchableOpacity } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import  PickerExample  from './PickerExample'
import { ScrollView } from 'react-native-gesture-handler';
import FAB from 'react-native-fab'

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
    
  };

  render() {
    return (
      <TouchableOpacity style={list.container} onPress={this._onPress}>
        <View>
          <Text>{this.props.score}</Text>
          <Text style={{fontWeight: 'bold'}} >{this.props.title}</Text>
          <Text>{this.props.location}</Text>
          <Text>{this.props.type}</Text>
          <Text>{this.props.price}</Text>
          <Text>{this.props.hours}</Text>
        </View>
        <View>
        <Image style={{
            width: 68,
            height: 43,
            resizeMode: 'contain',
          }} 
          source={{uri: this.props.logo}} />
        </View>
      </TouchableOpacity>
    );
  }

}


class Restaurant extends React.Component {
  state = {
    city: undefined,
    meal: undefined,
    search: undefined,
    selected: undefined,
    restaurant: [
      {   
        id: 0,
        name: "Nandos",
        location:"90 Elgin Street Unit 3, Ottawa, K1P 5E9",
        min_max: "02.00$-65.00$", 
        score:"9,8",
        typeOfFood:"Chiken, grill", 
        hours:"MON-SUN: 9:00AM-10:00PM",
        logo: "https://www.stickpng.com/assets/images/5a1c3203f65d84088faf13e7.png", 
        },
        {
          id: 1,
          name: "Burgers n' Fries Forever",
          location:"124 Yellow Street, Ottawa, K1A 4V3",
          min_max: "04.00$-64.00$", 
          score:"9,4",
          hours:"MON-SUN: 8:00AM-10:00PM, Closed TUE",
          typeOfFood:"Mexican, grill", 
          logo: "https://cdn.shopify.com/s/files/1/1039/1372/files/logo_600x200.png", 
        },
    ],
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {

    const name = this.state.restaurant[id].name

    this.state.selected = name;

    this.props.navigation.navigate('Menu', {
      city: this.state.city,
      meal: this.state.meal,
      restaurant: this.state.selected,
      id: id,

    })
      
  };


_renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      title={item.name}
      logo={item.logo}
      location={item.location}
      type={item.typeOfFood}
      price={item.min_max}
      score={item.score}
      hours={item.hours}
      onPressItem={this._onPressItem}
    />
  );
  
   render() {
    const { navigation } = this.props;
    const chosen_meal = navigation.getParam('meal', 'no meal selected in argument');
    const chosen_city = navigation.getParam('city', 'no value in argument');

    console.disableYellowBox = true;
    
    this.state.city = chosen_city;
    this.state.meal = chosen_meal;
    // console.log(this.state.city);
    // console.log(this.state.meal);

      return (
        <View>
        <ImageBackground source={require('../assets/clay-banks-1554997-unsplash.jpg')} style={styles.background}>
            <View style={styles.overlay}>
            <FlatList
              data={this.state.restaurant}
              style={{width: '100%'}}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ListHeaderComponent={this._header}
            />
            </View>
            <FAB buttonColor="#F7B277" iconTextColor='black' onClickAction={() => {console.log("FAB pressed")}} visible={true} iconTextComponent={<Ionicons name="ios-card"/>} />
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

const list = StyleSheet.create({
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