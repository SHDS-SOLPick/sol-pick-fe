import axios from "axios";

const BASE_URL = "http://localhost:8090"; // 백엔드 서버 URL

// 토큰 가져오기
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// 카드 소유 여부 확인
export const checkHasCard = async () => {
  try {
    console.log("카드 소유 여부 확인 API 호출 중...");
    const token = localStorage.getItem("token");
    console.log("토큰 존재 여부:", !!token);

    const response = await axios.get(`${BASE_URL}/api/card/has-card`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("카드 소유 여부 API 응답:", response.data);
    return response.data.hasCard;
  } catch (error) {
    console.error("카드 소유 여부 확인 중 오류 발생:", error);
    if (error.response) {
      console.error("응답 데이터:", error.response.data);
      console.error("응답 상태:", error.response.status);
    }
    return false;
  }
};
