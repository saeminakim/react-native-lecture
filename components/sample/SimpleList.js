import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SelectedItem from './SelectedItem';

const simpleData = [
  {id:1, title:"Lorem ipsum dolor sit amet"},
  {id:2, title:"consectetur adipiscing elit, sed do eiusmod tempor"},
  {id:3, title:"incididunt ut labore et dolore magna aliqua"},
]

const SimpleList = () => {
  const [item, setItem] = useState({});

  // memoizing function
  // const 함수명 = useCallback(함수본체, [감지할 변수])

  // 감지할 변수값이 바뀔 때마다 함수가 다시 생성되게 함
  // 빈 배열이면 컴포넌트가 처음 생길 때만 함수가 생성됨
  const itemPressed = useCallback((data) => {
    console.log(data);
    setItem(data);
  }, []);

  return (
    // 아무것도 출력하고 싶지 않으면 아래처럼 빈 태그 넣어주면 됨
    // <></>
    <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {/* JSX Element에 코드를 삽입하려면 {} 중괄호 써줘야함 */}
    {
      // array.map 원래 배열의 요소 갯수만큼 요소를 변경하여 리턴
      // JSX.Element 리턴함
      // {}, {}, {} 이렇게 3개의 객체였던 애들을
      // <>, <>, <> 이렇게 바꿔서 리턴
      simpleData.map(data => {
        return (
          // 터치가 가능한 투명한 영역
          <TouchableOpacity key={data.id} onPress={()=>itemPressed(data)}>
            <Text>{data.id} {data.title}</Text>
          </TouchableOpacity>
        )
      })
    }

    <Text style={{marginBottom: 10, marginTop: 30, fontWeight: "bold"}}>Selected</Text>

    <SelectedItem item={item}></SelectedItem>
    </View>
  )
}

export default SimpleList;