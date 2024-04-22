import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h1 className='title'>
        <Link to={'/'}>영단어</Link>
      </h1>
      <div className='btn-wrap'>
        <button className='btn'>단어 추가</button>
        <button className='btn'>Day 추가</button>
      </div>
    </div>
  );
}

export default Header;
