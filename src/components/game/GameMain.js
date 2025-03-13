import React, { useState, useEffect } from "react";

import "./GameMain.css";
import GameBackground from "./GameBackground";
import catPlayground from "../../assets/game/catPlayground.svg";
import dailyGame from "../../assets/game/dailyGame.svg";
import storage from "../../assets/game/storage.svg";
import LevelStatus from "./LevelStatus";
import DiscoveredIngredients from "./DiscoveredIngredients";
import { IngredientIcons } from "./IngredientIcons";

/**
 * 게임 메인 화면 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {Function} props.onNext - 다음 화면으로 이동하는 함수
 * @returns {JSX.Element} 게임 메인 화면
 */
const GameMain = ({ onDailyGame, onStorage }) => {
  // 캐릭터 상태 관리를 위한 state
  const [level, setLevel] = useState(3); // 기본 레벨 3
  const [currentExp, setCurrentExp] = useState(270); // 현재 경험치
  const [energy, setEnergy] = useState(100); // 현재 에너지
  const [food, setFood] = useState(10); // 보유한 사료 개수
  const [ingredients, setIngredients] = useState(0); // 보유한 식재료 개수

  // 발견한 식재료 데이터 관리
  const [discoveredIngredients, setDiscoveredIngredients] = useState({
    discovered: 10,
    total: 70,
    items: [],
  });

  // 컴포넌트 마운트 시 기본 식재료 데이터 로드
  useEffect(() => {
    // 실제 구현에서는 API 호출이나 로컬 스토리지에서 데이터를 가져올 수 있음
    const initialItems = [
      // 발견한 식재료 예시 (실제 앱에서는 동적으로 생성)
      { id: 1, name: "당근", discovered: true, icon: IngredientIcons.carrot },
      { id: 2, name: "양파", discovered: true, icon: IngredientIcons.onion },
      { id: 3, name: "감자", discovered: true, icon: IngredientIcons.potato },
      { id: 4, name: "토마토", discovered: true, icon: IngredientIcons.tomato },
      { id: 5, name: "오이", discovered: true, icon: IngredientIcons.cucumber },
      {
        id: 6,
        name: "브로콜리",
        discovered: true,
        icon: IngredientIcons.broccoli,
      },
      { id: 7, name: "고기", discovered: true, icon: IngredientIcons.meat },
      { id: 8, name: "생선", discovered: true, icon: IngredientIcons.fish },
      { id: 9, name: "치즈", discovered: true, icon: IngredientIcons.cheese },
      { id: 10, name: "계란", discovered: true, icon: IngredientIcons.egg },
      // 미발견 식재료 예시
      ...Array(15)
        .fill()
        .map((_, i) => ({
          id: 11 + i,
          name: "미발견",
          discovered: false,
          icon: "",
        })),
    ];

    setDiscoveredIngredients({
      discovered: 10,
      total: 70,
      items: initialItems,
    });
  }, []);

  /**
   * 밥 주기 기능: 사료를 소모하여 경험치와 에너지 증가
   */
  const feedCat = () => {
    // 사료 확인
    if (food < 1) {
      alert("사료가 부족합니다!");
      return;
    }

    // 레벨별 최대 경험치 설정
    const maxExp = level * 100;

    // 사료 주기 (경험치 10 증가, 에너지 100 증가)
    const expGain = 10;
    const energyGain = 100;

    // 사료 차감
    setFood((prev) => prev - 1);

    // 에너지 증가
    setEnergy((prev) => prev + energyGain);

    // 경험치 처리
    if (currentExp + expGain >= maxExp) {
      // 레벨 업
      if (level < 5) {
        setLevel((prev) => prev + 1);
        setCurrentExp(0);
        alert(`축하합니다! 레벨 ${level + 1}로 성장했습니다!`);
      } else {
        // 최대 레벨인 경우 최대 경험치로 고정
        setCurrentExp(maxExp);
        alert("이미 최대 레벨에 도달했습니다!");
      }
    } else {
      // 경험치 추가
      setCurrentExp((prev) => prev + expGain);
    }

    alert(
      `사료를 주었습니다! 에너지 ${energyGain} 증가, 경험치 ${expGain} 증가`
    );
  };

  /**
   * 탐색하기 기능: 에너지를 소모하여 식재료 또는 사료 획득
   */
  const exploreIngredients = () => {
    // 에너지 확인 (탐색에는 에너지 50 필요)
    if (energy < 50) {
      alert("탐색을 위한 에너지가 부족합니다!");
      return;
    }

    // 에너지 소모
    setEnergy((prev) => prev - 50);

    // 경험치 증가
    setCurrentExp((prev) => prev + 20);

    // 레벨별 식재료 획득 확률 (레벨이 높을수록 식재료를 얻을 확률 증가)
    // 레벨1은 식재료 확률 10%, 레벨이 올라갈수록 확률이 배수로 증가
    const levelConfig = {
      1: { foodRatio: 90, ingredientRatio: 10 }, // 식재료 확률 1배(10%)
      2: { foodRatio: 80, ingredientRatio: 20 }, // 식재료 확률 2배(20%)
      3: { foodRatio: 70, ingredientRatio: 30 }, // 식재료 확률 3배(30%)
      4: { foodRatio: 60, ingredientRatio: 40 }, // 식재료 확률 4배(40%)
      5: { foodRatio: 50, ingredientRatio: 50 }, // 식재료 확률 5배(50%)
    };

    const config = levelConfig[level] || levelConfig[1];

    // 획득 아이템 결정 (확률에 따라 사료 또는 식재료)
    const randomValue = Math.random() * 100; // 0부터 100 사이 랜덤 값

    if (randomValue < config.foodRatio) {
      // 사료 획득
      setFood((prev) => prev + 1);
      alert(
        `탐색 성공! 사료 1개를 획득했습니다. (식재료 획득 확률: ${config.ingredientRatio}%)`
      );
    } else {
      // 식재료 획득
      setIngredients((prev) => prev + 1);

      // 새로운 식재료 발견 처리
      if (discoveredIngredients.discovered < discoveredIngredients.total) {
        // 미발견 식재료 찾기
        const undiscoveredIndex = discoveredIngredients.items.findIndex(
          (item) => !item.discovered
        );

        if (undiscoveredIndex !== -1) {
          // 식재료 아이콘 옵션 (실제 앱에서는 더 많은 아이콘과 논리 필요)
          const iconOptions = [
            "/assets/ing/ing_avocado.svg",
            "/assets/ing/ing_bread.svg",
            "/assets/ing/ing_cherry.svg",
            "/assets/ing/ing_chocolate.svg",
            "/assets/ing/ing_coffee.svg",
          ];

          // 랜덤 아이콘 선택
          const randomIcon =
            iconOptions[Math.floor(Math.random() * iconOptions.length)];

          // 랜덤 식재료 이름 생성
          const ingredientNames = [
            "아보카도",
            "빵",
            "체리",
            "초콜릿",
            "커피",
            "바나나",
            "사과",
            "포도",
            "딸기",
            "오렌지",
          ];
          const randomName =
            ingredientNames[Math.floor(Math.random() * ingredientNames.length)];

          // 아이템 배열 복사 및 업데이트
          const updatedItems = [...discoveredIngredients.items];
          updatedItems[undiscoveredIndex] = {
            ...updatedItems[undiscoveredIndex],
            discovered: true,
            name: randomName,
            icon: randomIcon,
          };

          // 발견한 식재료 상태 업데이트
          setDiscoveredIngredients({
            ...discoveredIngredients,
            discovered: discoveredIngredients.discovered + 1,
            items: updatedItems,
          });

          alert(
            `축하합니다! 새로운 식재료 '${randomName}'을(를) 발견했습니다!`
          );
        } else {
          alert(
            `탐색 성공! 식재료 1개를 획득했습니다. (식재료 획득 확률: ${config.ingredientRatio}%)`
          );
        }
      } else {
        alert(
          `탐색 성공! 식재료 1개를 획득했습니다. (식재료 획득 확률: ${config.ingredientRatio}%)`
        );
      }
    }
  };

  return (
    <div className="game-main-container">
      <GameBackground />

      <div className="game-main-content">
        <div className="game-menu-group">
          <div className="daily-game">
            <img
              src={dailyGame}
              alt="Daily Game"
              className="daily-game-icon"
              onClick={onDailyGame}
            />
            <p className="pixel-font-kr">사료 받기</p>
          </div>
          <div className="storage">
            <img
              src={storage}
              alt="Storage"
              className="storage-icon"
              onClick={onStorage}
            />
            <p className="pixel-font-kr">보관함</p>
          </div>
        </div>

        <div className="cat-playground-container">
          <img
            src={catPlayground}
            alt="Cat Playground"
            className="cat-playground"
          />
        </div>

        {/* 레벨 상태 카드 컴포넌트 */}
        <LevelStatus
          level={level}
          currentExp={currentExp}
          energy={energy}
          food={food}
          ingredients={ingredients}
          onFeed={feedCat}
          onExplore={exploreIngredients}
        />

        {/* 발견한 식재료 컴포넌트 */}
        <DiscoveredIngredients
          discoveredCount={discoveredIngredients.discovered}
          totalCount={discoveredIngredients.total}
          ingredients={discoveredIngredients.items}
        />
      </div>
    </div>
  );
};

export default GameMain;
