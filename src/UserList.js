// import React, { useContext } from 'react';
// import { UserDispatch } from './App';

// // 한페이지에 여러개의 컴포넌트가 있어도 무방
// const User = React.memo(function User({ user }) {
//   // useEffect() : 컴포넌트가 마운트(처음 나타났을 때), 언마운트(사라질 때), 업데이트 될 때(특정 props가 바뀔 때) 특정 작업을 처리
//   // useEffect(() => {
//   //   console.log('user 값이 설정됨');
//   //   console.log(user);
//   //   return () => {
//   //     console.log('user가 바뀌기 전..');
//   //     console.log(user);
//   //   };
//   // }, [user]);

//   const dispatch = useContext(UserDispatch);

//   return (
//     <>
//       <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} onClick={() => {dispatch({ type: 'TOGGLE_USER', id: user.id });}}>
//         {user.username}
//       </b>
//       &nbsp;
//       <span>({user.email})</span>
//       <button className='sm' onClick={() => { dispatch({ type: 'REMOVE_USER', id: user.id });}}>
//         삭제
//       </button>
//     </>
//   );
// }

// function UserList({ users }) {
//   return (
//     <>
//       {users.map((user) => (
//         <User user={user} key={user.id} />
//       ))}
//     </>
//   );
// }

// export default React.memo(UserList);

import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);

  return (
    <>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER', id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: 'REMOVE_USER', id: user.id });
        }}
      >
        삭제
      </button>
    </>
  );
});

function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default React.memo(UserList);
