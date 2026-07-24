import { theme } from "@/styles/theme";
import {
    resolveRadius,
    resolveSpacing,
} from "./resolveToken";

export function resolveCardStyle(content = {}) {

    const radius = resolveRadius(content.radius || "MD");

    const base = {
        borderRadius: radius,
        padding: resolveSpacing(content.padding || "LG"),

        transition: "transform 180ms ease, box-shadow 180ms ease",
        willChange: "transform",
    };

    const hover = content.hoverable
        ? {
            ":hover": {
                transform: "scale(1.04)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }
        }
        : {};

    switch (content.cardStyle) {

        case "NONE":
            return {
                ...base,
                background: "transparent",
                border: "none",
                ...hover,
            };

        case "OUTLINE":
            return {
                ...base,
                background: "transparent",
                border: `1px solid ${theme.colors.border}`,
                ...hover,
            };

        case "SURFACE":
        default:
            return {
                ...base,
                background: theme.colors.white,
                border: `1px solid ${theme.colors.border}`,
                boxShadow: "0 8px 20px rgba(0,0,0,.04)",
                ...hover,
            };
    }
}