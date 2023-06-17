import axios from 'axios';
import { API_PATHS } from "./config";

const instance = axios.create({
    baseURL: API_PATHS.BASE,
})

export default instance;
