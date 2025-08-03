import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import IdentifyPart from "./pages/IdentifyPart";
import PartLibrary from "./pages/PartLibrary";
import SmartSearch from "./pages/SmartSearch";
import AddPart from "./pages/AddPart";
import PartDetail from "./pages/PartDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<SmartSearch />} />
          <Route path="/identify" element={<IdentifyPart />} />
          <Route path="/library" element={<PartLibrary />} />
          <Route path="/smart" element={<SmartSearch />} />
          <Route path="/add" element={<AddPart />} />
          <Route path="/part/:id" element={<PartDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;