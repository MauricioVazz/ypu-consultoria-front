"use client";

import { useEffect, useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import useBlockSave from "@/pageBuilder/hooks/useBlockSave";

import SaveButton from "@/pageBuilder/components/SaveButton";
import MediaPicker from "@/pageBuilder/components/MediaPicker";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    ErrorMessage,
    Section,
    SectionTitle,
    Divider,
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

import {
    getLibraryByProject,
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

export default function ImagePanel({ block }) {

    const updateBlock = useBuilderStore(
        state => state.updateBlock
    );

    const projectPublicId = useBuilderStore(
        state => state.projectPublicId
    );

    const {
        isDirty,
        saving,
        saveError,
        handleSave,
    } = useBlockSave(block.publicId);

    const [isMediaPickerOpen, setIsMediaPickerOpen] =
        useState(false);

    const [libraryPublicId, setLibraryPublicId] =
        useState(null);

    const { content } = block;

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

        async function loadLibrary() {

            try {

                const library =
                    await getLibraryByProject(
                        projectPublicId
                    );

                setLibraryPublicId(
                    library.publicId
                );

            } catch (error) {

                console.error(
                    "Erro ao carregar biblioteca:",
                    error
                );

            }

        }

        loadLibrary();

    }, [projectPublicId]);

    return (
        <PanelContainer>

            <PanelHeader>

                <PanelTitle>
                    Imagem
                </PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />

            </PanelHeader>

            {saveError && (
                <ErrorMessage>
                    Não foi possível salvar
                    as alterações.
                </ErrorMessage>
            )}

            <Section>

                <SectionTitle>
                    Selecionar imagem
                </SectionTitle>

                <button
                    type="button"
                    onClick={() =>
                        setIsMediaPickerOpen(true)
                    }
                >
                    Escolher imagem
                </button>

                {isMediaPickerOpen && (
                    <MediaPicker
                        open={true}
                        onClose={() =>
                            setIsMediaPickerOpen(false)
                        }
                        onConfirm={handleConfirm}
                        libraryPublicId={
                            libraryPublicId
                        }
                        initialSelectedImagePublicId={
                            content.imagePublicId
                        }
                    />
                )}

                <ImageUpload
                    libraryPublicId={
                        libraryPublicId
                    }
                    multiple={false}
                    onUploadComplete={
                        uploadedImages => {

                            if (
                                !uploadedImages.length
                            ) {
                                return;
                            }

                            const uploadedImage =
                                uploadedImages[0];

                            handleChange(
                                "imagePublicId",
                                uploadedImage.publicId
                            );
                        }
                    }
                />

            </Section>

            <Divider />

            <Section>

                <SectionTitle>
                    Informações
                </SectionTitle>

                <TextControl
                    label="Texto alternativo"
                    value={
                        content.alt ?? ""
                    }
                    onChange={value =>
                        handleChange(
                            "alt",
                            value
                        )
                    }
                />

                <TextControl
                    label="Legenda"
                    value={
                        content.caption ?? ""
                    }
                    onChange={value =>
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
                    onChange={value =>
                        handleChange(
                            "width",
                            value
                        )
                    }
                />

                <AspectRatioControl
                    value={
                        content.aspectRatio
                    }
                    onChange={value =>
                        handleChange(
                            "aspectRatio",
                            value
                        )
                    }
                />

            </Section>

            <Section>

                <SectionTitle>
                    Aparência
                </SectionTitle>

                <RadiusControl
                    value={content.radius}
                    onChange={value =>
                        handleChange(
                            "radius",
                            value
                        )
                    }
                />

                <ShadowControl
                    value={content.shadow}
                    onChange={value =>
                        handleChange(
                            "shadow",
                            value
                        )
                    }
                />

                <ObjectFitControl
                    value={content.objectFit}
                    onChange={value =>
                        handleChange(
                            "objectFit",
                            value
                        )
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