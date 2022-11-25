import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<CardList/>} />
        <Route path="/medicamento/:processNumber" element={<InfoPanel />} />
      </Routes>
    </div>
  );
}

export default App;
