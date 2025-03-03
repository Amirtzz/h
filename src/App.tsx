import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import About from './screens/about/About';
import { useContext, useState } from 'react';
import { AbcRounded, DarkMode } from '@mui/icons-material';
import DarkModeProvider, { DarkModeContext } from './data/contexts/DarkMode.context';
import { addAbortSignal } from 'stream';

function App() {
  const [currentPage,setCurrentpage]=useState('home')
  const changePage=(pageName:string)=>{
    setCurrentpage(pageName)
  }
  const goHome=()=>{
    setCurrentpage('home')
  }
  return (
    <DarkModeProvider>
    <div className="App">
     <Header title='Habit Tracker' onLogoClick={goHome} />
     {currentPage=='about' && <About/>}
     {currentPage=='home' && <Home onPageSelect={changePage}/>}
    </div>
    </DarkModeProvider>
  );
}
export default App;
