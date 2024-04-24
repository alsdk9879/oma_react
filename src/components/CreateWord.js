import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function CreateWord() {
  const days = useFetch('http://localhost:3002/days');
  const history = useNavigate(); // 주소를 push 해주면, <Link to=""> 처럼 해당 주소로 이동.
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);

      fetch(`http://localhost:3002/words/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application-json', // 보내는 리소스의 타입을 의미
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('생성이 완료 되었습니다.');
          history(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef(null); // useRef() : DOM에 접근할 수 있게 해주는 리액트 훅. ex) 스크롤 위치, 포커스 줄 때 사용
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form className='create-word'>
      <div className='input-wrap'>
        <span className='text'>Eng</span>
        <input type='text' placeholder='영단어' ref={engRef} />
      </div>
      <div className='input-wrap'>
        <span className='text'>Kor</span>
        <input type='text' placeholder='의미' ref={korRef} />
      </div>
      <div className='input-wrap'>
        <span className='text'>Day</span>
        <select id='createWordDay' ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button className='btn btn-save' onClick={onSubmit} style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? 'Saving...' : '저장'}
      </button>
    </form>
  );
}

export default CreateWord;
