import React from 'react'; // 리액트 컴포넌트 생성한다는 의미
import Hello from './Hello'; // Hello 컴포넌트 불러오기
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import './App.css';

function App() {
  const name = 'oma';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem', // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <Wrapper>
      {/* 리액트에서의 주석 처리 */}
      <Hello />
      <Hello color='red' name='react' isSpecial />
      <div style={style}>{name}</div>
      <Counter />
      <div className='gray-box'>graybox</div>
      <InputSample />
    </Wrapper>
  );
}

export default App; // App 이라는 컴포넌트를 내보내겠다는 의미 (다른 컴포넌트에서 불러와 사용 가능)
