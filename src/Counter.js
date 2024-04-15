// 리액트 패키지에서 useState 함수 불러오기 / useState : 리액트 훅의 일종, state값 관리를 도와주는 훅. 컴포넌트에서 동적인 값 (=동적인 값 끼얹을 때 사용)
import React, { useState } from 'react';

function Counter() {
  const style = {
    fontSize: '24px',
  };

  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  // 위 코드와 같은 의미
  const [number, setNumber] = useState(0); // 배열의 첫번째 원소 : 현재 상태(=값을 담을 변수), 두번째 : Setter 함수(=변수값을 바꿔주는 함수) / useState() 안에 들어가는 값은 초기값

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDerease = () => {
    setNumber((prevNumber) => prevNumber - 1);
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
