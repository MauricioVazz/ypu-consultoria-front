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