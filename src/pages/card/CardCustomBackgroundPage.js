import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardCustomBackgroundPage.css";

// 카드 디자인 컴포넌트
import CardCustomBackground from "../../components/card/CardCustomBackground";

// 필요한 아이콘 import
import backArrow from "../../assets/backArrow.svg";
import close from "../../assets/close.svg";

// 헤더 및 푸터 관련 컴포넌트
import Header from "../../components/common/header/Header";
import Menu from "../../components/common/menu/Menu";

const CardCustomBackgroundPage = () => {
  const navigate = useNavigate();

  // 네비게이션 핸들러
  const handleBack = () => navigate(-1);
  const handleClose = () => navigate("/card");
  const handleNext = () => navigate("/card/apply/custom/sticker");

  return (
    <>
      <Header
        leftIcon={backArrow}
        title="카드 디자인"
        rightIcon={close}
        onLeftClick={handleBack}
        onRightClick={handleClose}
      />

      <div className="card-custom-background-page-container">
        <div className="card-custom-background-component-container">
          <CardCustomBackground onNext={handleNext} />
        </div>
      </div>

      <Menu />
    </>
  );
};

export default CardCustomBackgroundPage;
