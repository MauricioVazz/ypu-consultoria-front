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
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

import {
    getLibraryByProject,
} from "@/services/media";

import {
    ImageUpload,
    LayoutControl,
    ColumnsControl,
    GapControl,
    LightboxControl,
} from "../../controls";

export default function GalleryPanel({ block }) {
    const projectPublicId = useBuilderStore(
        state => state.projectPublicId
    );

    const updateBlock = useBuilderStore(
        state => state.updateBlock
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

    const imagePublicIds =
        block.content?.imagePublicIds ?? [];

    const handleChange = (field, value) => {
        updateBlock(
            block.publicId,
            {
                [field]: value,
            }
        );
    };

    const handleConfirm = imagePublicIds => {
        if (!imagePublicIds) {
            return;
        }

        handleChange(
            "imagePublicIds",
            imagePublicIds
        );

        setIsMediaPickerOpen(false);
    };

    const handleUploadComplete = uploadedImages => {
        if (!uploadedImages?.length) {
            return;
        }

        const uploadedPublicIds =
            uploadedImages.map(
                image => image.publicId
            );

        handleChange(
            "imagePublicIds",
            [
                ...imagePublicIds,
                ...uploadedPublicIds,
            ]
        );
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
                    Galeria
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
                    Selecionar imagens
                </SectionTitle>

                <ImageUpload
                    libraryPublicId={
                        libraryPublicId
                    }
                    multiple={true}
                    onUploadComplete={
                        handleUploadComplete
                    }
                />

                <button
                    type="button"
                    onClick={() =>
                        setIsMediaPickerOpen(true)
                    }
                >
                    Escolher imagens
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
                        multiple={true}
                        initialSelectedImagePublicIds={
                            imagePublicIds
                        }
                    />
                )}
            </Section>

            <Section>
                <SectionTitle>
                    Configurações
                </SectionTitle>

                <LayoutControl
                    value={
                        block.content?.layout ??
                        "GRID"
                    }
                    onChange={value =>
                        handleChange(
                            "layout",
                            value
                        )
                    }
                />

                <ColumnsControl
                    value={
                        block.content?.columns ??
                        3
                    }
                    disabled={
                        block.content?.layout ===
                        "SLIDER"
                    }
                    onChange={value =>
                        handleChange(
                            "columns",
                            value
                        )
                    }
                />

                <GapControl
                    value={
                        block.content?.gap ??
                        "MD"
                    }
                    onChange={value =>
                        handleChange(
                            "gap",
                            value
                        )
                    }
                />

                <LightboxControl
                    value={
                        block.content?.lightbox ??
                        true
                    }
                    onChange={value =>
                        handleChange(
                            "lightbox",
                            value
                        )
                    }
                />
            </Section>

            <DebugSection>
                <DebugTitle>
                    Debug
                </DebugTitle>

                <DebugContent>
                    {JSON.stringify(
                        block.content,
                        null,
                        2
                    )}
                </DebugContent>
            </DebugSection>
        </PanelContainer>
    );
}