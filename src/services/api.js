const API_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("API_URL =", API_URL);

export async function api(path, options = {}) {
    console.log(`${API_URL}${path}`);

    const response = await fetch(`${API_URL}${path}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        cache: "no-store",
        ...options,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro ao comunicar com a API.");
    }

    return data;
}