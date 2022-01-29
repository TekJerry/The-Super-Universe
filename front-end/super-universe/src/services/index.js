import api from '../services/apiConfig'

export const BASE_URL = 
  'https://super-database.herokuapp.com/characters/'


export const grabCharacters = async () => {
  const response = await api.get("/characters")
  return response.data
}

export const postCharacter = async (body) => {
  try {
    const response = await api.post("/characters/", body)
    return response.data
  } catch (error) {
    throw error;
  }
}

export const getCharacter = async (id) => {
  try {
    const res = await api.get(`/characters/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateCharacter = async (id, character) => {
  try {
    const res = await api.put(`/characters/${id}/`, character);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    const res = await api.delete(`/characters/${id}/`);
    return res.data;
  } catch (error) {
    throw error;
  }
};