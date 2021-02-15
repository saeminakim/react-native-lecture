import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch } from 'react-redux';
import { addAction } from '../redux/actions';

import { LISTDATA } from '../shared/list';

// 함수의 리턴값이 JSX.Element면 
// React 컴포넌트가 된다

// JSX를 쓰려면 import React from 'react'를 꼭 써줘야한다!! 
// navigator로 화면 이동할 때 컴포넌트 속성으로 route, navigation이 전달됨
const Details = ({ route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("--details--");
  // navigate로 넘어온 매개변수
  console.log(route.params);

  // const id = route.params.id 와 같은 문법
  // 속성명을 똑같은 변수명이랑 뽑아낼 때
  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
          {item.description}
        </Text>
        <Button
          onPress={()=>{dispatch(addAction(item))}}
          icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
          title='ACTION' />
      </Card>
    </View>
  )
}
export default Details;