import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import { useMedicationApi } from './providers/MedicationProvider';

function App() {
  const { getMedicationByName } = useMedicationApi();

  useEffect(() => {
    getMedicationByName("");
  }, [])
  
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
