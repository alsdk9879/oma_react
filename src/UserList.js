import React from 'react';

// 한페이지에 여러개의 컴포넌트가 있어도 무방
function User({ user }) {
  return (
    <>
      <b>{user.username}</b> <span>({user.email})</span>
    </>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
