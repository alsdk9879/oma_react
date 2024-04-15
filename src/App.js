import React, { useRef, useState } from 'react'; // 리액트 컴포넌트 생성한다는 의미
import Hello from './Hello'; // Hello 컴포넌트 불러오기
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './styles/App.scss';

function App() {
  const name = 'Lala';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem', // 다른 단위 사용 시 문자열로 설정
  };

  const [inputs, SetInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    SetInputs({
      ...inputs,
      [name]: value,
    });
  };

  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
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
      <CreateUser />
      <UserList users={users} />
    </Wrapper>
  );
}

export default App; // App 이라는 컴포넌트를 내보내겠다는 의미 (다른 컴포넌트에서 불러와 사용 가능)
