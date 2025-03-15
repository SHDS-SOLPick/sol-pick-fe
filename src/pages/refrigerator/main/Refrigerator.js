import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RefrigeratorHeader from "../../../components/refrigerator/main/RefrigeratorHeader";
import Menu from "../../../components/common/menu/Menu";
import AddPopup from "../../../components/refrigerator/popup/AddPopup";
import Popup from "../../../components/common/popup/Popup";
import IngredientDetailContent from "../../../components/refrigerator/popup/IngredientDetailContent";
import refrigeratorIllust from "../../../assets/refrigeratorIllust.svg";
import "./Refrigerator.css";
import { getIngredientImageFromEmoji } from "../../../utils/emojiToImageMap";
import MainHeader from "../../../components/common/header/MainHeader";

const Refrigerator = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAddIngredientPopupOpen, setIsAddIngredientPopupOpen] =
    useState(false);
  const [isIngredientDetailPopupOpen, setIsIngredientDetailPopupOpen] =
    useState(false);
  const [clickedIngredient, setClickedIngredient] = useState(null);

  // 샘플 식재료 데이터 - 실제로는 API/상태에서 가져와야 함
  const [allIngredients, setAllIngredients] = useState([
    // 첫 번째 냉장고
    [
      // 1번 선반
      {
        id: 1,
        name: "수박",
        emoji: "🍉",
        image: getIngredientImageFromEmoji("🍉"),
        size: 50,
        x: 69,
      },
      {
        id: 2,
        name: "체리",
        emoji: "🍒",
        image: getIngredientImageFromEmoji("🍒"),
        size: 50,
        x: 137,
      },
      {
        id: 3,
        name: "빵",
        emoji: "🍞",
        image: getIngredientImageFromEmoji("🍞"),
        size: 50,
        x: 205,
      },

      // 2번 선반
      {
        id: 4,
        name: "레몬",
        emoji: "🍋",
        image: getIngredientImageFromEmoji("🍋"),
        size: 50,
        x: 69,
      },
      {
        id: 5,
        name: "토마토",
        emoji: "🍅",
        image: getIngredientImageFromEmoji("🍅"),
        size: 50,
        x: 137,
      },
      {
        id: 6,
        name: "오렌지",
        emoji: "🍊",
        image: getIngredientImageFromEmoji("🍊"),
        size: 50,
        x: 205,
      },

      // 3번 선반
      {
        id: 7,
        name: "당근",
        emoji: "🥕",
        image: getIngredientImageFromEmoji("🥕"),
        size: 50,
        x: 69,
      },
      {
        id: 8,
        name: "브로콜리",
        emoji: "🥦",
        image: getIngredientImageFromEmoji("🥦"),
        size: 50,
        x: 137,
      },
      {
        id: 9,
        name: "크루아상",
        emoji: "🥐",
        image: getIngredientImageFromEmoji("🥐"),
        size: 50,
        x: 205,
      },

      // 4번 선반
      {
        id: 10,
        name: "딸기",
        emoji: "🍓",
        image: getIngredientImageFromEmoji("🍓"),
        size: 50,
        x: 69,
      },
      {
        id: 11,
        name: "상추",
        emoji: "🥬",
        image: getIngredientImageFromEmoji("🥬"),
        size: 50,
        x: 137,
      },
      {
        id: 12,
        name: "포도",
        emoji: "🍇",
        image: getIngredientImageFromEmoji("🍇"),
        size: 50,
        x: 205,
      },

      // 5번 선반
      {
        id: 13,
        name: "사과",
        emoji: "🍎",
        image: getIngredientImageFromEmoji("🍎"),
        size: 50,
        x: 69,
      },
      {
        id: 14,
        name: "배",
        emoji: "🍐",
        image: getIngredientImageFromEmoji("🍐"),
        size: 50,
        x: 137,
      },
      {
        id: 15,
        name: "복숭아",
        emoji: "🍑",
        image: getIngredientImageFromEmoji("🍑"),
        size: 50,
        x: 205,
      },
    ],
    // 두 번째 냉장고
    [
      // 1번 선반
      {
        id: 16,
        name: "코코넛",
        emoji: "🥥",
        image: getIngredientImageFromEmoji("🥥"),
        size: 50,
        x: 69,
      },
      {
        id: 17,
        name: "아보카도",
        emoji: "🥑",
        image: getIngredientImageFromEmoji("🥑"),
        size: 50,
        x: 137,
      },
      {
        id: 18,
        name: "키위",
        emoji: "🥝",
        image: getIngredientImageFromEmoji("🥝"),
        size: 50,
        x: 205,
      },

      // 2번 선반
      {
        id: 19,
        name: "닭고기",
        emoji: "🍗",
        image: getIngredientImageFromEmoji("🍗"),
        size: 50,
        x: 69,
      },
      {
        id: 20,
        name: "달걀",
        emoji: "🥚",
        image: getIngredientImageFromEmoji("🥚"),
        size: 50,
        x: 137,
      },
      {
        id: 21,
        name: "고기",
        emoji: "🥩",
        image: getIngredientImageFromEmoji("🥩"),
        size: 50,
        x: 205,
      },

      // 3번 선반
      {
        id: 22,
        name: "치즈",
        emoji: "🧀",
        image: getIngredientImageFromEmoji("🧀"),
        size: 50,
        x: 69,
      },
      {
        id: 23,
        name: "버터",
        emoji: "🧈",
        image: getIngredientImageFromEmoji("🧈"),
        size: 50,
        x: 137,
      },
      {
        id: 24,
        name: "감자",
        emoji: "🥔",
        image: getIngredientImageFromEmoji("🥔"),
        size: 50,
        x: 205,
      },

      // 4번 선반
      {
        id: 25,
        name: "옥수수",
        emoji: "🌽",
        image: getIngredientImageFromEmoji("🌽"),
        size: 50,
        x: 69,
      },
    ],
  ]);

  const openAddIngredientPopup = () => {
    setIsAddIngredientPopupOpen(true);
  };

  const closeAddIngredientPopup = () => {
    setIsAddIngredientPopupOpen(false);
  };

  const openIngredientDetailPopup = (ingredient) => {
    setClickedIngredient(ingredient);
    setIsIngredientDetailPopupOpen(true);
  };

  const closeIngredientDetailPopup = () => {
    setIsIngredientDetailPopupOpen(false);
  };

  const navigateToIngredientList = () => {
    navigate("/refrigerator/list");
  };

  // 전체 식재료 수 계산
  const totalIngredients = allIngredients.reduce(
    (total, fridge) => total + fridge.length,
    0
  );

  // 페이지 변경 핸들러
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // 스와이프 제스처를 위한 터치 처리
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentPage < allIngredients.length - 1) {
      handlePageChange(currentPage + 1);
    } else if (isRightSwipe && currentPage > 0) {
      handlePageChange(currentPage - 1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // 선반 위치 계산
  const shelfPositions = [113, 213, 313, 413, 513];
  const ingredientPositions = shelfPositions.map((pos) => pos - 58); // 높이 50px + 8px 간격

  // 선반별로 식재료 그룹화
  const groupIngredientsByShelf = (fridgeIngredients) => {
    const shelves = [[], [], [], [], []];

    fridgeIngredients.forEach((ingredient) => {
      // ID 기반으로 선반 인덱스 결정
      let shelfIndex = Math.floor((ingredient.id - 1) / 3) % 5;
      // 선반 인덱스가 범위 내에 있는지 확인
      if (shelfIndex >= 0 && shelfIndex < 5) {
        shelves[shelfIndex].push(ingredient);
      }
    });

    return shelves;
  };

  return (
    <div className="refrigerator-main-container">
      <MainHeader />

      <RefrigeratorHeader
        totalIngredients={totalIngredients}
        onAddClick={openAddIngredientPopup}
        onDetailClick={navigateToIngredientList}
      />

      <div
        className="refrigerator-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="refrigerator-carousel"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {allIngredients.map((fridgeIngredients, fridgeIndex) => (
            <div key={`fridge-${fridgeIndex}`} className="refrigerator-slide">
              <div className="refrigerator-with-ingredients">
                {/* 냉장고 SVG */}
                <img
                  src={refrigeratorIllust}
                  alt="refrigeratorIllust"
                  className="refrigerator-svg"
                />

                {/* 선반 위 식재료들 */}
                {groupIngredientsByShelf(fridgeIngredients).map(
                  (shelfIngredients, shelfIndex) => (
                    <div
                      key={`shelf-${fridgeIndex}-${shelfIndex}`}
                      className="ingredients-shelf"
                      style={{
                        position: "absolute",
                        top: `${ingredientPositions[shelfIndex]}px`,
                      }}
                    >
                      {shelfIngredients.map((ingredient) => (
                        <div
                          key={`ingredient-${ingredient.id}`}
                          className="ingredient-item"
                          onClick={() => openIngredientDetailPopup(ingredient)}
                          style={{
                            position: "absolute",
                            left: `${ingredient.x}px`,
                            width: `${ingredient.size}px`,
                            height: `${ingredient.size}px`,
                            cursor: "pointer",
                          }}
                        >
                          {ingredient.image ? (
                            <img
                              src={ingredient.image}
                              alt={ingredient.name}
                              className="ingredient-image"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          ) : (
                            <span
                              className="ingredient-emoji"
                              style={{
                                fontSize: `${ingredient.size * 0.8}px`,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {ingredient.emoji}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 인디케이터 */}
      <div className="refrigerator-indicators">
        {allIngredients.map((_, index) => (
          <div
            key={`indicator-${index}`}
            className={`refrigerator-indicator ${
              index === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>

      {/* 식재료 추가 팝업 */}
      <AddPopup
        isOpen={isAddIngredientPopupOpen}
        onClose={closeAddIngredientPopup}
      />

      {/* 식재료 상세 정보 팝업 */}
      <Popup
        isOpen={isIngredientDetailPopupOpen}
        onClose={closeIngredientDetailPopup}
        title={clickedIngredient ? clickedIngredient.name : "식재료명"}
        outlinedButtonText="수정하기"
        filledButtonText="삭제하기"
      >
        <IngredientDetailContent ingredient={clickedIngredient} />
      </Popup>

      <Menu />
    </div>
  );
};

export default Refrigerator;
