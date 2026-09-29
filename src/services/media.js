import { api } from "./api";

export async function getImagesByPublicIds(publicIds) {
    const data = await api(
        "/media/images/by-public-ids",
        {
            method: "POST",
            body: JSON.stringify({
                publicIds,
            }),
        }
    );

    return data.images;
}

export async function getLibraryByProject(
    projectPublicId
) {
    return api(
        `/media/project/${projectPublicId}`
    );
}

export async function getLibraryImages(
    libraryPublicId
) {
    const data = await api(
        `/media/${libraryPublicId}/images`
    );

    return data.images;
}

export async function uploadImages(libraryPublicId, files) {
    const formData = new FormData();

    files.forEach(file => {
        formData.append("images", file);
    });

    const data = await api(
        `/media/${libraryPublicId}/images`,
        {
            method: "POST",
            body: formData,
        }
    );

    return data.images;
}