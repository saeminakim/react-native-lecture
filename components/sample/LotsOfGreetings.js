import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

// props = {name : 'Rexxar'}

// const { name } = props
//     ㅣ
//     V 
// const name = props.name

// const Greeting = (props) => {  : 이렇게 쓸 수도 있고
const Greeting = ({ name }) => {
  return (
    <View style={styles.center}>
                {/* props.속성명 */}
      {/* <Text>Hello {props.name}!</Text> */}
      <Text>Hello { name }!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
              {/* 속성명={값} */}
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;