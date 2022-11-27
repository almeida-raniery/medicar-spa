import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import MedicationInfoPage from './pages/MedicationInfo';
import SearchResultPage from './pages/SearchResult';
import TimeOutPage from './pages/TimeOut';
import { useMedicationApi } from './providers/MedicationProvider';

function App() {
  const { getMedicationByName, isTimeOut } = useMedicationApi();

  useEffect(() => {
    getMedicationByName("");
  }, [])
  
  return (
    <div className="App">
      <Header/>
      {
        !isTimeOut ? (
          <Routes>
            <Route path="/" element={<SearchResultPage/>} />
            <Route path="/medicamento/:processNumber" element={<MedicationInfoPage />} />
          </Routes>
        ) : (
          <TimeOutPage />
        )
      }
    </div>
  );
}

export default App;
