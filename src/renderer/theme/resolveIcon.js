const iconLibraries = {
    Ai: "ai",
    Bi: "bi",
    Bs: "bs",
    Ci: "ci",
    Di: "di",
    Fa: "fa",
    Fa6: "fa6",
    Fc: "fc",
    Fi: "fi",
    Gi: "gi",
    Go: "go",
    Gr: "gr",
    Hi: "hi",
    Hi2: "hi2",
    Im: "im",
    Io: "io",
    Io5: "io5",
    Lia: "lia",
    Lu: "lu",
    Md: "md",
    Pi: "pi",
    Ri: "ri",
    Rx: "rx",
    Si: "si",
    Sl: "sl",
    Tb: "tb",
    Tfi: "tfi",
    Ti: "ti",
    Vsc: "vsc",
    Wi: "wi",
};

const normalizeIconName = iconName => {
    if (!iconName) {
        return "";
    }

    return iconName
        .trim()
        .replace(/^<\s*/, "")
        .replace(/\s*\/?>\s*$/, "");
};

const getIconLibrary = iconName => {
    const normalizedName =
        normalizeIconName(iconName);

    if (!normalizedName) {
        return null;
    }

    const libraryPrefix =
        Object.keys(iconLibraries)
            .sort(
                (a, b) =>
                    b.length - a.length
            )
            .find(prefix =>
                normalizedName.startsWith(prefix)
            );

    if (!libraryPrefix) {
        return null;
    }

    return iconLibraries[libraryPrefix];
};

export const resolveIcon = async iconName => {
    const normalizedName =
        normalizeIconName(iconName);

    if (!normalizedName) {
        return null;
    }

    const library =
        getIconLibrary(normalizedName);

    if (!library) {
        console.warn(
            `Biblioteca de ícones não encontrada para: ${normalizedName}`
        );

        return null;
    }

    try {
        const iconModule =
            await import(
                `react-icons/${library}`
            );

        return (
            iconModule[normalizedName] ??
            null
        );
    } catch (error) {
        console.error(
            `Erro ao carregar o ícone "${normalizedName}":`,
            error
        );

        return null;
    }
};