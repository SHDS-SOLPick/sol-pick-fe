import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Components from "./pages/Components";
import Main from "./pages/main/Main";
import Noti from "./pages/noti/Noti";
import IngredientAddForm from "./pages/refrigerator/IngredientAddForm";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/components" element={<Components />} />
        <Route path="/main" element={<Main />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/ingredientaddform" element={<IngredientAddForm />} />
      </Route>
    </Routes>
  );
}

export default App;
