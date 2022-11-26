import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
    </div>
  );
}

export default App;
