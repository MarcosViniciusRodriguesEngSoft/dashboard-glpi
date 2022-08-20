import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.REACT_APP_DASHBOARD_PUBLIC_BASE_URL_API,
});
