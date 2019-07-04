import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image, } from 'react-native'
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Input from './Composants/Input'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import Toast, {DURATION} from 'react-native-easy-toast'



class Confirm extends React.Component {
  state = {
    city: undefined,
    total: undefined,
    order: [],
    apt: undefined,
    street: undefined,
    mm: undefined,
    yyyy: undefined,
    isZipValid: null,
    isCCValid: null,
    isCVCValid: null,

  }

  mounth = [
      {label: 'Select mounth...',value: undefined},
      { label: 'JAN', value: 1},
      { label: 'FEB', value: 2},
      { label: 'MAR', value: 3},
      { label: 'APR', value: 4},
      { label: 'MAI', value: 5},
      { label: 'JUN', value: 6},
      { label: 'JUL', value: 7},
      { label: 'AUG', value: 8},
      { label: 'SEP', value: 9},
      { label: 'OCT', value: 10},
      { label: 'NOV', value: 11},
      { label: 'DEC', value: 12},
    ];

    year = [
      {label: 'Select year...', value: undefined},
      { label: '2020', value: 1},
      { label: '2021', value: 2},
      { label: '2022', value: 3},
      { label: '2023', value: 4},
      { label: '2024', value: 5},
      { label: '2025', value: 6},
      { label: '2026', value: 7},
      { label: '2027', value: 8},
      { label: '2028', value: 9},
      { label: '2029', value: 10},
      { label: '2030', value: 11},
      { label: '2031', value: 12},
    ];

  _validateAll= () => {
      if(this.state.street && this.state.mm && this.state.yyyy && this.state.isCCValid && this.state.isCVCValid && this.state.isZipValid){

        this.props.navigation.navigate('Home');
      }else {

        this.refs.toast.show('Please follow all the required rules');
      }

  };

  _Navigate = () => {
    if (this.state.isAllValid == true) {
      this.props.navigation.navigate('Home');
    } else {
      this.refs.toast.show('Please follow all the required rules');
    }
  }
  
   render() {
    const { isZipValid } = this.state;
    const { isCCValid } = this.state;
    const { isCVCValid } = this.state;
    const { navigation } = this.props;
    const order = navigation.getParam('order', 'no order selected in argument');
    const chosen_city = navigation.getParam('city', 'choose city on home page');
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
                        <Text style={styles.header_label}>Enter your informations</Text>
                    </View>
                <View style={{backgroundColor: 'white', height: '90%', justifyContent: 'space-evenly'}}>
                        <View style= {address.container}>
                        <Text style={styles.part_header_label}>Address Information</Text>
                        <View style={address.fields}>
                            <Text style={address.TextInputLabel}>Apt</Text>
                            <TextInput  
                                    placeholder="#"  
                                    underlineColorAndroid='transparent'  
                                    style={address.TextAptInputStyle}  
                                    keyboardType={'numeric'}
                                    returnKeyType='done'
                                    maxLength={3}
                                    
                            /> 
                        </View>
                        <View style={address.fields}>
                            <Text style={address.TextInputLabel}>Street</Text>
                            <TextInput  
                                    placeholder="Enter street name..."  
                                    underlineColorAndroid='transparent'  
                                    style={address.TextStreetInputStyle}  
                                    returnKeyType='done'
                                    maxLength={30}
                                    onChange={street => this.setState({ street })}
                            /> 
                        </View>
                        <View style={address.zipfield}>
                            <View style={address.fields}>
                                <Text style={address.TextInputLabel}>Zip code</Text>
                                <Input  
                                        placeholder="Enter zip code..."  
                                        underlineColorAndroid='transparent'  
                                        style={address.TextZipInputStyle}  
                                        returnKeyType='done'
                                        pattern={[
                                            '^.{6,7}$', // min 8 chars
                                            '([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\ ?([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])', // number required
                                        ]}
                                        onValidation={isZipValid => this.setState({ isZipValid })}
                                        maxLength={7}
                                />
                            </View>
                            <View style={{alignSelf: 'flex-start', marginBottom: 5, }}>
                                <Text style={{ color: isZipValid && isZipValid[0] ? 'green' : 'red', fontSize:8}}>
                                    Rule 1: Require 6-7 chars
                                </Text>
                                <Text style={{ color: isZipValid && isZipValid[1] ? 'green' : 'red', fontSize:8 }}>
                                    Rule 2: Candian format (L#L#L#)
                                </Text>
                                <Text style={{ color: isZipValid && isZipValid[1] ? 'green' : 'red', fontSize:8 }}>
                                    Rule 3: Uppercase chars
                                </Text>
                                </View>
                            </View>
                        <View style={address.fields}>
                            <Text style={address.TextInputLabel}>City</Text>
                            <Text>{this.state.city}</Text>
                        </View>
                        </View>
                        <View style= {payment.container}>
                        <Text style={styles.part_header_label}>Payment Information</Text>
                        <View style={payment.confirmfield}>
                            <View style={payment.fields}>
                                <Text style={payment.TextInputLabel}>Credit Card</Text>
                                <Input  
                                        placeholder="Enter CC number..."  
                                        underlineColorAndroid='transparent'  
                                        style={payment.TextCCInputStyle}  
                                        returnKeyType='done'
                                        keyboardType={'numeric'}
                                        pattern={[
                                            '^.{16}$', // min 8 chars
                                            '([0-9])', // number required
                                        ]}
                                        onValidation={isCCValid => this.setState({ isCCValid })}
                                        maxLength={16}
                                />
                            </View>
                            <View style={{alignSelf: 'flex-start', marginBottom: 5, }}>
                                <Text style={{ color: isCCValid && isCCValid[0] ? 'green' : 'red', fontSize:8}}>
                                    Rule 1: Require 16 digits
                                </Text>
                            </View>
                            </View>
                            <View style={payment.confirmfield}>
                            <View style={payment.fields}>
                                <Text style={payment.TextInputLabel}>CVC</Text>
                                <Input  
                                        placeholder="Enter CVC..."  
                                        underlineColorAndroid='transparent'  
                                        style={payment.TextCVCInputStyle}  
                                        returnKeyType='done'
                                        keyboardType={'numeric'}
                                        pattern={[
                                            '^.{3}$', // min 8 chars
                                            '([0-9])', // number required
                                        ]}
                                        onValidation={isCVCValid => this.setState({ isCVCValid })}
                                        maxLength={3}
                                />
                            </View>
                            <View style={{alignSelf: 'flex-start', marginBottom: 5, }}>
                                <Text style={{ color: isCVCValid && isCVCValid[0] ? 'green' : 'red', fontSize:8}}>
                                    Rule 1: Require 3 digits
                                </Text>
                            </View>
                        </View>  
                        <View style={payment.lastfields}>
                            <Text style={payment.TextInputLabel}>Expiration Date (MM/YYYY)</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}} >
                                <View style={{height: 40,width: '40%'}}>
                                <RNPickerSelect
                                  placeholder={{}}
                                  items={this.mounth}
                                  value={this.state.mm}
                                  useNativeAndroidPickerStyle={false}
                                  onValueChange={value => {
                                    console.log(value);
                                    this.setState({
                                      mm: value,
                                    })
                                  }}
                                  style={pickerSelectStyles}
                                  Icon={() => {
                                      return <Ionicons name="md-arrow-dropdown" size={24} color="black" />;
                                  }}
                                  /> 
                                </View>
                                <View style={{height: 40,width: '40%',}}>
                                <RNPickerSelect
                                  placeholder={{}}
                                  items={this.year}
                                  value={this.state.yyyy}
                                  useNativeAndroidPickerStyle={false}
                                  onValueChange={value => {
                                    console.log(value);
                                    this.setState({
                                      yyyy: value,
                                    })
                                  }}
                                  style={pickerSelectStyles}
                                  Icon={() => {
                                      return <Ionicons name="md-arrow-dropdown" size={24} color="black" />;
                                  }}
                                  /> 
                                </View>
                            </View>
                        </View>
                    </View>
                    <Button
                        title='Order Up!'
                        color="black"
                        raised
                        buttonStyle={button.btn}
                        containerStyle={button.btn_container}
                        accessibilityLabel="Learn more about the restaurant"
                        onPress={this._validateAll}
                        titleStyle={button.btn_title}
                    />
                    <Toast
                        ref="toast"
                        style={{backgroundColor:'#F7B277', width:'100%'}}
                        position='top'
                        positionValue={200}
                        fadeInDuration={500}
                        fadeOutDuration={750}
                        opacity={0.7}
                        textStyle={{color:'black', textAlign: 'center'}}
                    />
                    </View>
                    </View>
        </ImageBackground>
        </View>
      )
   }
}
export default Confirm

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
    //   alignItems: 'center',
      justifyContent: 'center',
      
    },
    header: {
      width: '100%',
      height: '10%',
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
    part_header_label: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-start',
        marginBottom: 15,
      },
    
});

const payment = StyleSheet.create({
  container:{
    // height: '100%',
    width: '100%',
    flexDirection:'column',
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'black',
    // justifyContent:'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    // marginBottom: 80,
  },
  fields: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
  },
  lastfields: {
    width: '100%',
    // backgroundColor:'red',
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'stretch',
  },
  TextInputLabel: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  TextCCInputStyle: {  
        paddingHorizontal: 10, 
        textAlign: 'left',  
        height: 40,
        width: '50%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 5  
    },
    TextCVCInputStyle: {  
        paddingHorizontal: 10, 
        textAlign: 'left',    
        height: 40,
        width: '25%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 5 
    },
    TextMMInputStyle: {  
        paddingHorizontal: 10, 
        textAlign: 'left',   
        height: '100%',
        width: '100%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 10 
    },
    TextYYYYInputStyle: {  
        paddingHorizontal: 10, 
        textAlign: 'left',    
        height: '100%',
        width: '100%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 10 
    }
});

const button = StyleSheet.create({
    btn_container: {
      position: 'absolute',
      bottom: 0,
      borderWidth: 1, 
      width: '100%',
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

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      width:146,
      height: 40,
      fontSize: 11,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: '#F7B277',
      borderRadius: 11,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: 'white',

    },
    iconContainer: {
        top: 8,
        right: 10,
      },
});

const address = StyleSheet.create({
    container:{
    //   height: '100%',
      width: '100%',
      flexDirection:'column',
      backgroundColor: 'white',
    //   borderWidth: 1,
    //   borderColor: 'black',
    //   justifyContent:'center',
    //   alignItems: 'center',
      paddingHorizontal: 20,
    //   marginBottom: 30,
    },
    fields: {
      width: '100%',
      flexDirection: 'row',
      justifyContent:"space-between",
      alignItems: 'center',
    },
    confirmfield: {
        width: '100%',
        flexDirection: 'column',
        // justifyContent:"space-between",
        alignItems: 'center',
      },
    TextInputLabel: {
      fontFamily: 'Helvetica',
      fontSize: 14,
      fontWeight: 'bold',
    },
    TextAptInputStyle: {
          textAlign: 'center',  
          height: 40,
          width: 40,  
          borderRadius: 10,  
          borderWidth: 2,  
          borderColor: '#F7B277',  
          marginBottom: 10  
      },
      TextStreetInputStyle: { 
          paddingHorizontal: 10, 
          textAlign: 'left',  
          height: 40,
          width: '75%',  
          borderRadius: 10,  
          borderWidth: 2,  
          borderColor: '#F7B277',  
          marginBottom: 10 
      },
      TextZipInputStyle: {  
          paddingHorizontal: 10, 
          textAlign: 'left',  
          height: 40,
          width: '50%',  
          borderRadius: 10,  
          borderWidth: 2,  
          borderColor: '#F7B277',  
          marginBottom: 5 
      }
  });