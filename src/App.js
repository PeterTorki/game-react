import { Routes, Route } from 'react-router-dom';
import './assets/Sass/main.scss';

import GameProvider from './Store/GameProvider';
import Game from './Components/Game/Game';
import Play from './Components/Game/Play';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <GameProvider>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Game/>} />
          <Route path='/play' element={<Play />} />
        </Routes>
        <Footer />
      </div>
    </GameProvider>
  );
}

export default App;
