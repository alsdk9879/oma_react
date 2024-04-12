import React, { useRef, useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef(); // 저장공간 또는 DOM요소에 접근하기 위해 사용되는 리액트 훅. (Ref = reference) javascript 에서의 querySelector() 와 같다고 생각하면 됨.

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
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
