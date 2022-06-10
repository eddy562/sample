import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [number, setNumber] = useState('');
  const [number2, setNumber2] = useState('');
  const [message, setMessage] = useState('');

  function getSum() {
    const total = number + number2;
    return `  ${total}`;
  }

  function GetFirstNumber(input) {
    const inputNumber = parseInt(input) || 0;
    setNumber(inputNumber)
  }

  function GetSecondNumber(input2) {
    const inputNumber2 = parseInt(input2) || 0;
    setNumber2(inputNumber2)
  }
  
  return (
    

    <View style={styles.container}>
      <Text style={styles.title}>
        IS657 Midterm
      </Text>


      <View style={{
        flexDirection:'row',
        
        alignItems:'flex-end',
        marginRight:20,
      }}>

      <Text style={styles.text}>
        Number1 [10 to 20]:
      </Text>

      <TextInput style={styles.inputText}
        onChangeText={GetFirstNumber}
        value={number.toString()}
        keyboardType='numeric'>


      </TextInput>
      
      </View>

      
      <View style={{
        flexDirection:'row',
        alignItems:'space-evenly',
      }}>

      <Text style={styles.text2}>
      Number2 [100 to 200]:
      </Text> 
      
      <TextInput style={styles.inputText}
      onChangeText={GetSecondNumber}
        value={number2.toString()}
        keyboardType='numeric'>
      </TextInput></View>
    


      <View style={{
        flexDirection:'row',

      }}>
    <View style={styles.text2}>
      
      <Button
        title='CALCULATE SUM'
        onPress = {() => setMessage(getSum)}>
      </Button>
      </View>


      <View style={styles.sumBox}>
            <Text>{message}</Text></View>
    </View>

      
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: 2,
    borderWidth: 5

  },
  alignRight:{

    flexDriection:'Row',
    justifyContent:'space-between',
    width:'100%',
  },

  title: {
    color: 'orange',
    backgroundColor:'green',
    width:400,
    fontSize: 30,
    paddingTop:60,
    paddingBottom: 80,
    paddingHorizontal: 100
    

  },
button:{
  alignItems:"center",
 marginRight:80,
},
  text: {
    color: 'red',
    marginRight:30,
    fontSize: 18,    
    paddingVertical: 15,
    paddingHorizontal:30,
  },
  text2: {
    color: 'red',
    marginRight:30,
    justifyContent: 'center',
    fontSize: 18,  
    paddingBottom:5,  
    paddingHorizontal:10,
  },

  inputText: {
    color: 'black',
    marginLeft:30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 12,    
    paddingVertical: 10,
    borderWidth: 2
  },
sumBox:{
  color: 'black',
  alignItems:"center",
  width:150,
  fontSize: 12, 
 marginLeft:60,  
  borderWidth: 2,
  

},

  


});
