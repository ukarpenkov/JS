import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d40d50fa-1ffd-46f2-b0cd-1e36d2b2c38f"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
}
