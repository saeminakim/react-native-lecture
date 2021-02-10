// App.js가 루트 컴포넌트가 되는거임

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// from 자바스크립트 파일 
// from 디렉토리명 -> 디렉토리/index.js

// import HelloWorld from './components/HelloWorld';
// import Counter from './components/Counter';
// import LotsOfGreetings from './components/LotsOfGreetings';
import SimpleList from './components/SimpleList';

// App 컴포넌트 시작부분
export default function App() {
  // JSX 문법 
  // UI 템플릿을 작성 
  // App()이 하나의 컴포넌트가 되는 것
  // return 이하가 UI가 렌더링 되는 부분
  return (
          //속성={값}
          //속성={"문자열"}
          //속성={{name:"ddd", phone:"ddd"}} -> 객체 구조를 넣고 싶다면 이렇게 
    <View style={styles.container}>
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      {/* <LotsOfGreetings></LotsOfGreetings> */}
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>
  );
}
// App 컴포넌트 끝부분

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
