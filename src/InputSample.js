import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  // useRef()를 사용하여 Ref 객체를 만들고, 이 객체를 선택하고 싶은 DOM의 ref 값으로 설정
  const nameInput = useRef(); // 저장공간 또는 DOM요소에 접근하기 위해 사용되는 리액트 훅. (Ref = reference) javascript 에서의 querySelector() 와 같다고 생각하면 됨.

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤 (리액트 상태에서 객체를 수정해야 할 때는 새로운 객체 생성 후 사용해야함. = 불변성 지켜서 컴포넌트 업데이트 성능 최적화)
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <>
      <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput} />
      <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </>
  );
}

export default InputSample;
