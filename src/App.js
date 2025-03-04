import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Components from "./pages/Components";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/components" element={<Components />} />
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
