import React from "react";
import detailArrow from "../../assets/detailArrow.svg";
import "./IngredientDetailContent.css";

const IngredientDetailContent = ({ ingredient }) => {
  if (!ingredient) return null;

  return (
    <div className="ingpopup-description-container">
      <div className="ingpopup-description-category">
        <p className="ingmain-category">대분류</p>
        <img
          src={detailArrow}
          alt="상세화살표"
          className="ingdetailArrow-icon"
        />
        <p className="ingsub-category">중분류</p>
        <img
          src={detailArrow}
          alt="상세화살표"
          className="ingdetailArrow-icon"
        />
        <p className="ingdetail-category">소분류</p>
      </div>

      {/* 첨부된 이미지 표시 (없으면 기본 이미지나 빈 공간) */}
      <img
        src={ingredient.attachedImage || "/path/to/default-image.png"}
        alt={ingredient.name}
        className="ingpopup-description-image"
      />

      <div className="ingpopup-description">
        <p className="ingpopup-description-label">유통기한</p>
        <p className="ingpopup-description-expiration">
          {ingredient.expiryDate}
        </p>
      </div>

      <div className="ingpopup-description">
        <p className="ingpopup-description-label">보유량</p>
        <p className="ingpopup-description-gram">{ingredient.weight}</p>
      </div>

      <div className="ingpopup-description">
        <p className="ingpopup-description-label">등록일</p>
        <p className="ingpopup-description-adddate">{ingredient.addDate}</p>
      </div>
    </div>
  );
};

export default IngredientDetailContent;
