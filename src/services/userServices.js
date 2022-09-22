import api from "../config/api";

const userServices = {
    getInfo() {
        return api.get('/user/get-info')
    },
    updateInfo(data) {
        return api.post('/user/update', data)
    }
}

export default userServices