import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

function App() {
  return (
    // JSX : Javascript 내부에 HTML 처럼 작성하는 것.
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div id='words'>
        <div className='container'>
          <Header />
          {/* Routes 내부는 url에 따라 각각 다른 페이지를 보여주고, 외부는 모든 페이지에 공통으로 노출 */}
          <Routes>
            {/* path 내 / 기호를 넣어주면 첫페이지 노출을 의미함 / exact를 작성해두면 완전히 일치하는 경로때에만 그 페이지 노출 */}
            <Route exact path='/' element={<DayList />}></Route>
            <Route path='/day/:day' element={<Day />}></Route>
            <Route path='/create_word' element={<CreateWord />}></Route>
            <Route path='/create_day' element={<CreateDay />}></Route>
            <Route path='*' element={<EmptyPage />}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

// REST API (API : 어떤 서버의 특정한 부분에 접속해서 그 안에 있는 데이터와 서비스를 이용할 수 있게 해주는 소프트웨어 도구, 프로그램들이 서로 상호작용하는 것을 도와주는 매개체, 쉽게 말해 레스토랑의 점원과 같은 역할)
// Create : POST
// Read : GET
// Update : PUT
// Delete : DELETE
