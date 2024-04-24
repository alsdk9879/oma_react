import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h1 className='title'>
        <Link to={'/'}>영단어</Link>
      </h1>
      <div className='btn-wrap'>
        <Link to={'/create_word'} className='btn'>
          단어 추가
        </Link>
        <Link to={'/create_day'} className='btn'>
          Day 추가
        </Link>
      </div>
    </div>
  );
}

export default Header;
