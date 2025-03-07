import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardIdentityVerificationPage.css";

// 카드 본인인증 컴포넌트
import CardIdentityVerification from "../../components/card/CardIdentityVerification";

// 헤더 및 푸터 관련 컴포넌트
import Header from "../../components/common/header/Header";
import Menu from "../../components/common/menu/Menu";

// 필요한 아이콘 import
import backArrow from "../../assets/backArrow.svg";
import close from "../../assets/close.svg";

const CardIdentityVerificationPage = () => {
  const navigate = useNavigate();

  // 네비게이션 핸들러
  const handleGoBack = () => navigate(-1);
  const handleClose = () => navigate("/card");

  // 인증 완료 핸들러
  const handleVerificationComplete = () => {
    navigate("/card/terms"); // 다음 단계(약관 동의)로 이동
  };

  return (
    <div className="identity-verification-container">
      <Header
        leftIcon={backArrow}
        title="카드신청"
        rightIcon={close}
        onLeftClick={handleGoBack}
        onRightClick={handleClose}
      />

      <div className="identity-verification-page">
        <CardIdentityVerification onComplete={handleVerificationComplete} />
      </div>

      <Menu />
    </div>
  );
};

export default CardIdentityVerificationPage;
