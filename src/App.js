import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import TournamentsPage from './pages/TournamentsPage';
import TeamPage from './pages/TeamPage';
import CCCAcademyPage from './pages/CCCAcademyPage';
import CCCTVPage from './pages/CCCTVPage';

import NoPage from './pages/NoPage';

import Header from './components/Header';
import JoinUs from './components/JoinUs.jsx';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>

          <Route index path='/' element={<HomePage />}/>
          <Route path='/tournaments' element={<TournamentsPage />}/>
          <Route path='/team' element={<TeamPage />}/>
          <Route path='/ccc-academy' element={<CCCAcademyPage />}/>
          <Route path='/ccc-tv' element={<CCCTVPage />}/>

          <Route path="*" element={<NoPage />} />
        
        </Routes>

        <div id='page-body'>
        </div>

        <SchedulePage />
        <JoinUs />

      </div>
    </BrowserRouter>
  );
}

export default App;
