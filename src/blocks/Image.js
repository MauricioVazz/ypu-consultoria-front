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

    const [image, setImage] = useState(null);

    useEffect(() => {

        if (!imagePublicId) {
            return;
        }

        async function loadImage() {

            try {

                const images =
                    await getImagesByPublicIds([imagePublicId]);

                setImage(images[0] ?? null);

            } catch (err) {

                console.error(err);

            }

        }

        loadImage();

    }, [imagePublicId]);

    return (

        <figure
            style={{
                margin: 0,
                width: style.width || "100%",
            }}
        >

            <div
                style={{
                    position: "relative",

                    overflow: "hidden",

                    width: "100%",

                    aspectRatio: style.aspectRatio || "16 / 9",

                    borderRadius: style.borderRadius,

                    boxShadow: style.boxShadow,

                    background: theme.colors.surface,
                }}
            >

                {image?.url ? (

                    <NextImage
                        src={image.url}
                        alt={image.alt || content.alt || "Imagem"}
                        fill
                        sizes="100vw"
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
                        fontSize: theme.typography.fontSize.small,
                        textAlign: "center",
                    }}
                >
                    {content.caption}
                </figcaption>

            )}

        </figure>

    );

}