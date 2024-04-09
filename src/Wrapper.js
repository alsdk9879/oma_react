import React from 'react';

// props.children : 컴포넌트 태그 사이에 (App.js -> <Wrapper> </Wrapper> 참고) 넣은 값을 조회하고 싶을 때 사용
function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
