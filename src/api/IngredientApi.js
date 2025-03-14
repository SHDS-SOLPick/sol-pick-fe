import axios from "axios";
import { authApi } from "./AuthApi";
import { BASE_URL } from "../config";

export const ingredientApi = {
  // 식재료 등록
  addIngredient: async (ingredientData) => {
    try {
      // 사용자 정보에서 userId 가져오기
      const user = authApi.getCurrentUser();
      const userId = user?.memberId || 1;

      // 요청 데이터 준비
      const requestData = {
        userId: userId,
        name: ingredientData.name,
        emoji: ingredientData.emoji || "🍎", // 기본 이모지
        image: ingredientData.image || "",
        quantity: ingredientData.weight ? parseInt(ingredientData.weight) : 1,
        expiryDate: ingredientData.expiryDate
          ? new Date(ingredientData.expiryDate).toISOString()
          : null,
        mainCategory: ingredientData.mainCategory || "기타",
        subCategory: ingredientData.subCategory || "",
        detailCategory: ingredientData.detailCategory || "",
      };

      // API 요청
      const response = await axios.post(
        `${BASE_URL}/solpick/refrigerator/ingredients`,
        requestData,
        {
          headers: {
            ...authApi.getAuthHeader(),
            "Content-Type": "application/json",
          },
        }
      );

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error("식재료 등록 실패:", error);

      if (error.response) {
        console.error("서버 응답 데이터:", error.response.data);
        console.error("서버 응답 상태 코드:", error.response.status);
      }

      return {
        success: false,
        error: error.message || "식재료 등록에 실패했습니다.",
      };
    }
  },

  // 영수증 OCR 처리
  processReceiptOcr: async (base64Image) => {
    try {
      // 사용자 정보에서 userId 가져오기
      const user = authApi.getCurrentUser();
      const userId = user?.memberId || 1;

      // Base64 이미지 데이터에서 헤더 제거
      const base64Data = base64Image.split(",")[1];

      // 요청 데이터 준비
      const requestData = {
        userId: userId,
        receiptImage: base64Data,
      };

      // API 요청
      const response = await axios.post(
        `${BASE_URL}/solpick/refrigerator/receipts/ocr`,
        requestData,
        {
          headers: {
            ...authApi.getAuthHeader(),
            "Content-Type": "application/json",
          },
        }
      );

      return {
        success: true,
        data: response.data,
        ingredientNames: response.data.ingredientNames || [],
        ocrText: response.data.ocrText,
      };
    } catch (error) {
      console.error("영수증 OCR 처리 실패:", error);
      return {
        success: false,
        error: error.message || "영수증 처리에 실패했습니다.",
        ingredientNames: [],
      };
    }
  },

  // 식재료 목록 조회
  getIngredientList: async (sortType = "latest") => {
    try {
      // 사용자 정보에서 userId 가져오기
      const user = authApi.getCurrentUser();
      const userId = user?.memberId || 1;

      // API 요청
      const response = await axios.get(
        `${BASE_URL}/solpick/refrigerator/ingredients/list/${userId}?sortType=${sortType}`,
        {
          headers: authApi.getAuthHeader(),
        }
      );

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error("식재료 목록 조회 실패:", error);
      return {
        success: false,
        error: error.message || "식재료 목록을 불러오는데 실패했습니다.",
        data: [],
      };
    }
  },

  // 식재료 삭제
  deleteIngredient: async (ingredientId) => {
    try {
      // API 요청
      await axios.delete(
        `${BASE_URL}/solpick/refrigerator/ingredients/${ingredientId}`,
        {
          headers: authApi.getAuthHeader(),
        }
      );

      return {
        success: true,
      };
    } catch (error) {
      console.error("식재료 삭제 실패:", error);
      return {
        success: false,
        error: error.message || "식재료 삭제에 실패했습니다.",
      };
    }
  },

  // 식재료 상세 정보 조회
  getIngredientDetail: async (ingredientId) => {
    try {
      // API 요청
      const response = await axios.get(
        `${BASE_URL}/solpick/refrigerator/ingredients/detail/${ingredientId}`,
        {
          headers: authApi.getAuthHeader(),
        }
      );

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error("식재료 상세 정보 조회 실패:", error);
      return {
        success: false,
        error: error.message || "식재료 정보를 불러오는데 실패했습니다.",
        data: null,
      };
    }
  },
};
