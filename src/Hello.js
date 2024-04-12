import React from 'react';

// 하나의 컴포넌트 (아래는 함수형 컴포넌트) :: s
// 객체 비구조화 할당(=구조분해) 참고
function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>} 안녕하세요 {name}
    </div>
  );
}
// 하나의 컴포넌트 :: e

// 비구조화 할당에서 값이 없을 경우 undefined, 따라서 값을 따로 할당해 주는 것과 같은 개념으로 보면 된다?
Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
