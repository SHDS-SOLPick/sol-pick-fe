import { useState } from "react";
import "./RefrigeratorMain.css";
import AddPopup from "../../components/refrigerator/AddPopup";
import ingredientPlus from "../../assets/ingredientPlus.svg";

const RefrigeratorMain = () => {
  // 팝업 표시 여부를 관리하는 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업 열기
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // 팝업 닫기
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="ingredient-add-button" onClick={openPopup}>
        <img
          src={ingredientPlus}
          alt="ingredientPlus"
          className="ingredientPlus-icon"
        />
      </div>

      <AddPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};
export default RefrigeratorMain;
