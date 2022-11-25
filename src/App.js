import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<CardList/>} />
      </Routes>
    </div>
  );
}

export default App;
