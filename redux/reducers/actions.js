// 액션 목록을 제어하는 리듀서
// 우리가 만든 앱의 actions를 제어하기 때문에 파일명이 actions.js 

// 리듀서의 문법
// (현재state, action의 리턴객체) => {
//    return 변경할 state
// }
// 우리는 switch case를 사용해서 action 타입에 따라서 state 제어 
// 현재 state가 없다면 빈 배열로 넣어준다

              // state = [초기값을 배열로] 
const actions = (state = [], action) => {
  // action의 type별로 state 제어를 하겠다
  switch (action.type) {
    case 'ADD_ACTION':
      // return 변경할 state 
      // 현재 state를 복사하여 변경
      return [
        // 원래 배열의 요소를 복사 [{}, {}] ...state -> {}, {}
        ...state, 
        // payload 객체 복사 
        {
          ...action.payload
        }
      ]
    case 'REMOVE_ACTION':
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    default:
      return state
  }
}

export default actions;