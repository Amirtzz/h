import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import About from './screens/about/About';
import { useContext, useState } from 'react';
import DarkModeProvider, { DarkModeContext } from './data/contexts/DarkMode.context';
import SettingsPage from './screens/settings/settingsPage';
import HabitPage from './screens/habits/HabitsPage';
import HabitProvider from './data/contexts/HabitsDataContext';

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
      <HabitProvider>
    <div className="App">
     <Header title='Habit Tracker' onLogoClick={goHome} />
     {currentPage=='about' && <About/>}
     {currentPage=='home' && <Home onPageSelect={changePage}/>}
     {currentPage=='settings' && <SettingsPage />}
     {currentPage=='habits' && <HabitPage />}
    </div>
    </HabitProvider>
    </DarkModeProvider>
  );
}
export default App;
