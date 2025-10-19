import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Users from "./pages/Users";
import NewPlaces from "./pages/NewPlaces";
import MainNavigation from "./components/Navigation/MainNavigation";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/places/new" element={<NewPlaces />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
