import { Link, Route, Routes } from "react-router-dom";
import HomeView from './views/home'
import ClaimCard from './views/claimCard'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/claim-card" element={<ClaimCard />} />
      </Routes>
    </>
  );
}

export default App;
