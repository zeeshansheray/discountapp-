import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Modal from 'react-native-modal';

export default function App() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [priceInput, setpriceInput] = useState(false);
  const [discountInput, setdiscountInput] = useState(false);
  const [priceResult, setPriceResult] = useState(null);
  const [discountResult, setDiscountResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  var totalDiscount = null;
  var newPrice = null;

  const onclickButton = (num) => {
    if (priceInput) {
      console.log('priceinput' + priceInput);
      setPrice(price.concat(num));
    }
    else {
      console.log('discount check' + discountInput)
      setDiscount(discount.concat(num));
    }
  }

  const checkDiscount = () => {
    if ((price || discount) != '') {
      newPrice = (price - (price * (discount / 100))).toFixed(2);
      totalDiscount = (price - newPrice).toFixed(2);
      setPriceResult(newPrice);
      setDiscountResult(totalDiscount);
    }
    else {
      Alert.alert('Please enter the details first.')
    }

  }
  const saveResult = () => {
    console.log("new price is " + priceResult);
    console.log("discount is " + discountResult);
    if (priceResult == null) {
      Alert.alert('Calculate discount first');
    }
    else {
      var array = [price, discount, priceResult];
      var newStateArray = history.slice();
      newStateArray.push(array);
      setHistory(newStateArray);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.heading}>Discount Check</Text></View>
      <View style={styles.textInputBox}>
        <Text style={styles.textInput} onPress={() => { setpriceInput(true), setdiscountInput(false) }} >{price == '' ? "Enter price (rs)" : price}</Text>
        <Text style={styles.textInput} onPress={() => { setdiscountInput(true); setpriceInput(false) }}>{discount == '' ? "Enter discount (%)" : discount}</Text>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("1") }} color="#001529" title="1" value="1" /></View>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("2") }} color="#001529" title="2" value="2" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => { onclickButton("3") }} color="#001529" title="3" value="3" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("4") }} color="#001529" title="4" value="4" /></View>
        <View style={{ width: '32%', marginRight: '1%' }} ><Button onPress={() => { onclickButton("5") }} color="#001529" title="5" value="5" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => { onclickButton("6") }} title="6" value="6" color="#001529" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("7") }} color="#001529" title="7" value="7" /></View>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("8") }} color="#001529" title="8" value="8" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => { onclickButton("9") }} title="9" color="#001529" value="9" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton(".") }} color="#001529" title="." value="." /></View>
        <View style={{ width: '32%', marginRight: '1%' }}><Button onPress={() => { onclickButton("0") }} color="#001529" title="0" value="0" /></View>
        <View style={{ width: '32%' }}><Button onPress={() => { priceInput ? setPrice(price.slice(0, -1)) : setDiscount(discount.slice(0, -1)) }} title="del" color="#001529" value="del" /></View>
      </View>
      <View style={styles.viewstyle}>
        <View style={{ width: '28%', marginRight: '1%', marginLeft: '6%' }}>
          <Button title="Discount" color="green" onPress={() => checkDiscount()} /></View>
        <View style={{ width: '28%', marginRight: '1%' }}><Button title="Save" onPress={() => saveResult()} color="darkblue" /></View>
        <View style={{ width: '28%', marginRight: '1%' }}><Button title="History" onPress={() => { history.length == 0 ? Alert.alert('Nothing in the history!') : setModalVisible(!modalVisible) }} color="red" /></View>
      </View>
      <View style={styles.resultBox}>
        <Text style={styles.result}>{priceResult == null ? <View></View> : "Final Price: " + priceResult + ' Rs' + '\nYou saved: ' + discountResult + ' Rs'}</Text></View>
        <View>
        <Modal isVisible={modalVisible}>
          <View>
  <View style={{backgroundColor:'white',height:'60%',width:'100%'}}><View><Text style={{textAlign:'center', fontSize:29,color:'black', fontWeight:'bold', textAlign:'center'}}>History</Text>{history.map((historyNum,index) =>
  <Text style={{textAlign:'center', marginTop:'3%'}}>{index}.  Price:  {historyNum[0]}   Discount:  {historyNum[1] }   New Price: {historyNum[2]}</Text>
  )}</View>
            <View style={{width:'32%', position:'absolute', left:'66%', top:'83%'}}>
            <Button title="Hide modal" color="#001529" onPress={()=>{setModalVisible(!modalVisible)}} /></View></View>
          </View>
        </Modal>
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
    fontSize: 21,
    padding: 10,
    textAlign: 'center',
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
  resultBox: {
    top: '31%',
  },
  result: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#001529',
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  }
});
