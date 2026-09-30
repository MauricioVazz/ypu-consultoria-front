"use client";

import { useEffect, useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import {
    getLibraryByProject,
} from "@/services/media";

import MediaPicker from "@/pageBuilder/components/MediaPicker";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    SaveButton,
    Section,
    SectionTitle,
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

import {
    ImageUpload,
    LayoutControl,
    ColumnsControl,
    GapControl,
    LightboxControl,
} from "../../controls";

export default function GalleryPanel({ block }) {
    const dirtyBlocks = useBuilderStore(
        state => state.dirtyBlocks
    );

    const saveBlock = useBuilderStore(
        state => state.saveBlock
    );

    const projectPublicId = useBuilderStore(
        state => state.projectPublicId
    );

    const updateBlock = useBuilderStore(
        state => state.updateBlock
    );

    const isDirty = dirtyBlocks.includes(
        block.publicId
    );

    const [isMediaPickerOpen, setIsMediaPickerOpen] =
        useState(false);

    const [libraryPublicId, setLibraryPublicId] =
        useState(null);

    const handleSave = async () => {
        try {
            await saveBlock(block.publicId);
        } catch (error) {
            console.error(error);
        }
    };

    const handleConfirm = imagePublicIds => {
        updateBlock(
            block.publicId,
            {
                imagePublicIds,
            }
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

    const imagePublicIds =
        block.content?.imagePublicIds ?? [];

    return (
        <PanelContainer>
            <PanelHeader>
                <PanelTitle>
                    Galeria
                </PanelTitle>

                <SaveButton
                    type="button"
                    disabled={!isDirty}
                    onClick={handleSave}
                >
                    Salvar
                </SaveButton>
            </PanelHeader>

            <Section>
                <SectionTitle>
                    Selecionar imagens
                </SectionTitle>

                <ImageUpload
                    libraryPublicId={libraryPublicId}
                    multiple={true}
                    onUploadComplete={uploadedImages => {
                        console.log(
                            "Imagens enviadas:",
                            uploadedImages
                        );
                    }}
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
                        libraryPublicId={libraryPublicId}
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
                    value={block.content?.layout ?? "GRID"}
                    onChange={value =>
                        updateBlock(block.publicId, {
                            layout: value,
                        })
                    }
                />

                <ColumnsControl
                    value={block.content?.columns ?? 3}
                    disabled={
                        block.content?.layout === "SLIDER"
                    }
                    onChange={value =>
                        updateBlock(block.publicId, {
                            columns: value,
                        })
                    }
                />

                <GapControl
                    value={block.content?.gap ?? "MD"}
                    onChange={value =>
                        updateBlock(block.publicId, {
                            gap: value,
                        })
                    }
                />

                <LightboxControl
                    value={block.content?.lightbox ?? true}
                    onChange={value =>
                        updateBlock(block.publicId, {
                            lightbox: value,
                        })
                    }
                />
            </Section>

            <DebugSection>
                <DebugTitle>
                    Debug
                </DebugTitle>

                <DebugContent>
                    <pre>
                        {JSON.stringify(
                            block.content,
                            null,
                            2
                        )}
                    </pre>
                </DebugContent>
            </DebugSection>
        </PanelContainer>
    );

}
