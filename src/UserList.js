import React from 'react';

// 한페이지에 여러개의 컴포넌트가 있어도 무방
function User({ user }) {
  return (
    <>
      <b>{user.username}</b> <span>({user.email})</span>
    </>
  );
}

function UserList() {
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

  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default UserList;
