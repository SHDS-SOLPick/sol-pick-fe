import React from "react";
import "./LevelStatus.css";

/**
 * 캐릭터의 레벨과 경험치 정보를 표시하는 카드 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.level - 현재 레벨 (기본값: 3)
 * @param {number} props.currentExp - 현재 경험치 (기본값: 145)
 * @param {number} props.energy - 현재 에너지 (기본값: 100)
 * @param {number} props.food - 보유한 사료 개수 (기본값: 5)
 * @param {number} props.ingredients - 보유한 식재료 개수 (기본값: 0)
 * @param {Function} props.onFeed - 밥 주기 버튼 클릭 핸들러
 * @param {Function} props.onExplore - 탐색하기 버튼 클릭 핸들러
 * @returns {JSX.Element} 레벨 상태 카드 컴포넌트
 */
const LevelStatus = ({
  level = 3,
  currentExp = 145,
  energy = 100,
  food = 5,
  ingredients = 0,
  onFeed,
  onExplore,
}) => {
  // 레벨에 따른 설정 구성
  const levelConfig = {
    1: { totalExp: 100, foodRatio: 90, ingredientRatio: 10 },
    2: { totalExp: 200, foodRatio: 80, ingredientRatio: 20 },
    3: { totalExp: 300, foodRatio: 70, ingredientRatio: 30 },
    4: { totalExp: 400, foodRatio: 60, ingredientRatio: 40 },
    5: { totalExp: 500, foodRatio: 50, ingredientRatio: 50 },
  };

  // 현재 레벨 설정 가져오기
  const config = levelConfig[level] || levelConfig[1];

  // 경험치 퍼센트 계산
  const expPercentage = Math.min(
    (currentExp / config.totalExp) * 100,
    100
  ).toFixed(1);

  // 픽셀 버튼 컴포넌트 (내부로 통합)
  const PixelButton = ({ children, onClick }) => {
    return (
      <div className="pixel-button-wrapper">
        <div className="pixel-button-shadow"></div>
        <button className="pixel-button" onClick={onClick}>
          {children}
        </button>
      </div>
    );
  };

  return (
    <div className="level-status-container">
      <div className="character-section">
        {/* 선택한 레시피 */}
        <div className="recipe-image"></div>

        <div className="info-section">
          {/* 레벨 표시 및 정보 */}
          <div className="level-info-row">
            <div className="level-badge">레벨{level}</div>
            <div className="level-text">
              식재료 확률 <span className="highlight">{level}배</span>{" "}
              <span className="emoji-up">🆙</span>
            </div>
          </div>

          {/* 경험치 바 */}
          <div className="exp-bar-container">
            <div
              className="exp-bar-fill"
              style={{ width: `${expPercentage}%` }}
            ></div>
            <div className="exp-percentage">{expPercentage}%</div>
          </div>
        </div>
      </div>

      {/* 상태 통계 */}
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-label">경험치🧪</div>
          <div className="stat-value">
            {currentExp}/{config.totalExp}
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-label">에너지🍭</div>
          <div className="stat-value">{energy}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">사료🐟</div>
          <div className="stat-value"> {food}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">식재료🥕</div>
          <div className="stat-value">{ingredients}</div>
        </div>
      </div>

      {/* 버튼 그룹 */}
      <div className="buttons-container">
        <PixelButton onClick={onFeed}>
          <p>밥 주기</p>
          <p className="food-qty">🐟 X 1</p>
        </PixelButton>
        <PixelButton onClick={onExplore}>
          <p>탐색하기</p>
          <p className="energy-consume">🍭 X 50</p>
        </PixelButton>
      </div>
    </div>
  );
};

export default LevelStatus;
