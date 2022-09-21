import api from "../config/api";

const userServices = {
    getInfo() {
        const token = localStorage.getItem('token')
        if (token) {
            token = JSON.parse(token)
            return api.get('/user/get-info', {
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            })
        }
    },
    updateInfo(data) {
        return api.post('/user/update', data)
    },
}

export default userServices