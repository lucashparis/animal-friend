import api from "./api";

export const createNewUserModalService = async (objUser) => {
    try {
      const response = await api.post('/api/user/', objUser);
      return response.data;
    } catch (error) {
      throw error;
    }
};