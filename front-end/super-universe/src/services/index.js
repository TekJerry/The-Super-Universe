import axios from 'axios'

export const BASE_URL = 
  'https://super-database.herokuapp.com/characters/'


export const grabCharacters = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}

export const postCharacter = async (body) => {
  try {
    const response = await axios.post(BASE_URL, body)
    return response.data
  } catch (error) {
    throw error;
  }
}

export const getCharacter = async (id) => {
  try {
    const res = await axios.get(`https://super-database.herokuapp.com/characters/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateCharacter = async (id, character) => {
  try {
    const res = await axios.put(`https://super-database.herokuapp.com/characters/${id}/`, character);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    const res = await axios.delete(`https://super-database.herokuapp.com/characters/${id}/`);
    return res.data;
  } catch (error) {
    throw error;
  }
};