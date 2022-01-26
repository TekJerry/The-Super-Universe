import axios from 'axios'

export const BASE_URL = 
  'https://super-database.herokuapp.com/characters/'


export const grabCharacters = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}
