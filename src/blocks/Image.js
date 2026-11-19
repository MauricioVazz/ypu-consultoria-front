"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { theme } from "@/styles/theme";
import { useEffect, useMemo, useState } from "react";
import NextImage from "next/image";
import { getImagesByPublicIds } from "@/services/media";

export default function Image({ block }) {
    const { content } = block;

    const imagePublicId = useMemo(
        () => content.imagePublicId ?? null,
        [content.imagePublicId]
    );

    const style = resolveStyle(content);
    const [imageData, setImageData] = useState({
        publicId: null,
        image: null,
    });

    const image =
        imageData.publicId === imagePublicId
            ? imageData.image
            : null;

    const aspectRatio =
        content.aspectRatio === "AUTO" &&
            image?.width &&
            image?.height
            ? `${image.width} / ${image.height}`
            : style.aspectRatio || "16 / 9";

useEffect(() => {
    if (!imagePublicId) return;

    let cancelled = false;

    async function loadImage() {
        try {
            const images = await getImagesByPublicIds([imagePublicId]);

            if (!cancelled) {
                setImageData({
                    publicId: imagePublicId,
                    image: images[0] ?? null,
                });
            }
        } catch (err) {
            if (!cancelled) {
                console.error("Erro ao carregar imagem:", err);
            }
        }
    }

    loadImage();

    return () => {
        cancelled = true;
    };
}, [imagePublicId]);

    return (
        <figure
            style={{
                margin: 0,
                width: style.width || "100%",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    aspectRatio,
                    boxSizing: "border-box",
                    borderRadius: style.borderRadius,
                    boxShadow: style.boxShadow,
                    background: theme.colors.surface,
                }}
            >
                {image?.url ? (
                    <NextImage
                        src={image.url}
                        alt={
                            image.alt ||
                            content.alt ||
                            "Imagem"
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                        style={{
                            objectFit: style.objectFit,
                        }}
                    />
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            minHeight: "220px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: theme.spacing.sm,
                            color: theme.colors.gray,
                        }}
                    >
                        <span style={{ fontSize: 42 }}>
                            🖼️
                        </span>

                        <span>
                            {content.alt || "Imagem"}
                        </span>
                    </div>
                )}
            </div>

            {content.caption && (
                <figcaption
                    style={{
                        marginTop: theme.spacing.sm,
                        color: theme.colors.gray,
                        fontSize:
                            theme.typography.fontSize.small,
                        textAlign: "center",
                    }}
                >
                    {content.caption}
                </figcaption>
            )}
        </figure>
    );
}