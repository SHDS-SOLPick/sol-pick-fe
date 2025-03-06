import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardDesignSelectionPage.css";

// 카드 디자인 컴포넌트
import CardDesign from "../../components/card/CardDesign";

// 필요한 아이콘 import
import backArrow from "../../assets/backArrow.svg";
import close from "../../assets/close.svg";

// 헤더 및 푸터 관련 컴포넌트
import Header from "../../components/common/header/Header";
import Menu from "../../components/common/menu/Menu";

const CardDesignSelectionPage = () => {
  const navigate = useNavigate();

  // 네비게이션 핸들러
  const handleBack = () => navigate(-1);
  const handleClose = () => navigate("/card");
  const handleNext = () => navigate("/card/identity-verification");
  const handleGoToCustomize = () => navigate("/card/customize");

  return (
    <div className="card-design-selection-page">
      <Header
        leftIcon={backArrow}
        title="카드 신청"
        rightIcon={close}
        onLeftClick={handleBack}
        onRightClick={handleClose}
      />

      <div className="card-design-page-content">
        <CardDesign onNext={handleNext} onCustomize={handleGoToCustomize} />
      </div>

      <Menu />
    </div>
  );
};

export default CardDesignSelectionPage;
