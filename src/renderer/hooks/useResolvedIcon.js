"use client";

import { useEffect, useState } from "react";

import { resolveIcon } from "@/renderer/theme/resolveIcon";

export default function useResolvedIcon(
    iconName
) {
    const [Icon, setIcon] = useState(null);

    useEffect(() => {
        let active = true;

        const loadIcon = async () => {
            if (!iconName) {
                setIcon(null);
                return;
            }

            const resolvedIcon =
                await resolveIcon(iconName);

            if (active) {
                setIcon(
                    () => resolvedIcon
                );
            }
        };

        loadIcon();

        return () => {
            active = false;
        };
    }, [iconName]);

    return Icon;
}