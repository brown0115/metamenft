import { Link, Route, Routes } from "react-router-dom";
import HomeView from './views/home'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  );
}

export default App;
