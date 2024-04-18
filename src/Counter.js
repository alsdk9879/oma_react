// 리액트 패키지에서 useState 함수 불러오기 / useState : 리액트 훅의 일종, state값 관리를 도와주는 훅. 컴포넌트에서 동적인 값 (=동적인 값 끼얹을 때 사용)
import React, { useReducer, useState } from 'react';

// reducer() : 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const style = {
    fontSize: '24px',
  };

  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  // useState() 사용
  // 위 코드와 같은 의미
  // const [number, setNumber] = useState(0); // 배열의 첫번째 원소 : 현재 상태(=값을 담을 변수), 두번째 : Setter 함수(=변수값을 바꿔주는 함수) / useState() 안에 들어가는 값은 초기값

  // useReducer() 사용 (useState()와 비슷하게 상태 관리해주는 리액트 훅)
  const [number, dispatch] = useReducer(reducer, 0); // state(=number) : 컴포넌트에서 사용할 수 있는 상태 / dispatch : 액션을 발생시키는 함수 / useReducer의 첫번째 파라미터(=reducer) : reducer함수 / 두번째 파라미터(=0) : 초기 상태

  const onIncrease = () => {
    // setNumber((prevNumber) => prevNumber + 1);

    dispatch({ type: 'INCREMENT' });
  };

  const onDerease = () => {
    // setNumber((prevNumber) => prevNumber - 1);

    dispatch({ type: 'DECREMENT' });
  };

  return (
    <>
      <h1 style={style}>{number}</h1>
      <button className='btn' onClick={onDerease}>
        -1
      </button>
      <button className='btn' onClick={onIncrease}>
        +1
      </button>
    </>
  );
}

export default Counter;
