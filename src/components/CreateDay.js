import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function CreateDay() {
  const days = useFetch('http://localhost:3002/days');
  const history = useNavigate();

  function addDay(e) {
    e.preventDefault();

    fetch(`http://localhost:3002/days/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application-json', // 보내는 리소스의 타입을 의미
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료 되었습니다.');
        history(`/`);
      }
    });
  }

  return (
    <>
      <h3 className='title'>현재 일수 : {days.length}일</h3>
      <button className='btn lg btn-add-day' onClick={addDay}>
        Day 추가
      </button>
    </>
  );
}

export default CreateDay;
