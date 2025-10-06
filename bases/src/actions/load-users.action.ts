import axios from "axios"
import type { UserListResponse } from "../interfaces/reques.response";

const BASE_URL = "https://reqres.in/api/";


export const loadUsersActions = async (page: number) => {
    try {
        const response = await axios.get<UserListResponse>(`${BASE_URL}users`, {
            params: { page: page },
            headers: {
                "X-API-KEY": "reqres-free-v1"
            }
        });
        return response.data.data;
    } catch (error) {
        console.log("Error loading users:", error);
        return [];
    }
}