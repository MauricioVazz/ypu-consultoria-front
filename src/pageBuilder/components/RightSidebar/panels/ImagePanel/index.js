"use client";

import { useEffect, useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    SaveButton,
    ErrorMessage,
    Section,
    SectionTitle,
    ImageGrid,
    ImageOption,
    ImagePreview,
    EmptyMessage,
    SelectedLabel,
    LoadingMessage,
    Divider,
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

import {
    getLibraryByProject,
    getLibraryImages,
} from "@/services/media";

import {
    TextControl,
    WidthControl,
    RadiusControl,
    ShadowControl,
    ObjectFitControl,
    AspectRatioControl,
    ImageUpload,
} from "../../controls";

import MediaPicker from "@/pageBuilder/components/MediaPicker";

export default function ImagePanel({ block }) {
    const updateBlock = useBuilderStore(
        (state) => state.updateBlock
    );

    const saveBlock = useBuilderStore(
        (state) => state.saveBlock
    );

    const dirtyBlocks = useBuilderStore(
        (state) => state.dirtyBlocks
    );

    const projectPublicId = useBuilderStore(
        state => state.projectPublicId
    );

    const isDirty = dirtyBlocks.includes(
        block.publicId
    );

    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState(false);

    const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);

    const [images, setImages] = useState([]);
    const [loadingImages, setLoadingImages] = useState(true);
    const [imageError, setImageError] = useState(false);
    const [libraryPublicId, setLibraryPublicId] = useState(null);

    const { content } = block;

    const handleSave = async () => {
        setSaving(true);
        setSaveError(false);

        try {
            await saveBlock(block.publicId);
        } catch (error) {
            setSaveError(true);
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (field, value) => {
        updateBlock(
            block.publicId,
            {
                [field]: value,
            }
        );
    };

    const handleConfirm = publicId => {
        if (!publicId) {
            return;
        }

        handleChange(
            "imagePublicId",
            publicId
        );

        setIsMediaPickerOpen(false);
    };

    useEffect(() => {

        if (!projectPublicId) {
            return;
        }

        async function loadImages() {

            setLoadingImages(true);
            setImageError(false);

            try {

                const library =
                    await getLibraryByProject(
                        projectPublicId
                    );

                setLibraryPublicId(library.publicId);

                const libraryImages =
                    await getLibraryImages(
                        library.publicId
                    );

                setImages(libraryImages);

            } catch (error) {

                console.error(
                    "Erro ao carregar imagens:",
                    error
                );

                setImageError(true);
                setImages([]);

            } finally {

                setLoadingImages(false);

            }

        }

        loadImages();

    }, [projectPublicId]);

    return (
        <PanelContainer>
            <PanelHeader>
                <PanelTitle>
                    Imagem
                </PanelTitle>

                <SaveButton
                    type="button"
                    disabled={!isDirty || saving}
                    onClick={handleSave}
                >
                    {saving
                        ? "Salvando..."
                        : saveError
                            ? "Tentar novamente"
                            : "Salvar"
                    }
                </SaveButton>
            </PanelHeader>

            {saveError && (
                <ErrorMessage>
                    Não foi possível salvar as alterações.
                </ErrorMessage>
            )}

            <Section>
                <SectionTitle>
                    Selecionar imagem
                </SectionTitle>

                <button
                    type="button"
                    onClick={() => setIsMediaPickerOpen(true)}
                >
                    Escolher imagem
                </button>

                {isMediaPickerOpen && (
                    <MediaPicker
                        open={true}
                        onClose={() => setIsMediaPickerOpen(false)}
                        onConfirm={handleConfirm}
                        libraryPublicId={libraryPublicId}
                        initialSelectedImagePublicId={content.imagePublicId}
                    />
                )}

                <ImageUpload
                    libraryPublicId={libraryPublicId}
                    multiple={false}
                    onUploadComplete={uploadedImages => {
                        if (!uploadedImages.length) {
                            return;
                        }

                        const uploadedImage = uploadedImages[0];

                        setImages(currentImages => [
                            ...currentImages,
                            uploadedImage,
                        ]);

                        handleChange(
                            "imagePublicId",
                            uploadedImage.publicId
                        );
                    }}
                />

                {loadingImages && (
                    <LoadingMessage>
                        Carregando imagens...
                    </LoadingMessage>
                )}

                {!loadingImages &&
                    imageError && (
                        <ErrorMessage>
                            Não foi possível carregar
                            as imagens da biblioteca.
                        </ErrorMessage>
                    )}

                {!loadingImages &&
                    !imageError &&
                    !projectPublicId && (
                        <EmptyMessage>
                            Biblioteca do projeto não disponível.
                        </EmptyMessage>
                    )}

                {!loadingImages &&
                    !imageError &&
                    projectPublicId &&
                    images.length === 0 && (
                        <EmptyMessage>
                            Nenhuma imagem disponível
                            na biblioteca deste projeto.
                        </EmptyMessage>
                    )}

                {!loadingImages &&
                    !imageError &&
                    images.length > 0 && (
                        <ImageGrid>
                            {images.map((image) => {
                                const selected =
                                    content.imagePublicId ===
                                    image.publicId;

                                return (
                                    <ImageOption
                                        key={image.publicId}
                                        type="button"
                                        $selected={selected}
                                        onClick={() =>
                                            handleChange(
                                                "imagePublicId",
                                                image.publicId
                                            )
                                        }
                                        aria-label={
                                            image.alt ||
                                            "Selecionar imagem"
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
                                                Selecionada
                                            </SelectedLabel>
                                        )}
                                    </ImageOption>
                                );
                            })}
                        </ImageGrid>
                    )}

            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    Informações
                </SectionTitle>

                <TextControl
                    label="Texto alternativo"
                    value={content.alt ?? ""}
                    onChange={(value) =>
                        handleChange(
                            "alt",
                            value
                        )
                    }
                />

                <TextControl
                    label="Legenda"
                    value={content.caption ?? ""}
                    onChange={(value) =>
                        handleChange(
                            "caption",
                            value
                        )
                    }
                />
            </Section>

            <Section>
                <SectionTitle>
                    Tamanho
                </SectionTitle>


                <WidthControl
                    value={content.width}
                    onChange={(value) =>
                        handleChange("width", value)
                    }
                />

                <AspectRatioControl
                    value={content.aspectRatio}
                    onChange={value => handleChange("aspectRatio", value)}
                />

            </Section>

            <Section>
                <SectionTitle>
                    Aparência
                </SectionTitle>

                <RadiusControl
                    value={content.radius}
                    onChange={(value) =>
                        handleChange("radius", value)
                    }
                />

                <ShadowControl
                    value={content.shadow}
                    onChange={(value) =>
                        handleChange("shadow", value)
                    }
                />

                <ObjectFitControl
                    value={content.objectFit}
                    onChange={(value) =>
                        handleChange("objectFit", value)
                    }
                />
            </Section>

            <Divider />

            <DebugSection>
                <DebugTitle>
                    Dados do bloco
                </DebugTitle>

                <DebugContent>
                    {JSON.stringify(
                        content,
                        null,
                        2
                    )}
                </DebugContent>
            </DebugSection>
        </PanelContainer>
    );
}