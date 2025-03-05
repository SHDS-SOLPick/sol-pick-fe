import Header from "../../components/common/header/Header";
import backArrow from "../../assets/backArrow.svg";
import detailArrow from "../../assets/detailArrow.svg";
import "./IngredientDetailList.css";
import SelectS from "../../components/common/select/SelectS";
import SelectSimple from "../../components/common/select/SelectSimple";
import { useState } from "react";
import IngredientItem from "../../components/refrigerator/IngredientItem";
import Popup from "../../components/common/popup/Popup";

const IngredientDetailList = () => {
  // 샘플 식재료 데이터
  const [ingredients] = useState([
    {
      id: 1,
      image: "img-url",
      category: "과일류",
      name: "딸기",
      addDate: "2023. 02. 27. 09:00",
    },
    {
      id: 2,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 26. 09:00",
    },
    {
      id: 3,
      image: "img-url",
      category: "소분류",
      name: "양배추",
      addDate: "2023. 02. 25. 09:00",
    },
    {
      id: 4,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 27. 09:00",
    },
    {
      id: 5,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 27. 09:00",
    },
    {
      id: 6,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 27. 09:00",
    },
    {
      id: 7,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 27. 09:00",
    },
    {
      id: 8,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 27. 09:00",
    },
    {
      id: 9,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 27. 09:00",
    },
    {
      id: 10,
      image: "img-url",
      category: "소분류",
      name: "당근",
      addDate: "2023. 02. 27. 09:00",
    },
  ]);

  // 정렬 옵션
  const orderOptions = [
    { value: "option1", label: "최신순" },
    { value: "option2", label: "등록순" },
    { value: "option3", label: "임박순" },
    { value: "option4", label: "가나다순" },
  ];
  // 대분류 옵션
  const mainOptions = [
    { value: "", label: "대분류" },
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
  ];
  // 중분류 옵션
  const subOptions = [
    { value: "", label: "중분류" },
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
  ];
  // 소분류 옵션
  const detailOptions = [
    { value: "", label: "소분류" },
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
  ];

  // 팝업 표시 여부를 관리하는 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //   // 팝업 열기
  //   const openPopup = () => {
  //     setIsPopupOpen(true);
  //   };

  // 팝업 닫기
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // 팝업 확인 버튼 클릭
  const handleConfirm = () => {
    // 확인 버튼 클릭 시 수행할 작업
    // 작업 후 팝업 닫기
    closePopup();
  };

  // 선택된 식재료의 상세 정보를 저장하기 위한 상태
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  // 식재료 정보를 받도록 openPopup 수정
  const openPopup = (ingredient) => {
    setSelectedIngredient(ingredient);
    setIsPopupOpen(true);
  };

  return (
    <>
      <Header
        leftIcon={backArrow}
        title="나의 냉장고 목록"
        // rightIcon={close}
        onLeftClick={() => window.history.back()}
        // onRightClick={() => window.history.back()}
      />

      <div className="order-select-container">
        <SelectSimple options={orderOptions} />
      </div>

      <div className="category-select-container">
        <SelectS options={mainOptions} />
        <SelectS options={subOptions} />
        <SelectS options={detailOptions} />
      </div>

      <div className="ingredient-list-container">
        {ingredients.map((ingredient) => (
          <IngredientItem
            key={ingredient.id}
            image={ingredient.image}
            category={ingredient.category}
            name={ingredient.name}
            addDate={ingredient.addDate}
            onClick={() => openPopup(ingredient)}
          />
        ))}
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onConfirm={handleConfirm}
        title={selectedIngredient && selectedIngredient.name}
        outlinedButtonText="수정하기"
        filledButtonText="삭제하기"
      >
        {selectedIngredient && (
          <div className="popup-description-container">
            <div className="popup-description-category">
              <p className="main-category">대분류</p> {/* 수정 */}
              <img
                src={detailArrow}
                alt={detailArrow}
                className="detailArrow-icon"
              />
              <p className="sub-category">중분류</p> {/* 수정 */}
              <img
                src={detailArrow}
                alt={detailArrow}
                className="detailArrow-icon"
              />
              <p className="detail-category">소분류</p> {/* 수정 */}
            </div>

            <img
              // src={}
              alt={selectedIngredient.name}
              className="popup-description-image"
            />

            <div className="popup-description">
              <p className="popup-description-label">유통기한</p>
              <p className="popup-description-expiration">2025. 12. 31.</p>{" "}
              {/* 수정 */}
            </div>

            <div className="popup-description">
              <p className="popup-description-label">보유량</p>
              <p className="popup-description-gram">100g</p> {/* 수정 */}
            </div>

            <div className="popup-description">
              <p className="popup-description-label">등록일</p>
              <p className="popup-description-adddate">
                {selectedIngredient.addDate}
              </p>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};
export default IngredientDetailList;
