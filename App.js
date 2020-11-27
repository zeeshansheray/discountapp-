import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [price,setPrice] = useState('');
  const [discount,setDiscount] = useState('');
  const [priceInput, setpriceInput] = useState(false);
  const [discountInput, setdiscountInput] = useState(false);

  const onclickButton = (num) => {
    if(priceInput){
      console.log('priceinput' + priceInput);
      setPrice(price.concat(num));
    }
    else{
      console.log('discount check' + discountInput)
      setDiscount(discount.concat(num));
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.heading}>Discount Check</Text></View>
      <View style={styles.textInputBox}>
  <Text style={styles.textInput}  onPress={()=>{setpriceInput(true),setdiscountInput(false)}} >{price== '' ? "Enter price" : price}</Text>
  <Text style={styles.textInput}  onPress={()=>{setdiscountInput(true);setpriceInput(false)}}>{discount== '' ? "Enter discount %" : discount}</Text>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("1") }} color="#001529" title="1" value="1" /></View>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("2") }} color="#001529" title="2" value="2" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => { onclickButton("3") }} color="#001529" title="3" value="3" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("4") }} color="#001529" title="4" value="4" /></View>
        <View style={{ width: '32%', marginRight: '1%' }} ><Button onPress={() => {onclickButton("5") }} color="#001529" title="5" value="5" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => {onclickButton("6") }} title="6" value="6" color="#001529" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => {onclickButton("7") }} color="#001529" title="7" value="7" /></View>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => {onclickButton("8") }} color="#001529" title="8" value="8" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => {onclickButton("9") }} title="9" color="#001529" value="9" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => {onclickButton(".") }} color="#001529" title="." value="." /></View>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => {onclickButton("0") }} color="#001529" title="0" value="0" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => {priceInput ? setPrice(price.slice(0,-1)) : setDiscount(discount.slice(0,-1))}} title="del" color="#001529" value="del" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '30%', marginRight: '1%', marginLeft: '37%' }}>
          <Button title="Discount" color="green" /></View>
        <View style={{ width: '30%', marginRight: '1%' }}><Button title="Save" color="darkblue" /></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    position: 'absolute',
    top: 70,
    left: 0,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#001529',
    padding: '3%',
    width: '100%',
    textAlign: 'center'
  },
  textInput: {
    width: 250,
    height: 50,
    backgroundColor: '#001529',
    marginTop: 10,
    color: 'white',
    fontSize: 27,
    padding: 10,
    textAlign:'left',
  },
  textInputBox: {
    top: '25%',
    left: 80,
   
  }, 
  viewstyle: {
    flexDirection: 'row',
    top: '47%',
    marginTop: '5%',
    left: '0.5%',
    height: '5%',
  },
});
