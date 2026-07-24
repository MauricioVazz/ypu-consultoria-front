"use client";

const PLACEHOLDERS = Array.from({ length: 6 }).map((_, i) => ({
    publicId: null,
    url: null,
    alt: `Placeholder ${i + 1}`,
    placeholder: true,
}));

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { theme } from "@/styles/theme";
import { getImagesByPublicIds } from "@/services/media";

export default function Gallery({ block }) {

    const { content } = block;

    const imagePublicIds = useMemo(
        () => content.imagePublicIds ?? [],
        [content.imagePublicIds]
    );

    const [images, setImages] = useState(() => PLACEHOLDERS);

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);

    useEffect(() => {

        if (!imagePublicIds.length) {
            return;
        }

        async function loadImages() {

            try {

                const images = await getImagesByPublicIds(imagePublicIds);

                if (images.length) {
                    setImages(images);
                } else {
                    setImages(PLACEHOLDERS);
                }

            } catch (err) {
                console.error(err);
                setImages(PLACEHOLDERS);

            }

        }

        loadImages();

    }, [imagePublicIds]);

    const prev = () =>
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

    const next = () =>
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    const get = (i) => images[(i + images.length) % images.length];

    const prevImg = get(index - 1);
    const current = get(index);
    const nextImg = get(index + 1);

    const getLabel = (i) => {
        return `IMG ${((i + images.length) % images.length) + 1}`;
    };

    const renderImg = (img, height = 240, label = "") => {

        if (img.placeholder || !img.url) {
            return (
                <div
                    style={{
                        width: "100%",
                        height,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: theme.colors.surface,
                        color: theme.colors.gray,
                        fontSize: 16,
                        fontWeight: 600,
                    }}
                >
                    {label}
                </div>
            );
        }

        return (
            <div style={{ position: "relative", width: "100%", height }}>
                <Image
                    src={img.url}
                    alt={img.alt || "Imagem da galeria"}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />

                {/* LABEL DE DEBUG */}
                <div
                    style={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        padding: "4px 8px",
                        fontSize: 12,
                        borderRadius: 6,
                    }}
                >
                    {label}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* CARROSSEL COM PREVIEW */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: theme.spacing.md,
                }}
            >

                {/* PREV (preview menor) */}
                <div
                    onClick={prev}
                    style={{
                        width: 180,
                        opacity: 0.5,
                        cursor: "pointer",
                    }}
                >
                    <Card style={{ padding: 0, overflow: "hidden" }}>
                        {renderImg(prevImg, 120, getLabel(index - 1))}
                    </Card>
                </div>

                {/* CURRENT (principal) */}
                <div
                    onClick={() =>
                        !current.placeholder && setSelected(current)
                    }
                    style={{
                        width: 500,
                        cursor: "zoom-in",
                    }}
                >
                    <Card style={{ padding: 0, overflow: "hidden" }}>
                        {renderImg(current, 320, getLabel(index))}
                    </Card>
                </div>

                {/* NEXT (preview menor) */}
                <div
                    onClick={next}
                    style={{
                        width: 180,
                        opacity: 0.5,
                        cursor: "pointer",
                    }}
                >
                    <Card style={{ padding: 0, overflow: "hidden" }}>
                        {renderImg(nextImg, 120, getLabel(index + 1))}
                    </Card>
                </div>

            </div>

            {/* LIGHTBOX */}
            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        cursor: "zoom-out",
                        padding: 20,
                    }}
                >
                    <Image
                        src={selected.url}
                        alt={selected.alt || "Imagem da galeria"}
                        width={1200}
                        height={800}
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                            borderRadius: theme.radius.md,
                        }}
                    />
                </div>
            )}
        </>
    );
}