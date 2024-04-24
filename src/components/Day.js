import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

function Day() {
  const { day } = useParams(); // const day = useParams().day 와 같은 코드 / 주소창에 있는 문자열이 들어옴.
  // const wordList = dummy.words.filter((word) => word.day === Number(day));

  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3002/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  const words = useFetch(`http://localhost:3002/words?day=${day}`);

  return (
    <>
      <h1 className='title'>Day {day}</h1>
      {words.length === 0 && <span>Loading...</span>}
      <table className='table-word'>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;
