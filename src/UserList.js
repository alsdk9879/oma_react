import React, { useEffect } from 'react';

// 한페이지에 여러개의 컴포넌트가 있어도 무방
function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('컴포넌트 나타남');
    return () => {
      console.log('컴포넌트 사라짐');
    };
  }, []);
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

export default UserList;
