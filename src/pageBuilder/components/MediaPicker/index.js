"use client";

import { useEffect, useState } from "react";

import { getLibraryImages } from "@/services/media";

import {
    Overlay,
    Modal,
    Header,
    Title,
    CloseButton,
    Content,
    ImageGrid,
    ImageOption,
    ImagePreview,
    SelectedLabel,
    LoadingMessage,
    EmptyMessage,
    ErrorMessage,
    Footer,
    CancelButton,
    SelectButton,
} from "./styles";

export default function MediaPicker({
    open = false,
    onClose,
    onConfirm,
    libraryPublicId,
    multiple = false,
    initialSelectedImagePublicId,
    initialSelectedImagePublicIds = [],
}) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [selectedImagePublicId, setSelectedImagePublicId] =
        useState(initialSelectedImagePublicId);

    const [selectedImagePublicIds, setSelectedImagePublicIds] =
        useState(initialSelectedImagePublicIds);

    useEffect(() => {
        if (!open || !libraryPublicId) {
            return;
        }

        async function loadImages() {
            setLoading(true);
            setError(false);

            try {
                const libraryImages =
                    await getLibraryImages(libraryPublicId);

                setImages(libraryImages);
            } catch (error) {
                console.error(
                    "Erro ao carregar imagens da biblioteca:",
                    error
                );

                setImages([]);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadImages();
    }, [open, libraryPublicId]);

    const handleSelectImage = publicId => {
        if (!multiple) {
            setSelectedImagePublicId(publicId);
            return;
        }

        setSelectedImagePublicIds(current => {
            if (current.includes(publicId)) {
                return current.filter(
                    id => id !== publicId
                );
            }

            return [
                ...current,
                publicId,
            ];
        });
    };

    const handleConfirm = () => {
        if (multiple) {
            onConfirm?.(selectedImagePublicIds);
            return;
        }

        onConfirm?.(selectedImagePublicId);
    };

    if (!open) {
        return null;
    }

    return (
        <Overlay>
            <Modal>
                <Header>
                    <Title>
                        Biblioteca de mídia
                    </Title>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar biblioteca de mídia"
                    >
                        ×
                    </CloseButton>
                </Header>

                <Content>
                    {loading && (
                        <LoadingMessage>
                            Carregando imagens...
                        </LoadingMessage>
                    )}

                    {!loading && error && (
                        <ErrorMessage>
                            Não foi possível carregar
                            as imagens da biblioteca.
                        </ErrorMessage>
                    )}

                    {!loading &&
                        !error &&
                        images.length === 0 && (
                            <EmptyMessage>
                                Nenhuma imagem disponível
                                na biblioteca.
                            </EmptyMessage>
                        )}

                    {!loading &&
                        !error &&
                        images.length > 0 && (
                            <ImageGrid>
                                {images.map(image => {
                                    const selected = multiple
                                        ? selectedImagePublicIds.includes(
                                            image.publicId
                                        )
                                        : image.publicId === selectedImagePublicId;

                                    const selectedIndex = multiple
                                        ? selectedImagePublicIds.indexOf(
                                            image.publicId
                                        )
                                        : -1;

                                    return (
                                        <ImageOption
                                            key={image.publicId}
                                            type="button"
                                            $selected={selected}
                                            onClick={() =>
                                                handleSelectImage(
                                                    image.publicId
                                                )
                                            }
                                            aria-label={
                                                image.alt ||
                                                "Imagem da biblioteca"
                                            }
                                        >
                                            <ImagePreview
                                                src={image.url}
                                                alt={
                                                    image.alt ||
                                                    "Imagem da biblioteca"
                                                }
                                            />

                                            {selected && (
                                                <SelectedLabel>
                                                    {multiple
                                                        ? `#${selectedIndex + 1}`
                                                        : "Selecionada"}
                                                </SelectedLabel>
                                            )}
                                        </ImageOption>
                                    );
                                })}
                            </ImageGrid>
                        )}
                </Content>

                <Footer>
                    <CancelButton
                        type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </CancelButton>

                    <SelectButton
                        type="button"
                        onClick={handleConfirm}
                        disabled={
                            multiple
                                ? selectedImagePublicIds.length === 0
                                : !selectedImagePublicId
                        }
                    >
                        Selecionar
                    </SelectButton>
                </Footer>
            </Modal>
        </Overlay>
    );

}
