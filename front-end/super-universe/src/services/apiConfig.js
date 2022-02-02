import axios from "axios";



const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://super-database.herokuapp.com"
      : "http://localhost:8000"
});

// api.interceptors.request.use(async function (config) {
//   config.headers['Authorization'] = await getToken()
//   return config
// }, function (error) {
//   console.log('Request error: ', error)
//   return Promise.reject(error)
// });

export default api;