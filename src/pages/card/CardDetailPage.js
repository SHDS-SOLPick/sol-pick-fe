import React from "react";
// 카드 성세 컴포넌트
import CardDetail from "../../components/card/CardDetail";
import "./CardDetailPage.css";
// 헤더 및 푸터 관련 컴포넌트
import MainHeader from "../../components/common/header/MainHeader";
import noti from "../../assets/noti.svg";
import notiActive from "../../assets/notiActive.svg";
import shop from "../../assets/shop.svg";
import shopActive from "../../assets/shopActive.svg";
import Menu from "../../components/common/menu/Menu";

const CardDetailPage = () => {
  const navigateToShop = () => {};

  const navigateToNoti = () => {};

  // 카드 상세 데이터 (실제 구현에서는 API로 가져올 수 있음)
  const cardData = {
    cardName: "신한카드",
    cardSubName: "쏠픽(SOL Pick)",
    benefits: [
      {
        benefitTitle1: "음식점 ",
        benefitDetail1: "1 % 할인",
        benefitTitle2: "ReciPICK 몰에서 결제 시 ",
        benefitDetail2: "추가 1% 포인트 적립",
        benefitTitle3: "회원 전용 서비스 혜택 - ",
        benefitDetail3: "SOL Pick APP",
      },
    ],
  };

  return (
    <div className="card-container">
      <MainHeader
        leftIcon={shop}
        leftIconActive={shopActive}
        rightIcon={noti}
        rightIconActive={notiActive}
        onLeftClick={navigateToShop}
        onRightClick={navigateToNoti}
      />

      <div className="card-detail-page">
        <CardDetail cardData={cardData} />
      </div>

      <Menu />
    </div>
  );
};

export default CardDetailPage;
