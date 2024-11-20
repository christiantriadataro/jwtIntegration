import axios from "axios";
import {IAM_BASE_URL} from "../constants/apiHeaders.ts";
import {useContext} from "react";
import AuthContext from "../contexts/AuthContext.ts";

const IAMInstance = axios.create({
    baseURL: IAM_BASE_URL
})

axios.interceptors.request.use(config => {
    const {token} = useContext(AuthContext)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})

export default IAMInstance;