import React, { useState, useCallback } from 'react';
import { Text, View, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Home = ({navigation}) => {

  // local state
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* platform을 ios로 바꾸면 ios 스타일로 바뀜 */}
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="Type Here..."
        // 글자가 바뀔 때마다 handleSearch 메소드 실행, value 값의 state를 바꿔주는 메소드.
        onChangeText={handleSearch}
        // 입력하는 값을 계속 value 값으로 넣어줘야함
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>
    </View>
  )
}

export default Home;