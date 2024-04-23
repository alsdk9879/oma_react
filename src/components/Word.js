import React, { useState } from 'react';

function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td className='td-checkbox'>
        <label className='checkbox'>
          <input type='checkbox' defaultChecked={isDone} onChange={toggleDone} />
          <span className='label-checkbox'></span>
        </label>
        <label htmlFor=''></label>
      </td>
      <td className='eng'>{word.eng}</td>
      <td className='kor'>{isShow && word.kor}</td>
      <td className='btn-wrap'>
        <div>
          <button className='sm btn-mean' onClick={toggleShow}>
            뜻 {isShow ? '숨기기' : '보기'}
          </button>
          <button className='sm btn-delete'>삭제</button>
        </div>
      </td>
    </tr>
  );
}

export default Word;
