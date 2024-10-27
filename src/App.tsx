// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import ResultPage from "./components/ResultPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/result/:type/:number" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
