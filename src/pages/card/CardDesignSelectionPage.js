import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CardDesignSelectionPage.css";

// 필요한 아이콘 import
import backArrow from "../../assets/backArrow.svg";
import close from "../../assets/close.svg";

// 헤더 및 푸터 관련 컴포넌트
import Header from "../../components/common/header/Header";
import Menu from "../../components/common/menu/Menu";

// 카드 디자인 타입 상수
const CARD_VIEWS = {
  FRONT_BASIC: "frontBasic",
  BACK_BASIC: "backBasic",
  FRONT_CUSTOM: "frontCustom",
};

const CardDesignSelectionPage = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  // 상태 관리
  const [cardView, setCardView] = useState(CARD_VIEWS.FRONT_BASIC);
  const [isFlipping, setIsFlipping] = useState(false);

  // 네비게이션 핸들러
  const handleBack = () => navigate(-1);
  const handleClose = () => navigate("/card");
  const handleNext = () => navigate("/card/verification");
  const handleGoToCustomize = () => navigate("/card/customize");

  // 카드 화면 전환 핸들러
  const handleSwitchDesign = () => {
    if (cardView === CARD_VIEWS.FRONT_BASIC) {
      setCardView(CARD_VIEWS.FRONT_CUSTOM);
    } else if (cardView === CARD_VIEWS.FRONT_CUSTOM) {
      setCardView(CARD_VIEWS.FRONT_BASIC);
    }
  };

  // 카드 뒤집기 핸들러
  const handleFlipCard = () => {
    if (isFlipping) return; // 이미 뒤집는 중이면 무시

    setIsFlipping(true);

    // 카드 뒤집기 애니메이션 적용
    if (cardRef.current) {
      cardRef.current.classList.add("flipping");
    }

    // 애니메이션 중간에 카드 면 변경
    setTimeout(() => {
      setCardView((prevView) =>
        prevView === CARD_VIEWS.FRONT_BASIC
          ? CARD_VIEWS.BACK_BASIC
          : CARD_VIEWS.FRONT_BASIC
      );
    }, 150); // 애니메이션 중간 지점

    // 애니메이션 완료 후 상태 초기화
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.remove("flipping");
      }
      setIsFlipping(false);
    }, 300); // 애니메이션 완료 시점
  };

  // 카드 디자인 라벨 텍스트 결정
  const getDesignLabelText = () => {
    switch (cardView) {
      case CARD_VIEWS.FRONT_BASIC:
        return "기본 디자인";
      case CARD_VIEWS.BACK_BASIC:
        return "기본 디자인 (뒷면)";
      case CARD_VIEWS.FRONT_CUSTOM:
        return "나만의 카드 직접 꾸며 보세요";
      default:
        return "";
    }
  };

  // 디자인 선택 버튼 렌더링
  const renderDesignButton = () => {
    if (cardView === CARD_VIEWS.FRONT_BASIC) {
      return (
        <button className="design-button" onClick={handleFlipCard}>
          뒷면 보기
        </button>
      );
    } else if (cardView === CARD_VIEWS.BACK_BASIC) {
      return (
        <button className="design-button" onClick={handleFlipCard}>
          앞면 보기
        </button>
      );
    } else if (cardView === CARD_VIEWS.FRONT_CUSTOM) {
      return (
        <button
          className="design-button custom-design-button"
          onClick={handleGoToCustomize}
        >
          꾸미러 가기 ✨
        </button>
      );
    }
  };

  return (
    <div className="card-design-container">
      <Header
        leftIcon={backArrow}
        title="카드 신청"
        rightIcon={close}
        onLeftClick={handleBack}
        onRightClick={handleClose}
      />

      <div className="card-design-content">
        {/* 안내 텍스트 */}
        <div className="card-design-title">
          <h2>카드 디자인을 선택해 주세요</h2>
        </div>

        {/* 카드 디자인 표시 영역 */}
        <div className="card-preview">
          {/* 카드 이미지 */}
          <div ref={cardRef} className={`card-image ${cardView}`}>
            {/* 화살표 버튼 렌더링 */}
            {cardView === CARD_VIEWS.FRONT_BASIC && (
              <div
                className="card-arrow card-next-arrow"
                onClick={handleSwitchDesign}
              >
                &#62;
              </div>
            )}

            {cardView === CARD_VIEWS.FRONT_CUSTOM && (
              <div
                className="card-arrow card-prev-arrow"
                onClick={handleSwitchDesign}
              >
                &#60;
              </div>
            )}

            {/* 카드 뒷면 내용 */}
            {cardView === CARD_VIEWS.BACK_BASIC && (
              <div className="card-back-content"></div>
            )}
          </div>

          {/* 디자인 선택 영역 */}
          <div className="design-selection">
            <p className="design-label">{getDesignLabelText()}</p>
            {renderDesignButton()}
          </div>
        </div>
      </div>

      {/* 다음 버튼 */}
      <button className="next-button" onClick={handleNext}>
        선택
      </button>

      <Menu />
    </div>
  );
};

export default CardDesignSelectionPage;
