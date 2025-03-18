import axios from "axios";
import { authApi } from "./AuthApi"; // 인증 관련 API 함수들
import recipes from "../components/game/RecipeData"; // 클라이언트 측 레시피 데이터
import { saveSelectedRecipe as saveRecipeToLocalStorage } from "../utils/game/storageUtils"; // 로컬 스토리지 유틸

const BASE_URL = "http://localhost:8090"; // 서버 기본 URL

// API 호출을 위한 기본 설정
const gameApiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정 - 매 요청마다 인증 헤더 추가
gameApiClient.interceptors.request.use(
  (config) => {
    const authHeader = authApi.getAuthHeader();
    config.headers = {
      ...config.headers,
      ...authHeader,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 레시피 선택 저장
 * @param {number} recipeId - 선택한 레시피 ID
 * @returns {Promise} - 응답 프로미스
 */
export const saveSelectedRecipe = async (recipeId) => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 서버에 레시피 선택 저장
    const response = await gameApiClient.post(
      "/solpick/api/game/recipe/select",
      {
        userId: userId,
        recipeId: recipeId,
      }
    );

    console.log("Server response:", response);

    // 항상 localStorage에 저장 (response 확인 없이)
    console.log("Saving recipeId to localStorage:", recipeId);
    saveRecipeToLocalStorage(recipeId);

    return response.data;
  } catch (error) {
    console.error("레시피 선택 저장 실패:", error);
    throw error;
  }
};

/**
 * 선택한 레시피 조회
 * @returns {Promise} - 선택한 레시피 ID를 포함한 응답 프로미스
 */
export const getSelectedRecipe = async () => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 서버에서 선택한 레시피 조회
    const response = await gameApiClient.get(
      `/solpick/api/game/recipe/selected/${userId}`
    );
    return response.data;
  } catch (error) {
    // 204 No Content는 정상 응답이므로 null 반환
    if (error.response && error.response.status === 204) {
      return null;
    }
    console.error("선택한 레시피 조회 실패:", error);
    throw error;
  }
};

/**
 * 게임 상태 조회
 * @returns {Promise} - 게임 상태를 포함한 응답 프로미스
 */
export const getGameState = async () => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 서버에서 게임 상태 조회
    const response = await gameApiClient.get(
      `/solpick/api/game/state/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("게임 상태 조회 실패:", error);
    throw error;
  }
};

/**
 * 게임 상태 업데이트
 * @param {Object} gameState - 업데이트할 게임 상태
 * @returns {Promise} - 업데이트된 게임 상태를 포함한 응답 프로미스
 */
export const updateGameState = async (gameState) => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 서버에 게임 상태 업데이트
    const response = await gameApiClient.put(
      `/solpick/api/game/state/${userId}`,
      gameState
    );
    return response.data;
  } catch (error) {
    console.error("게임 상태 업데이트 실패:", error);
    throw error;
  }
};

/**
 * 식재료 발견 정보 초기화
 * @param {number} recipeId - 레시피 ID
 * @returns {Promise} - 응답 프로미스
 */
export const initializeDiscoveredIngredients = async (recipeId) => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 선택한 레시피 객체 가져오기
    const selectedRecipe = recipes.find((r) => r.id === recipeId);

    if (selectedRecipe) {
      // 서버에 식재료 발견 정보 초기화 요청
      const ingredientsInfo = selectedRecipe.ingredients.map((ing) => ({
        name: ing.name,
        requiredQuantity: ing.quantity,
      }));

      const response = await gameApiClient.post(
        "/solpick/api/game/initialize-ingredients",
        {
          userId: userId,
          recipeId: recipeId,
          ingredients: ingredientsInfo,
        }
      );

      return response.data;
    }

    throw new Error("선택한 레시피를 찾을 수 없습니다.");
  } catch (error) {
    console.error("식재료 발견 정보 초기화 실패:", error);
    throw error;
  }
};

/**
 * 식재료 발견 처리
 * @param {number} recipeId - 레시피 ID
 * @param {string} ingredientName - 식재료 이름
 * @returns {Promise} - 발견 결과를 포함한 응답 프로미스
 */
export const discoverIngredient = async (recipeId, ingredientName) => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 선택한 레시피 객체 가져오기 (포인트 정보 포함)
    const selectedRecipe = recipes.find((r) => r.id === recipeId);
    const recipePoints = selectedRecipe ? selectedRecipe.points || 5000 : 5000;

    // 서버에 식재료 발견 처리 요청
    const response = await gameApiClient.post(
      "/solpick/api/game/discover-ingredient",
      {
        userId: userId,
        recipeId: recipeId,
        ingredientName: ingredientName,
        recipePoints: recipePoints,
      }
    );

    return response.data;
  } catch (error) {
    console.error("식재료 발견 처리 실패:", error);
    throw error;
  }
};

/**
 * 사료 추가
 * @param {number} amount - 추가할 사료 수량
 * @returns {Promise} - 응답 프로미스
 */
export const addFood = async (amount) => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 서버에 사료 추가 요청
    const response = await gameApiClient.put(
      `/solpick/api/game/add-food/${userId}`,
      {
        amount: amount,
      }
    );

    return response.data;
  } catch (error) {
    console.error("사료 추가 실패:", error);
    throw error;
  }
};

/**
 * 발견한 식재료 목록 조회
 * @param {number} recipeId - 레시피 ID
 * @returns {Promise} - 발견한 식재료 목록을 포함한 응답 프로미스
 */
export const getDiscoveredIngredients = async (recipeId) => {
  try {
    // localStorage에서 사용자 ID 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.memberId;

    // 서버에서 발견한 식재료 목록 조회
    const response = await gameApiClient.get(
      `/solpick/api/game/discovered-ingredients/${userId}/${recipeId}`
    );
    return response.data;
  } catch (error) {
    console.error("발견한 식재료 목록 조회 실패:", error);
    throw error;
  }
};
