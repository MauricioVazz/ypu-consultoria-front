import { api } from "@/services/api";

export async function getProject(slug) {
    const response = await api(`/projects/${slug}`);

    return response.project;
}

export async function getProjectLayout(publicId) {
    const response = await api(`/projects/${publicId}/layout`);

    return response.blocks;
}

export async function getAllProjects() {
    const response = await api("/projects");

    return response.projects;
}


export async function createProject(data) {
    const response = await api("/projects", {
        method: "POST",
        body: JSON.stringify(data),
    });

    return response.project;
}

export async function updateProject(publicId, data) {
    const response = await api(`/projects/${publicId}`, {
        method: "PATCH",
        body: JSON.stringify(data),
    });

    return response.project;
}
