import React from 'react';
import { Link } from 'react-router-dom';
import dummy from '../db/data.json';

function DayList() {
  // console.log(dummy);

  return (
    <ul className='list-day'>
      {dummy.days.map((day) => (
        <li key={day.id}>
          {/* 리액트에서는 <a href=""> 대신 <Link to=""> 사용 */}
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DayList;
