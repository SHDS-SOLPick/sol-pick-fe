import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Components from "./pages/Components";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/components" element={<Components />} />
      </Route>
    </Routes>
  );
}

export default App;
