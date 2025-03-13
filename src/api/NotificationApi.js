import axios from 'axios';
import { BASE_URL } from '../config';
import { authApi } from './AuthApi';

export const notificationApi = {
  // 읽지 않은 알림 개수 가져오기
  getUnreadCount: async (memberId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/solpick/noti/count/unread/${memberId}`,
        {
          headers: authApi.getAuthHeader()
        }
      );
      return response.data;
    } catch (error) {
      console.error("읽지 않은 알림 개수 가져오기 실패:", error);
      return "?"; // 에러 발생 시 ?으로 표시
    }
  },

  // 알림 목록 가져오기
  getNotifications: async (memberId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/solpick/noti/list/${memberId}`,
        {
          headers: authApi.getAuthHeader()
        }
      );
      return response.data;
    } catch (error) {
      console.error("읽지 않은 알림 개수 가져오기 실패:", error);
      return []; 
    }
  },

  // 알림 읽음 처리
  markAsRead: async (notificationId) => {
    try {
      await axios.patch(
        `${BASE_URL}/solpick/noti/${notificationId}/read`,
        {},
        {
          headers: authApi.getAuthHeader()
        }
      );
      return true;
    } catch (error) {
      console.error("알림 읽음 처리 실패:", error);
      return false;
    }
  }
};