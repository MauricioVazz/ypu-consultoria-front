import { api } from "@/services/api";

export async function getProject(slug) {
    const response = await api(`/projects/${slug}`);

    return response.project;
}

export async function getProjectLayout(publicId) {
    const response = await api(`/projects/${publicId}/layout`);

    return response.blocks;
}