import React, { useEffect, useState } from 'react'; // useEffect() : 어떤 상태값이 바뀌었을 때 동작하는 함수를 작성할 수 있는 리액트 훅.
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function DayList() {
  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3002/days')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);

  // useFetch 라는 커스텀 훅 사용하여 위의 코드 간결화
  const days = useFetch('http://localhost:3002/days');

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <ul className='list-day'>
        {days.map((day) => (
          // 반복되는 요소엔 key값을 설정해주어야 오류 없음.
          <li key={day.id} className='btn lg list-day-item'>
            {/* 리액트에서는 <a href=""> 대신 <Link to=""> 사용 */}
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DayList;
