import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Components from "./pages/Components";
import Main from "./pages/main/Main";
import Noti from "./pages/noti/Noti";
import IngredientAddForm from "./pages/refrigerator/IngredientAddForm";
import IngredientDetailList from "./pages/refrigerator/IngredientDetailList";
import RefrigeratorMain from "./pages/refrigerator/RefrigeratorMain";
// import CardIssuePage from "./pages/card/CardIssuePage"; // 카드 발급 안내 페이지
// import CardApplyPage from "./pages/card/CardApplyPage"; // 카드 신청 페이지
// import TemplatePage from "./pages/template/TemplatePage"; // 템플릿 페이지

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/components" element={<Components />} />
        <Route path="/main" element={<Main />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/ingredientaddform" element={<IngredientAddForm />} />
        <Route
          path="/ingredientdetaillist"
          element={<IngredientDetailList />}
        />
        <Route path="/refrigeratormain" element={<RefrigeratorMain />} />

        {/* 카드 신청 관련 라우트 */}
        {/* <Route path="/template" element={<TemplatePage />} /> */}
        {/* <Route path="/card" element={<CardIssuePage />} /> */}
        {/* <Route path="/card/apply" element={<CardApplyPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
