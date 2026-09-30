"use client";

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import Image from "next/image";

import { theme } from "@/styles/theme";

import {
    resolveSpacing,
    resolveColumns,
} from "@/renderer/theme/resolveToken";

import { getImagesByPublicIds } from "@/services/media";

const PLACEHOLDERS = Array.from(
    { length: 6 },
    (_, index) => ({
        publicId: null,
        url: null,
        alt: `Imagem ${index + 1}`,
        placeholder: true,
        width: 1200,
        height: 800,
    })
);

export default function Gallery({ block }) {
    const { content } = block;

    const imagePublicIds = useMemo(
        () => content.imagePublicIds ?? [],
        [content.imagePublicIds]
    );

    const layout =
        content.layout ?? "GRID";

    const columns = resolveColumns(
        content.columns ?? 3
    );

    const gap = resolveSpacing(
        content.gap ?? "MD"
    );

    const lightbox =
        content.lightbox ?? true;

    const [images, setImages] = useState([]);

    const [index, setIndex] = useState(0);

    const [selected, setSelected] =
        useState(null);

    /*
     * ==========================
     * CARREGAMENTO
     * ==========================
     */

    useEffect(() => {
        if (!imagePublicIds.length) {
            return;
        }

        let cancelled = false;

        async function loadImages() {
            try {
                const loadedImages =
                    await getImagesByPublicIds(
                        imagePublicIds
                    );

                if (cancelled) {
                    return;
                }

                setImages(loadedImages);
            } catch (error) {
                if (cancelled) {
                    return;
                }

                console.error(
                    "Erro ao carregar imagens da galeria:",
                    error
                );

                setImages([]);
            }
        }

        loadImages();

        return () => {
            cancelled = true;
        };
    }, [imagePublicIds]);

    /*
     * ==========================
     * IMAGENS EXIBIDAS
     * ==========================
     */

    const displayImages =
        imagePublicIds.length && images.length
            ? images
            : PLACEHOLDERS;

    /*
     * ==========================
     * ÍNDICE
     * ==========================
     */

    const safeIndex =
        index % displayImages.length;

    /*
     * ==========================
     * NAVEGAÇÃO
     * ==========================
     */

    const prev = () => {
        setIndex(currentIndex =>
            currentIndex === 0
                ? displayImages.length - 1
                : currentIndex - 1
        );
    };

    const next = () => {
        setIndex(currentIndex =>
            currentIndex ===
                displayImages.length - 1
                ? 0
                : currentIndex + 1
        );
    };

    const getImage = position => {
        return displayImages[
            (position + displayImages.length) %
            displayImages.length
        ];
    };

    /*
     * ==========================
     * LIGHTBOX
     * ==========================
     */

    const handleImageClick = image => {
        if (
            !lightbox ||
            image.placeholder ||
            !image.url
        ) {
            return;
        }

        setSelected(image);
    };

    /*
     * ==========================
     * PLACEHOLDER
     * ==========================
     */

    const renderPlaceholder = (
        image,
        aspectRatio = "4 / 3"
    ) => {
        return (
            <div
                style={{
                    width: "100%",
                    aspectRatio,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                        theme.colors.surface,
                    color: theme.colors.gray,
                    fontSize: 14,
                }}
            >
                {image.alt}
            </div>
        );
    };

    /*
     * ==========================
     * GRID IMAGE
     * ==========================
     */

    const renderGridImage = image => {
        if (
            image.placeholder ||
            !image.url
        ) {
            return renderPlaceholder(image);
        }

        return (
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    background:
                        theme.colors.surface,
                }}
            >
                <Image
                    src={image.url}
                    alt={
                        image.alt ||
                        "Imagem da galeria"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                        objectFit: "cover",
                        transition:
                            "transform .5s ease",
                    }}
                />
            </div>
        );
    };

    /*
     * ==========================
     * GRID
     * ==========================
     */

    const renderGrid = () => {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        `repeat(${columns}, minmax(0, 1fr))`,
                    gap,
                    width: "100%",
                }}
            >
                {displayImages.map(
                    (image, imageIndex) => (
                        <button
                            key={
                                image.publicId ??
                                `placeholder-${imageIndex}`
                            }
                            type="button"
                            onClick={() =>
                                handleImageClick(
                                    image
                                )
                            }
                            disabled={
                                image.placeholder ||
                                !lightbox
                            }
                            style={{
                                display: "block",
                                width: "100%",
                                padding: 0,
                                border: "none",
                                borderRadius:
                                    theme.radius.md,
                                overflow: "hidden",
                                background:
                                    "transparent",
                                cursor:
                                    lightbox &&
                                        !image.placeholder
                                        ? "zoom-in"
                                        : "default",
                            }}
                            onMouseEnter={event => {
                                const imageElement =
                                    event.currentTarget.querySelector(
                                        "img"
                                    );

                                if (imageElement) {
                                    imageElement.style.transform =
                                        "scale(1.04)";
                                }
                            }}
                            onMouseLeave={event => {
                                const imageElement =
                                    event.currentTarget.querySelector(
                                        "img"
                                    );

                                if (imageElement) {
                                    imageElement.style.transform =
                                        "scale(1)";
                                }
                            }}
                        >
                            {renderGridImage(image)}
                        </button>
                    )
                )}
            </div>
        );
    };

    /*
     * ==========================
     * MASONRY IMAGE
     * ==========================
     */

    const renderMasonryImage = image => {
        if (
            image.placeholder ||
            !image.url
        ) {
            return renderPlaceholder(
                image,
                "4 / 3"
            );
        }

        const width = image.width || 1200;
        const height = image.height || 800;

        return (
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    background:
                        theme.colors.surface,
                }}
            >
                <Image
                    src={image.url}
                    alt={
                        image.alt ||
                        "Imagem da galeria"
                    }
                    width={width}
                    height={height}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        transition:
                            "transform .5s ease",
                    }}
                />
            </div>
        );
    };

    /*
     * ==========================
     * MASONRY
     * ==========================
     */

    const renderMasonry = () => {
        return (
            <div
                style={{
                    columnCount: columns,
                    columnGap: gap,
                    width: "100%",
                }}
            >
                {displayImages.map(
                    (image, imageIndex) => (
                        <button
                            key={
                                image.publicId ??
                                `placeholder-${imageIndex}`
                            }
                            type="button"
                            onClick={() =>
                                handleImageClick(
                                    image
                                )
                            }
                            disabled={
                                image.placeholder ||
                                !lightbox
                            }
                            style={{
                                display: "block",
                                width: "100%",
                                padding: 0,
                                marginBottom: gap,
                                border: "none",
                                borderRadius:
                                    theme.radius.md,
                                overflow: "hidden",
                                background:
                                    "transparent",
                                breakInside:
                                    "avoid",
                                cursor:
                                    lightbox &&
                                        !image.placeholder
                                        ? "zoom-in"
                                        : "default",
                            }}
                        >
                            {renderMasonryImage(
                                image
                            )}
                        </button>
                    )
                )}
            </div>
        );
    };

    /*
     * ==========================
     * SLIDER
     * ==========================
     */

    const renderSliderImage = (
        image,
        height
    ) => {
        if (
            image.placeholder ||
            !image.url
        ) {
            return renderPlaceholder(
                image,
                "16 / 9"
            );
        }

        return (
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height,
                    overflow: "hidden",
                    background:
                        theme.colors.surface,
                }}
            >
                <Image
                    src={image.url}
                    alt={
                        image.alt ||
                        "Imagem da galeria"
                    }
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
        );
    };

    /*
     * ==========================
     * SLIDER
     * ==========================
     */

    const renderSlider = () => {
        const previousImage =
            getImage(safeIndex - 1);

        const currentImage =
            getImage(safeIndex);

        const nextImage =
            getImage(safeIndex + 1);

        return (
            <div
                style={{
                    width: "100%",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 800,
                        margin: "0 auto",
                    }}
                >
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Imagem anterior"
                        style={{
                            position: "absolute",
                            left: 16,
                            top: "50%",
                            transform:
                                "translateY(-50%)",
                            zIndex: 2,
                            width: 42,
                            height: 42,
                            border: "none",
                            borderRadius: "50%",
                            background:
                                "rgba(0, 0, 0, .45)",
                            color: "#fff",
                            fontSize: 24,
                            cursor: "pointer",
                        }}
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleImageClick(
                                currentImage
                            )
                        }
                        disabled={
                            currentImage.placeholder ||
                            !lightbox
                        }
                        style={{
                            display: "block",
                            width: "100%",
                            padding: 0,
                            border: "none",
                            borderRadius:
                                theme.radius.lg,
                            overflow: "hidden",
                            background:
                                "transparent",
                            cursor:
                                lightbox &&
                                    !currentImage.placeholder
                                    ? "zoom-in"
                                    : "default",
                        }}
                    >
                        {renderSliderImage(
                            currentImage,
                            420
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        aria-label="Próxima imagem"
                        style={{
                            position: "absolute",
                            right: 16,
                            top: "50%",
                            transform:
                                "translateY(-50%)",
                            zIndex: 2,
                            width: 42,
                            height: 42,
                            border: "none",
                            borderRadius: "50%",
                            background:
                                "rgba(0, 0, 0, .45)",
                            color: "#fff",
                            fontSize: 24,
                            cursor: "pointer",
                        }}
                    >
                        ›
                    </button>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent:
                            "center",
                        gap: 8,
                        marginTop: 16,
                    }}
                >
                    {displayImages.map(
                        (image, imageIndex) => (
                            <button
                                key={
                                    image.publicId ??
                                    `dot-${imageIndex}`
                                }
                                type="button"
                                onClick={() =>
                                    setIndex(
                                        imageIndex
                                    )
                                }
                                aria-label={`Ir para imagem ${imageIndex + 1
                                    }`}
                                style={{
                                    width:
                                        imageIndex ===
                                            safeIndex
                                            ? 28
                                            : 8,
                                    height: 8,
                                    padding: 0,
                                    border: "none",
                                    borderRadius:
                                        999,
                                    background:
                                        imageIndex ===
                                            safeIndex
                                            ? theme
                                                .colors
                                                .primary
                                            : theme
                                                .colors
                                                .border,
                                    cursor: "pointer",
                                    transition:
                                        "all .2s ease",
                                }}
                            />
                        )
                    )}
                </div>
            </div>
        );
    };

    /*
     * ==========================
     * LAYOUT
     * ==========================
     */

    const renderLayout = () => {
        switch (layout) {
            case "GRID":
                return renderGrid();

            case "MASONRY":
                return renderMasonry();

            case "SLIDER":
                return renderSlider();

            default:
                return renderGrid();
        }
    };

    /*
     * ==========================
     * RENDER
     * ==========================
     */

    return (
        <>
            {renderLayout()}

            {selected && (
                <div
                    onClick={() =>
                        setSelected(null)
                    }
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        background:
                            "rgba(0, 0, 0, .9)",
                        cursor: "zoom-out",
                    }}
                >
                    <div
                        style={{
                            position:
                                "relative",
                            width: "min(1200px, 92vw)",
                            height: "90vh",
                        }}
                    >
                        <Image
                            src={selected.url}
                            alt={
                                selected.alt ||
                                "Imagem da galeria"
                            }
                            fill
                            sizes="92vw"
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}