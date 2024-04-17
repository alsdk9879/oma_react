import React, { useEffect } from 'react';

// 한페이지에 여러개의 컴포넌트가 있어도 무방
function User({ user, onRemove, onToggle }) {
  // useEffect() : 컴포넌트가 마운트(처음 나타났을 때), 언마운트(사라질 때), 업데이트 될 때(특정 props가 바뀔 때) 특정 작업을 처리
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user가 바뀌기 전..');
  //     console.log(user);
  //   };
  // }, [user]);
  return (
    <>
      <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} onClick={() => onToggle(user.id)}>
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button className='sm' onClick={() => onRemove(user.id)}>
        삭제
      </button>
    </>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
