import axios from 'axios';

const BASE_URL = 'http://localhost:8090';

export const authApi = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, {
                email,
                password
            });

            // JWT 토큰 저장
            localStorage.setItem('token', response.data.token);

            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    // API 호출을 위한 인증 헤더 가져오기
    getAuthHeader: () => {
        const token = localStorage.getItem('token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }
};