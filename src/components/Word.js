import React, { useState } from 'react';

function Word(props) {
  const [word, setWord] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone);

    // 상태 업데이트시
    fetch(`http://localhost:3002/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application-json', // 보내는 리소스의 타입을 의미
      },
      // body에 추가할 요소들 작성
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3002/words/${word.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td className='td-checkbox'>
        <label className='checkbox'>
          <input type='checkbox' defaultChecked={isDone} onChange={toggleDone} />
          <span className='label-checkbox'></span>
        </label>
        {/* <label htmlFor=''></label> */}
      </td>
      <td className='eng'>{word.eng}</td>
      <td className='kor'>{isShow && word.kor}</td>
      <td className='btn-wrap'>
        <div>
          <button className='sm btn-mean' onClick={toggleShow}>
            뜻 {isShow ? '숨기기' : '보기'}
          </button>
          <button className='sm btn-delete' onClick={del}>
            삭제
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Word;
