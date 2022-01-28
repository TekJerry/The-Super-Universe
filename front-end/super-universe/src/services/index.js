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