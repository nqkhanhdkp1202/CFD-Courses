import axios from "axios";

// axios.defaults.baseURL = import.meta.env.VITE_API_HOST

const api = axios.create({
    baseURL: import.meta.env.VITE_API_HOST
})

api.interceptors.response.use((res) => { return res.data }, (err) => { throw err.response.data.message })

export default api