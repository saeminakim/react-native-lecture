import React from 'react';
import { Text, View, Button } from 'react-native';

import { LISTDATA } from '../shared/list';

import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

// 함수의 리턴값이 JSX.Element면 
// React 컴포넌트가 된다

// JSX를 쓰려면 import React from 'react'를 꼭 써줘야한다!! 
// navigator로 화면 이동할 때 컴포넌트 속성으로 전달됨
const List = ({ navigation }) => {

  const list = LISTDATA;
  console.log(list);

  return (
    <View style={{flex: 1}}>
      {/* ScrollView에 스타일 줘야 적용됨 */}
      <ScrollView 
        contentContainerStyle={
          { flexGrow:1, alignItems:"center", justifyContent:"center" }}
      >
        {
          list.map((item, i) => (
          //  key가 바뀌면 화면 렌더딩이 다시 된다
           <ListItem 
            containerStyle={{width:"80%"}} 
            key={i}
            onPress={()=>{navigation.navigate("Details", {id: item.id})}}
            >
             {/* 모바일 앱에서는 이미지를 네트워크로 불러오는게(http://...) 기본 아니라 이미지 파일을 같이 올리고 파일 경로만 적어주는게 기본 */}
             <Avatar source={{uri: item.image}} />
             <ListItem.Content>
               <ListItem.Title>{item.title}</ListItem.Title>
               <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
             </ListItem.Content>
           </ListItem> 
          ))
        }
      </ScrollView>
    </View>
  )
}
export default List;