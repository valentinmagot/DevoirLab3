import React from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

class PickerExample extends React.Component {
   state = {
       city: undefined,
       meal: undefined,
       search: undefined,
    }

    placeholder = {
        label: 'Select a city...',
        value: null,
        color: '#9EA0A4',
    };

   citys = [
    {
        label: 'Select city...',
        value: 'null',
    },
    {
      label: 'Ottawa',
      value: 'ottawa',
    },
    {
      label: 'Gatineau',
      value: 'gatineau',
    },
  ];

  meals = [
    {
        label: 'Select meal...',
        value: 'null',
    },
    {
      label: 'Breakfast',
      value: 'breakfast',
    },
    {
      label: 'Lunch',
      value: 'lunch',
    },
    {
      label: 'Diner',
      value: 'diner',
    },
  ];
   updateCity = (city) => {
      this.setState({ city: city })
   }
   render() {
      return (   
        <View style={styles.overlay}>
        <View style={logo.logoContainer}>
          <Image style={{
            width: 68,
            height: 44,
            resizeMode: 'contain',
          }} 
          source={require('../assets/uottawa_ver_black.png')} />
        </View>
        <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        // backgroundColor: 'red',
        height: 251,
        margin:36.25,
      }}>
        <View style={pickers.container} >
          <View style={left_field.layout} >
              <Text style={left_field.label}>City</Text>
              <RNPickerSelect
                    placeholder={{}}
                    items={this.citys}
                    onValueChange={value => {
                        this.setState({
                          city: value,
                        });
                    }}
                    value={this.state.city}
                    useNativeAndroidPickerStyle={false}
                    style={pickerSelectStyles}
                    Icon={() => {
                        return <Ionicons name="md-arrow-dropdown" size={24} color="black" />;
                    }}
                    />
            </View>
            <View style={right_field.layout} >
                  <Text style={right_field.label}>Meal</Text>
                    <RNPickerSelect
                          placeholder={{}}
                          items={this.meals}
                          onValueChange={value => {
                              this.setState({
                                meal: value,
                              });
                          }}
                          value={this.state.meal}
                          useNativeAndroidPickerStyle={false}
                          style={pickerSelectStyles}
                          Icon={() => {
                              return <Ionicons name="md-arrow-dropdown" size={24} color="black" />;
                          }}
                          />
                  </View>
                </View>
                <View style={search.container} >
                  <Text style={search.label}>Search</Text>
                  <View>
                  <SearchBar
                  placeholder="Search..."
                  containerStyle={search.searchContainer}
                  inputContainerStyle={search.input}
                  onChangeText= {value => {
                    this.setState({ 
                      search:value,
                    });
                  }}
                  value={this.state.search}
                />
                <Button
                  title="View Restaurants"
                  color="black"
                  raised
                  buttonStyle={search.btn}
                  containerStyle={search.btn_container}
                  accessibilityLabel="Learn more about the restaurant"
                  onPress={() => this.props.navigation.navigate('Restaurant')}
                  titleStyle={search.btn_title}
                />
            </View>
          </View>
        </View>
        </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
    overlay: {
      flex:1,
      backgroundColor:'rgba(255,255,255,0.5)',
      alignItems: 'center',
      justifyContent: 'center',
    },

});

const logo = StyleSheet.create({
  logoContainer:{
    position: 'absolute',
    top: 40,
    right: 20,
    // backgroundColor: 'black',
    width: 68,
    height: 44,
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