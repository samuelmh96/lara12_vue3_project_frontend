import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000";
export const BASE_URL_API = `${BASE_URL}/api`;

export default function api() {

    const token = "ABC.YTR.123";
    const api = axios.create({
        baseURL: BASE_URL_API,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer` + token,
        },
    });

    api.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        //error 401 (auth) redirect to login
        if (error.response.status === 401) {
            location.href = "/auth/login";
        }
        return Promise.reject(error);
    });

    return api;
}