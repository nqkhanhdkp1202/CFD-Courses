import api from "../config/api";

const authServices = {
    login(data) {
        return api.post('/login', data)
    },
    register(data) {
        return api.post('/register', data)
    },
    refeshToken(data) {
        return api.post('/refresh-token', data)
    }
}

export default authServices