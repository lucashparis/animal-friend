import api from "./api";

export const createNewUserService = async (objUser) => {
    try {
		const response = await api.post('/api/user/', objUser);
		return response.data;
    } catch (error) {
		throw error;
    }
};

export const getUsersService = async () => {
    try {
		const response = await api.get('/api/user/');
		return response.data;
    } catch (error) {
		throw error;
    }
};