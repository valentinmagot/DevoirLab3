import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image, FlatList, SectionList, TouchableOpacity } from 'react-native'
import { Button, Overlay } from 'react-native-elements'
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
          <Text>{this.props.price}</Text>
          <Text style={{fontWeight: 'bold'}}>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
          <Text>{this.props.section}</Text>
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

class MyListItem2 extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem2(this.props.itemId);
    
  };

  render() {
    return (
      <TouchableOpacity style={orderList.container} onPress={this._onPress}>
        <View>
          <Text style={{fontWeight: 'bold'}}>{this.props.title}</Text>
          <Text>{this.props.price}</Text>
        </View>
        <Ionicons size={30} name="ios-close" onPress={() => {
              this.setState({
                isVisible: false,
              })
            }}
        />
      </TouchableOpacity>
    );
  }

}

class Menu extends React.Component {


  state = {
    id:undefined,
    city: undefined,
    meal: undefined,
    search: undefined,
    selected: undefined,
    selectedItem:undefined,
    total: 0,
    itemCtr: 0,
    order: [],
    isVisible: false,
    textValue: 'View Orders',
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
        menu: {
            appetizers:[
                {id: 0, name: "Garlic Bread", meal:"lunch, diner", description: "Stone-baked Portuguese roll smothered in garlic and herb spread.", price: "5.25",  img: null },
                {id: 1, name: "Hummus with PERi-PERi Drizzle", meal:"lunch, diner", description: "Tangy PERi-PERi infused oil poured over creamy hummus. Dig in with chunks of warm pita. ", price: "6.25", img: null },
                {id: 2, name: "PERi-PERi Nuts", meal:"lunch, diner", description: "Almonds, cashews, macadamias - crunch with a punch. ", price: "4.25",  img: null},
            ],
            mains: [
                {id: 3, name: "1/2 Chicken", meal:"lunch, diner", description: "First time at Nando's? Look no further than our signature 1/2 chicken. ", price: "14.45",  img: null },
                {id: 4, name: '1/4 Chicken – Breast', meal:"lunch, diner", description: "Succulent and saucy.", price: "11.85", img: null },
                {id: 5, name: "Double Skewers", meal:"lunch, diner", description: "Two skewers of marinated chicken tenders.", price: "11.85", img: null},
                {id: 6, name: "Chicken Sandwich", meal:"lunch, diner", description: "Grilled chicken breast served with crispy leaf lettuce, tomato and PERinaise on a stone-baked Portuguese roll.", price: "11.25", img: null },
                {id: 7, name: 'Chicken Wrap', meal:"lunch, diner", description: "Grilled chicken tenders with leaf lettuce, tomato, cucumber, sweet chilli jam and our tangy cilantro yogurt.", price: "11.25", img: null },
            ],
            dessert: [
                {id: 8, name: "Naughty Natas", meal:"lunch, diner", description: "Traditional Portuguese custard tart",  price: '2.65',   img: null },
                {id: 9, name: "Nando's Kisses", meal:"lunch, diner", description: "Dark chocolate ice cream centered in milk chocolate ice cream, rolled in chocolate shavings",  price: "4.25",   img: null },
                {id: 10,name: "Chocolate Cake", meal:"lunch, diner", description: "Dark chocolate cake and chocolate fudge nestled between layers of decadent chocolate icing.",  price: "6.25",   img: null },
            ],
            all: [
                {id: 0, name: "Garlic Bread", meal:"lunch, diner", description: "Stone-baked Portuguese roll smothered in garlic and herb spread.", price: "5.25",  img: null },
                {id: 1, name: "Hummus with PERi-PERi Drizzle", meal:"lunch, diner", description: "Tangy PERi-PERi infused oil poured over creamy hummus. Dig in with chunks of warm pita. ", price: "6.25", img: null },
                {id: 2, name: "PERi-PERi Nuts", meal:"lunch, diner", description: "Almonds, cashews, macadamias - crunch with a punch. ", price: "4.25",  img: null},
                {id: 3, name: "1/2 Chicken", meal:"lunch, diner", description: "First time at Nando's? Look no further than our signature 1/2 chicken. ", price: "14.45",  img: null },
                {id: 4, name: '1/4 Chicken – Breast', meal:"lunch, diner", description: "Succulent and saucy.", price: "11.85", img: null },
                {id: 5, name: "Double Skewers", meal:"lunch, diner", description: "Two skewers of marinated chicken tenders.", price: "11.85", img: null},
                {id: 6, name: "Chicken Sandwich", meal:"lunch, diner", description: "Grilled chicken breast served with crispy leaf lettuce, tomato and PERinaise on a stone-baked Portuguese roll.", price: "11.25", img: null },
                {id: 7, name: 'Chicken Wrap', meal:"lunch, diner", description: "Grilled chicken tenders with leaf lettuce, tomato, cucumber, sweet chilli jam and our tangy cilantro yogurt.", price: "11.25", img: null },
                {id: 8, name: "Naughty Natas", meal:"lunch, diner", description: "Traditional Portuguese custard tart",  price: '2.65',   img: null },
                {id: 9, name: "Nando's Kisses", meal:"lunch, diner", description: "Dark chocolate ice cream centered in milk chocolate ice cream, rolled in chocolate shavings",  price: "4.25",   img: null },
                {id: 10,name: "Chocolate Cake", meal:"lunch, diner", description: "Dark chocolate cake and chocolate fudge nestled between layers of decadent chocolate icing.",  price: "6.25",   img: null },
            ]
            },
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
          menu: {
            appetizers:[
                {id: 0, name: "The Original", meal:"lunch, diner", description: " 5 oz beef patty, red onion, tomato, lettuce, and BFF sauce.", price: "14.25",  img: null },
                {id: 1, name: "The American", meal:"lunch, diner", description: "5 oz beef patty, caramelized onions, cheddar cheese, pickles, ketchup, and mustard. ", price: "16.25", img: null },
                {id: 2, name: "The Shroom", meal:"lunch, diner", description: "5 oz beef patty, sautéed mushrooms, swiss cheese, and garlic aioli.", price: "12.25",  img: null},
            ],
            mains: [
                {id: 3, name: "1/2 The KBBQ", meal:"lunch, diner", description: "5 oz bulgogi beef patty, fried egg, oi muchim, and kimchi mayo.", price: "14.45",  img: null },
                {id: 4, name: 'The Beyond BFF', meal:"lunch, diner", description: "4 oz Beyond Meat vegan patty, tomato, lettuce, pickles, and Texas BBQ sauce.", price: "11.85", img: null },
                {id: 5, name: "The El Fuego", meal:"lunch, diner", description: "5 oz beef patty, ghost pepper pimento cheese, jalapeno relish, and chipotle mayo.", price: "11.85", img: null},
                {id: 6, name: "The Melt", meal:"lunch, diner", description: "5 oz beef patty, swiss cheese, American cheese, beef bacon, and Texas BBQ sauce.", price: "11.25", img: null },
                {id: 7, name: 'Chicken Wrap', meal:"lunch, diner", description: "Buttermilk sriracha fried chicken, swiss cheese, lettuce, tomato, and garlic aioli.", price: "11.25", img: null },
            ],
            dessert: [
                {id: 8, name: "Chocolate Cake", meal:"lunch, diner", description: "Dark chocolate cake and chocolate fudge nestled between layers of decadent chocolate icing.",  price: "8.25",   img: null },
            ],
             all: [
              {id: 0, name: "The Original", meal:"lunch, diner", description: " 5 oz beef patty, red onion, tomato, lettuce, and BFF sauce.", price: "14.25",  img: null },
              {id: 1, name: "The American", meal:"lunch, diner", description: "5 oz beef patty, caramelized onions, cheddar cheese, pickles, ketchup, and mustard. ", price: "16.25", img: null },
              {id: 2, name: "The Shroom", meal:"lunch, diner", description: "5 oz beef patty, sautéed mushrooms, swiss cheese, and garlic aioli.", price: "12.25",  img: null},
              {id: 3, name: "1/2 The KBBQ", meal:"lunch, diner", description: "5 oz bulgogi beef patty, fried egg, oi muchim, and kimchi mayo.", price: "14.45",  img: null },
              {id: 4, name: 'The Beyond BFF', meal:"lunch, diner", description: "4 oz Beyond Meat vegan patty, tomato, lettuce, pickles, and Texas BBQ sauce.", price: "11.85", img: null },
              {id: 5, name: "The El Fuego", meal:"lunch, diner", description: "5 oz beef patty, ghost pepper pimento cheese, jalapeno relish, and chipotle mayo.", price: "11.85", img: null},
              {id: 6, name: "The Melt", meal:"lunch, diner", description: "5 oz beef patty, swiss cheese, American cheese, beef bacon, and Texas BBQ sauce.", price: "11.25", img: null },
              {id: 7, name: 'Chicken Wrap', meal:"lunch, diner", description: "Buttermilk sriracha fried chicken, swiss cheese, lettuce, tomato, and garlic aioli.", price: "11.25", img: null },
              {id: 8, name: "Chocolate Cake", meal:"lunch, diner", description: "Dark chocolate cake and chocolate fudge nestled between layers of decadent chocolate icing.",  price: "8.25",   img: null },
             ],
            },
        },
    ],
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {


    // console.log(id);
    this.state.selectedItem = id
    const itemCtr = this.state.itemCtr++;
    //   console.log(id);
    //   console.log(title);
    const restaurantID = this.state.id;
    const itemId = this.state.selectedItem;
    let item;
    let itemPrice;
    let totalPrice = parseFloat(this.state.total);
    // console.log(totalPrice);
    // console.log(itemId);

    if( itemId <= 2){
       item = this.state.restaurant[restaurantID].menu.all[id].name;
       itemPrice = this.state.restaurant[restaurantID].menu.all[id].price;
       totalPrice = (totalPrice + parseFloat(itemPrice)).toFixed(2);
       this.state.order.push({ itemId: id, name: item, price: itemPrice})
       console.log(totalPrice);
    }else if(itemId <= 7){
      item = this.state.restaurant[restaurantID].menu.all[id].name;
       itemPrice = this.state.restaurant[restaurantID].menu.all[id].price;
       totalPrice = (totalPrice + parseFloat(itemPrice)).toFixed(2);
       this.state.order.push({ itemId: id, name: item, price: itemPrice})
       console.log(totalPrice);
    }else if(itemId <= 13){
      item = this.state.restaurant[restaurantID].menu.all[id].name;
       itemPrice = this.state.restaurant[restaurantID].menu.all[id].price;
       totalPrice = (totalPrice + parseFloat(itemPrice)).toFixed(2);
       this.state.order.push({ itemId: id, name: item, price: itemPrice})
       console.log(totalPrice);
    }

    this.setState({
      textValue: `View orders (${this.state.itemCtr})`,
      total: totalPrice,
    })

    console.log(this.state.order);
    
      
  };

  _onPressItem2 = (itrmId) => {

    let idToRemove;
    // console.log(itrmId);
    this.state.order.forEach(element => {
      if(element.itemId === itrmId){
        idToRemove = this.state.order.indexOf(element);
        console.log(idToRemove);
      }
      
    });
    // console.log(this.state.order.indexOf(itrmId))
    let itemPrice = 0;
    let newTotal = 0;
    // let itemid = 0;
    // console.log(id);
    // // console.log(itrmId);
    // // console.log(this.state.order[id].indexOf(itrmId))
    

       itemPrice = this.state.order[idToRemove].price;
       newTotal = (parseFloat(this.state.total) - parseFloat(itemPrice)).toFixed(2);
 

  

    if(newTotal < 0 ) {
      newTotal = 0;
    }
    
    // console.log(newTotal);

    this.state.order.splice( idToRemove, 1);
    this.state.itemCtr--;

    

    console.log(this.state.order.length);

    const orderItem = this.state.order;
    const ctr = this.state.itemCtr;


    this.setState({ 
      itemCtr: ctr,
      textValue: `View orders (${this.state.itemCtr})`,
      order: orderItem,
      total: newTotal,
    })

    console.log(this.state.order);
  }



   render() {
    const { navigation } = this.props;
    const chosen_meal = navigation.getParam('meal', 'no meal selected in argument');
    const chosen_city = navigation.getParam('city', 'no value in argument');
    const chosen_restaurant = navigation.getParam('restaurant', 'no value in argument');
    const chosen_id= navigation.getParam('id', 'no value in argument');
    // const chosen_id = 0;

    console.disableYellowBox = true;
    
    this.state.city = chosen_city;
    this.state.meal = chosen_meal;
    this.state.selected = chosen_restaurant;
    this.state.id = chosen_id;
    // console.log(this.state.city);
    // console.log(this.state.meal);

      return (
        <View>
        <ImageBackground source={require('../assets/clay-banks-1554997-unsplash.jpg')} style={styles.background}>
            <View style={styles.overlay}>
            <SectionList
                style={{width: '100%'}}
                renderItem={
                  ({item,}) => (
                    <MyListItem
                      id={item.id}
                      title={item.name}
                      description={item.description}
                      price={item.price}
                      section={item.section}
                      onPressItem={this._onPressItem}
                    />
                  )
                }
                renderSectionHeader={({section: {title}}) => (
                  <View style={{width: '100%', height: 30, backgroundColor: '#F7B277', borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>{title}</Text>
                  </View>
                  
                )}
                sections={[
                  {title: 'Starters', data: this.state.restaurant[chosen_id].menu.appetizers},
                  {title: 'Mains', data: this.state.restaurant[chosen_id].menu.mains},
                  {title: 'Desserts', data: this.state.restaurant[chosen_id].menu.dessert},
                ]}
                keyExtractor={(item, index) => item + index}
              />
              <Button
                    title={this.state.textValue}
                    color="black"
                    raised
                    buttonStyle={button.btn}
                    containerStyle={button.btn_container}
                    accessibilityLabel="Learn more about the restaurant"
                    onPress={() => {
                      this.setState({
                        isVisible: true,
                      })
                    }}
                    titleStyle={button.btn_title}
                  />
            </View>
            <Overlay
              isVisible={this.state.isVisible}
              windowBackgroundColor="rgba(0, 0, 0, .5 )"
              overlayBackgroundColor="white"
              width="100%"
              height={600}
              overlayStyle={{
                  flexDirection: 'column',
                  position: 'absolute',
                  bottom: 0,
                  borderWidth: 2,
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  borderColor: 'black',
                  paddingHorizontal: 0,
                }}
              >
                 <View style={{width: '100%', height: 45, backgroundColor: 'transparent',justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons size={30} name="ios-arrow-down" onPress={() => {
                      this.setState({
                        isVisible: false,
                      })
                    }}
                    />
                </View>
                <View style={hearder.header}>
                  <Text style={hearder.header_title}>Items</Text>
                </View>
                <FlatList
                  data={this.state.order}
                  style={{width: '100%'}}
                  keyExtractor={this._keyExtractor}
                  renderItem={
                    ({item}) => (
                      <MyListItem2
                        id={item.id}
                        title={item.name}
                        price={item.price}
                        itemId={item.itemId}
                        onPressItem2={this._onPressItem2}
                      />
                    )
                  }
                />
                <View style={orderList.subtotal}>
                  <Text style={orderList.subtotal_label}>Subtotal</Text>
                  <Text style={orderList.subtotal_price}>{this.state.total}</Text>
                </View>
                <Button
                    title='Checkout'
                    color="black"
                    raised
                    buttonStyle={button.btn}
                    containerStyle={button.btn_container}
                    accessibilityLabel="Learn more about the restaurant"
                    onPress={() => {
                      this.setState({
                        isVisible: true,
                      })
                    }}
                    titleStyle={button.btn_title}
                  />
            </Overlay>
        </ImageBackground>  
        </View>
      )
   }
}
export default Menu

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
    // width: '100%',
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

const orderList = StyleSheet.create({
  container:{
    height: 60,
    // width: '100%',
    flexDirection:'row',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  restoInfo: {
    flexDirection: 'column',
  },
  subtotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position:'absolute',
    bottom:60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    height: 30,
    backgroundColor: '#E6E4E4'
  },
  subtotal_label: {
    fontWeight: 'bold',
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

const hearder = StyleSheet.create({
  header:{
    width: '100%',
    height: 60,
    backgroundColor:'#F7B277',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  header_title:{
    color:'black',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
  },
});