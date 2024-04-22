import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';

function Day() {
  const { day } = useParams(); // const day = useParams().day 와 같은 코드
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h1 className='title'>Day {day}</h1>
      <table className='table-word'>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td className='eng'>{word.eng}</td>
              <td className='kor'>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;
