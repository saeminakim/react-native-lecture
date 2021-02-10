import React from 'react';
import { Text, View } from 'react-native';

// 함수의 리턴값이 JSX.Element면 
// React 컴포넌트가 된다

// JSX를 쓰려면 import React from 'react'를 꼭 써줘야한다!! 
const Actions = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Actions</Text>
    </View>
  )
}
export default Actions;