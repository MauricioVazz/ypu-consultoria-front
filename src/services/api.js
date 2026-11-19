
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api(path, options = {}) {
    const isFormData = options.body instanceof FormData;

    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        credentials: "include",
        headers: {
            ...(isFormData
                ? {}
                : {
                    "Content-Type": "application/json",
                }),
            ...options.headers,
        },
        cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Erro ao comunicar com a API."
        );
    }

    return data;
}
