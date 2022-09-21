import api from "../config/api"

const courseService = {
    getList() {
        return api.get(('/elearning/v4/courses'))
    },
    getDetail(id) {
        return api.get((`/elearning/v4/courses/${id}`))
    }
}
export default courseService