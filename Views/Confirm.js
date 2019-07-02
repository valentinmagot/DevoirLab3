import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image, } from 'react-native'
import { Button, } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';



class Confirm extends React.Component {
  state = {
    city: undefined,
    total: undefined,
    order: [],
    apt: undefined,
    street: undefined,
    zipCode: undefined,

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
                <View style={{backgroundColor: 'white'}}>
                    <View style={styles.header}>
                        <Text style={styles.header_label}>Enter your informations</Text>
                    </View>
                        <Text style={styles.part_header_label}>Address Information</Text>
                        <View style={address.fields}>
                            <Text style={address.TextInputLabel}>Apt</Text>
                            <TextInput  
                                    placeholder="#"  
                                    underlineColorAndroid='transparent'  
                                    style={address.TextAptInputStyle}  
                                    keyboardType={'numeric'}
                            /> 
                        </View>
                        <View style={address.fields}>
                            <Text style={address.TextInputLabel}>Street</Text>
                            <TextInput  
                                    placeholder="Enter street name..."  
                                    underlineColorAndroid='transparent'  
                                    style={address.TextStreetInputStyle}  
                            /> 
                        </View>
                        <View style={address.fields}>
                            <Text style={address.TextInputLabel}>Zip code</Text>
                            <TextInput  
                                    placeholder="Enter zip code..."  
                                    underlineColorAndroid='transparent'  
                                    style={address.TextZipInputStyle}  
                            /> 
                        </View>
                        <View style={address.fields}>
                            <Text style={address.TextInputLabel}>City</Text>
                            <Text>{this.state.city}</Text>
                        </View>
                        <Text style={styles.part_header_label}>Payment Information</Text>
                        <View style={payment.fields}>
                            <Text style={payment.TextInputLabel}>Credit Card</Text>
                            <TextInput  
                                    placeholder="Enter your credit card number..."  
                                    underlineColorAndroid='transparent'  
                                    style={payment.TextCCInputStyle}  
                                    keyboardType={'numeric'}
                            /> 
                        </View>
                        <View style={payment.fields}>
                            <Text style={payment.TextInputLabel}>CVC</Text>
                            <TextInput  
                                    placeholder="###"  
                                    underlineColorAndroid='transparent'  
                                    style={payment.TextCVCInputStyle}
                                    keyboardType={'numeric'}  
                            /> 
                        </View>
                        <View style={payment.lastfields}>
                            <Text style={payment.TextInputLabel}>Expiration Date (MM/YYYY)</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}} >
                            <TextInput  
                                    placeholder="MM"  
                                    underlineColorAndroid='transparent'  
                                    style={payment.TextMMInputStyle}
                                    keyboardType={'numeric'}  
                            /> 
                            <TextInput  
                                    placeholder="YYYY"  
                                    underlineColorAndroid='transparent'  
                                    style={payment.TextYYYYInputStyle}
                                    keyboardType={'numeric'}  
                            /> 
                            </View>
                        </View>
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
      justifyContent: 'space-between',
      
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
    part_header_label: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-start',
        marginBottom: 15,
      },
    
});

const payment = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    flexDirection:'column',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    // justifyContent:'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    // marginBottom: 30,
  },
  fields: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
  },
  lastfields: {
    width: '100%',
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
  },
  TextInputLabel: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
  },
  TextCCInputStyle: {  
        textAlign: 'center',  
        height: 40,
        width: '50%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 10  
    },
    TextCVCInputStyle: {  
        textAlign: 'center',  
        height: 40,
        width: '25%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 10 
    },
    TextMMInputStyle: {  
        textAlign: 'center',  
        height: 40,
        width: '50%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 10 
    },
    TextYYYYInputStyle: {  
        textAlign: 'center',  
        height: 40,
        width: '50%',  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#F7B277',  
        marginBottom: 10 
    }
});

const address = StyleSheet.create({
    container:{
      height: '100%',
      width: '100%',
      flexDirection:'column',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black',
    //   justifyContent:'center',
    //   alignItems: 'center',
      paddingHorizontal: 20,
      // marginBottom: 30,
    },
    fields: {
      width: '100%',
      flexDirection: 'row',
      justifyContent:"space-between",
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
          textAlign: 'center',  
          height: 40,
          width: '75%',  
          borderRadius: 10,  
          borderWidth: 2,  
          borderColor: '#F7B277',  
          marginBottom: 10 
      },
      TextZipInputStyle: {  
          textAlign: 'center',  
          height: 40,
          width: '50%',  
          borderRadius: 10,  
          borderWidth: 2,  
          borderColor: '#F7B277',  
          marginBottom: 10 
      }
  });