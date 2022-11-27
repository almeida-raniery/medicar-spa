import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MedicationInfoPage from "./pages/MedicationInfo";
import SearchResultPage from "./pages/SearchResult";
import TimeOutPage from "./pages/TimeOut";
import { useMedicationApi } from "./providers/MedicationProvider";

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
      <Header />
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
