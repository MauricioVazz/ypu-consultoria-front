
"use client";

import { useEffect, useState } from "react";
import { getLibraryImages } from "@/services/media";

import {
    PickerContainer,
    ImagesGrid,
    ImageOption,
    ImagePreview,
    EmptyMessage,
    StatusMessage,
} from "./styles";

export default function ProjectCoverPicker({
    libraryPublicId,
    selectedImagePublicId,
    onSelect,
}) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!libraryPublicId) return;

        async function loadImages() {
            try {
                setLoading(true);
                setError("");

                const libraryImages = await getLibraryImages(libraryPublicId);

                setImages(libraryImages);
            } catch (error) {
                console.error("Erro ao carregar imagens:", error);
                setError("Não foi possível carregar as imagens.");
            } finally {
                setLoading(false);
            }
        }

        loadImages();
    }, [libraryPublicId]);

    if (!libraryPublicId) {
        return (
            <PickerContainer>
                <StatusMessage>
                    Crie o projeto para acessar sua biblioteca.
                </StatusMessage>
            </PickerContainer>
        );
    }

    return (
        <PickerContainer>
            {loading && <StatusMessage>Carregando imagens...</StatusMessage>}

            {error && <StatusMessage>{error}</StatusMessage>}

            {!loading && !error && images.length === 0 && (
                <EmptyMessage>
                    Nenhuma imagem encontrada na biblioteca.
                </EmptyMessage>
            )}

            {!loading && images.length > 0 && (
                <ImagesGrid>
                    {images.map((image) => (
                        <ImageOption
                            key={image.publicId}
                            type="button"
                            $selected={selectedImagePublicId === image.publicId}
                            onClick={() => onSelect?.(image)}
                        >
                            <ImagePreview
                                src={image.url}
                                alt={image.alt || "Imagem da biblioteca"}
                            />
                        </ImageOption>
                    ))}
                </ImagesGrid>
            )}
        </PickerContainer>
    );
}
