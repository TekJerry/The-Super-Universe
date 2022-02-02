import api from '../services/apiConfig'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

export const BASE_URL = 
  'https://super-database.herokuapp.com/characters/'


export const grabCharacters = async () => {
  const response = await api.get("/characters")
  return response.data
}

export const postCharacter = async (body) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token
      },
    };

    const response = await api.post("/characters/", body, headers)
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
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token
      },
    };

    const res = await api.put(`/characters/${id}/`, character, headers);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token
      },
    };

    const res = await api.delete(`/characters/${id}/`, headers);
    return res.data;
  } catch (error) {
    throw error;
  }
};