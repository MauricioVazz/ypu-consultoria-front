
import { api } from "@/services/api";

export async function loginAdmin(email, password) {
    return api("/admins/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
}

export async function getCurrentAdmin() {
    const response = await api("/admins/me");
    return response.admin;
}

export async function logoutAdmin() {
    return api("/admins/logout", {
        method: "POST",
    });
}
