import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardDesignDirectionPage.css";

// 카드 디자인 컴포넌트
import CardDesignDirection from "../../components/card/CardDesignDirection";

// 필요한 아이콘 import
import backArrow from "../../assets/backArrow.svg";
import close from "../../assets/close.svg";

// 헤더 및 푸터 관련 컴포넌트
import Header from "../../components/common/header/Header";
import Menu from "../../components/common/menu/Menu";

const CardDesignDirectionPage = () => {
  const navigate = useNavigate();

  // 네비게이션 핸들러
  const handleBack = () => navigate(-1);
  const handleClose = () => navigate("/card");
  const handleNext = () => navigate("/card/apply/custom/background");

  return (
    <div className="card-design-direction-page-container">
      <Header
        leftIcon={backArrow}
        title="카드 디자인"
        rightIcon={close}
        onLeftClick={handleBack}
        onRightClick={handleClose}
      />

      <div className="card-design-direction-component-container">
        <CardDesignDirection onNext={handleNext} />
      </div>

      <Menu />
    </div>
  );
};

export default CardDesignDirectionPage;
