import { theme } from "../../styles/theme.js";

export function resolveSpacing(value) {
    if (!value) return undefined;

    return theme.spacing[value.toLowerCase()] || value;
}

export function resolveFontSize(value) {
    if (!value) return undefined;

    const map = {

        // headings

        H1: theme.typography.fontSize.h1,
        H2: theme.typography.fontSize.h2,
        H3: theme.typography.fontSize.h3,
        H4: theme.typography.fontSize.h4,
        H5: theme.typography.fontSize.h5,

        // text

        SM: theme.typography.fontSize.small,
        MD: theme.typography.fontSize.p,
        LG: theme.typography.fontSize.h5,

        P: theme.typography.fontSize.p,
        SMALL: theme.typography.fontSize.small

    };

    return map[value] || value;
}

export function resolveColor(value) {
    if (!value) return undefined;

    const map = {
        PRIMARY: theme.colors.primary,
        GREEN: theme.colors.green,
        DARKGREEN: theme.colors.darkGreen,
        BACKGROUND: theme.colors.background,
        SURFACE: theme.colors.surface,
        CANVAS: theme.colors.canvas,
        SIDEBAR: theme.colors.sidebar,
        TOOLBAR: theme.colors.toolbar,
        BORDER: theme.colors.border,
        WHITE: theme.colors.white,
        TEXT: theme.colors.text,
        GRAY: theme.colors.gray,
        DANGER: theme.colors.danger,
        WARNING: theme.colors.warning,

        DEFAULT: "inherit",
    };

    return map[value] || value;
}

export function resolveBackground(value) {
    if (!value) return undefined;

    if (value === "DEFAULT") {
        return "transparent";
    }

    return resolveColor(value);
}

export function resolveRadius(value) {
    if (!value) return undefined;

    const map = {
        SM: theme.radius.sm,
        MD: theme.radius.md,
        LG: theme.radius.lg,
    };

    return map[value] || value;
}

export function resolveJustify(value) {
    const map = {
        START: "flex-start",
        CENTER: "center",
        END: "flex-end",
        BETWEEN: "space-between",
        AROUND: "space-around",
        EVENLY: "space-evenly",
    };

    return map[value] || "flex-start";
}

export function resolveAlign(value) {
    const map = {
        START: "flex-start",
        CENTER: "center",
        END: "flex-end",
        STRETCH: "stretch",
    };

    return map[value] || "stretch";
}

export function resolveTextAlign(value) {
    const map = {
        LEFT: "left",
        CENTER: "center",
        RIGHT: "right",
        JUSTIFY: "justify",
    };

    return map[value] || "left";
}

export function resolveWidth(value) {
    const map = {
        FULL: "100%",
        AUTO: "auto",
    };

    return map[value] || value;
}

export function resolveObjectFit(value) {
    const map = {
        COVER: "cover",
        CONTAIN: "contain",
        FILL: "fill",
    };

    return map[value] || "cover";
}

export function resolveShadow(value) {
    if (!value) return "none";

    return "0 8px 20px rgba(0,0,0,.15)";
}

export function resolveMaxWidth(value) {

    if (!value) return undefined;

    const map = {
        SM: theme.container.sm,
        MD: theme.container.md,
        LG: theme.container.lg,
        XL: theme.container.xl,
        FULL: theme.container.full,
    };

    return map[value] || value;
}

export function resolveMinHeight(value) {

    const map = {

        AUTO: "auto",

        SM: "300px",

        MD: "500px",

        LG: "700px",

        FULL: "100vh"

    };

    return map[value] || value;

}

export function resolveOverlayOpacity(value) {
    if (value === undefined || value === null) {
        return undefined;
    }

    return Number(value) / 100;
}

export function resolveColumns(value) {
    if (!value) return 1;

    return Number(value);
}

export function resolveGridSpan(span = 12) {

    const width = (span / 12) * 100;

    return `${width}%`;

}

export function resolveAspectRatio(value) {

    const map = {

        AUTO: undefined,

        SQUARE: "1 / 1",

        PORTRAIT: "3 / 4",

        LANDSCAPE: "4 / 3",

        VIDEO: "16 / 9"

    };

    return map[value] || value;

}

export function resolveButtonStyle(value) {

    const map = {

        PRIMARY: {
            background: theme.colors.primary,
            color: theme.colors.white,
            border: "none"
        },

        SECONDARY: {
            background: theme.colors.green,
            color: theme.colors.white,
            border: "none"
        },

        OUTLINE: {
            background: "transparent",
            color: theme.colors.primary,
            border: `2px solid ${theme.colors.primary}`
        },

        LINK: {
            background: "transparent",
            color: theme.colors.primary,
            border: "none"
        }

    };

    return map[value] || map.PRIMARY;

}

export function resolveButtonSize(value) {

    const map = {

        SM: {
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            fontSize: theme.typography.fontSize.small,
        },

        MD: {
            padding: `${theme.spacing.sm} ${theme.spacing.md}`,
            fontSize: theme.typography.fontSize.p,
        },

        LG: {
            padding: `${theme.spacing.md} ${theme.spacing.lg}`,
            fontSize: theme.typography.fontSize.h5,
        }

    };

    return map[value] || map.MD;

}