import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useMedicationApi } from "./providers/MedicationProvider";
import AppHeader from "./components/AppHeader";
import MedicationInfoPage from "./pages/MedicationInfo";
import SearchResultPage from "./pages/SearchResult";
import TimeOutPage from "./pages/TimeOut";
import "./App.css";

function App() {
  const { isTimeOut } = useMedicationApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTimeOut) {
      navigate("/timeout");
    }
  }, [isTimeOut])

  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<SearchResultPage />} />
        <Route
          path="/medicamento/:processNumber"
          element={<MedicationInfoPage />}
        />
        <Route path="/timeout" element={<TimeOutPage />} />
      </Routes>
    </div>
  );
}

export default App;
