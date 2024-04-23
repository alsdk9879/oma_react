import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div id='words'>
        <Header />
        {/* Routes 내부는 url에 따라 각각 다른 페이지를 보여주고, 외부는 모든 페이지에 공통으로 노출 */}
        <Routes>
          {/* path 내 / 기호를 넣어주면 첫페이지 노출을 의미함 / exact를 작성해두면 완전히 일치하는 경로때에만 그 페이지 노출 */}
          <Route exact path='/' element={<DayList />}></Route>
          <Route path='/day/:day' element={<Day />}></Route>
          <Route path='*' element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// REST API
// Create : POST
// Read : GET
// Update : PUT
// Delete : DELETE
