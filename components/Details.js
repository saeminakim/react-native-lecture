import React from 'react';
import { Text, View } from 'react-native';

// 함수의 리턴값이 JSX.Element면 
// React 컴포넌트가 된다

// JSX를 쓰려면 import React from 'react'를 꼭 써줘야한다!! 
// navigator로 화면 이동할 때 컴포넌트 속성으로 route, navigation이 전달됨
const Details = ({ route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("--details--");
  // navigate로 넘어온 매개변수
  console.log(route.params);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Details</Text>
    </View>
  )
}
export default Details;