import React, { useRef, useState, useMemo, useCallback } from 'react'; // 리액트 컴포넌트 생성한다는 의미
import Hello from './Hello'; // Hello 컴포넌트 불러오기
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './styles/App.scss';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

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

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      SetInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));

    SetInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
    },
    [users]
  );

  // useMemo() : 연산된 값을 재사용, 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수, 두번째 파라미터에는 deps 배열을 넣어주면 됨.
  // deps 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용함.
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      {/* 리액트에서의 주석 처리 */}
      <Hello />
      <Hello color='red' name='react' isSpecial />
      <div style={style}>{name}</div>
      <Counter />
      <div className='gray-box'>graybox</div>
      <InputSample />
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </Wrapper>
  );
}

export default App; // App 이라는 컴포넌트를 내보내겠다는 의미 (다른 컴포넌트에서 불러와 사용 가능)
