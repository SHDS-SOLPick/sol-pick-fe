import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/auth';

export const authApi = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, {
                email,
                password
            });

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
    }
};