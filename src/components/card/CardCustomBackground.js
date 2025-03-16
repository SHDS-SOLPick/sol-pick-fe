import React, { useState } from "react";
import "./CardCustomBackground.css";
import CardBackground1 from "../../assets/card/cardBackground1.svg";
import CardBackground2 from "../../assets/card/cardBackground2.svg";
import CardBackground3 from "../../assets/card/cardBackground3.svg";
import CardBackground4 from "../../assets/card/cardBackground4.svg";

const CardCustomBackground = ({ onNext }) => {
  // 카드 디자인 옵션 데이터 - SVG 배경으로 변경
  const cardDesigns = [
    { id: 1, name: "디자인 1", backgroundImage: CardBackground1 },
    { id: 2, name: "디자인 2", backgroundImage: CardBackground2 },
    { id: 3, name: "디자인 3", backgroundImage: CardBackground3 },
    { id: 4, name: "디자인 4", backgroundImage: CardBackground4 },
  ];

  // 선택된 카드 디자인 상태 관리
  const [selectedDesign, setSelectedDesign] = useState(1);

  return (
    <div className="card-custom-background-container">
      <div className="card-custom-background-content">
        <div className="card-background-title">
          <h2>카드 배경 선택해 주세요</h2>
        </div>
        <div className="card-background-underline"></div>

        <div className="card-bg-selection-section">
          <div className="card-bg-grid">
            {cardDesigns.map((design) => (
              <div
                key={design.id}
                className={`card-bg-option ${
                  selectedDesign === design.id ? "selected" : ""
                }`}
                onClick={() => setSelectedDesign(design.id)}
              >
                <div
                  className="bg-card-preview"
                  style={{
                    backgroundImage: `url(${design.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="background-button-cotainer">
          <button
            className="background-selection-button"
            onClick={onNext}
            disabled={selectedDesign === null}
          >
            선택
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCustomBackground;
