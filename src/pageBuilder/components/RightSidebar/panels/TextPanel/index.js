"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import useBlockSave from "@/pageBuilder/hooks/useBlockSave";

import SaveButton from "@/pageBuilder/components/SaveButton";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    ErrorMessage,
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

import {
    PaddingControl,
    TextControl,
    TypographyControl,
    FontWeightControl,
    TextAlignControl,
    ColorControl,
} from "../../controls";

export default function TextPanel({ block }) {

    const updateBlock = useBuilderStore(
        state => state.updateBlock
    );

    const {
        isDirty,
        saving,
        saveError,
        handleSave,
    } = useBlockSave(block.publicId);

    const { content } = block;

    const handleChange = (field, value) => {
        updateBlock(
            block.publicId,
            {
                [field]: value,
            }
        );
    };

    const handlePaddingChange = changes => {
        updateBlock(
            block.publicId,
            changes
        );
    };

    return (
        <PanelContainer>

            <PanelHeader>

                <PanelTitle>
                    Texto
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

            <TextControl
                label="Conteúdo"
                value={
                    content.content ?? ""
                }
                onChange={value =>
                    handleChange(
                        "content",
                        value
                    )
                }
            />

            <TypographyControl
                label="Tamanho"
                value={
                    content.size ?? "P"
                }
                options={[
                    {
                        value: "SMALL",
                        label: "Pequeno",
                    },
                    {
                        value: "P",
                        label: "Normal",
                    },
                    {
                        value: "LARGE",
                        label: "Grande",
                    },
                ]}
                onChange={value =>
                    handleChange(
                        "size",
                        value
                    )
                }
            />

            <FontWeightControl
                value={
                    content.fontWeight ??
                    "REGULAR"
                }
                onChange={value =>
                    handleChange(
                        "fontWeight",
                        value
                    )
                }
            />

            <ColorControl
                value={
                    content.color ??
                    "GRAY"
                }
                onChange={value =>
                    handleChange(
                        "color",
                        value
                    )
                }
            />

            <TextAlignControl
                value={
                    content.align ??
                    "LEFT"
                }
                onChange={value =>
                    handleChange(
                        "align",
                        value
                    )
                }
            />

            <PaddingControl
                value={content}
                onChange={
                    handlePaddingChange
                }
            />

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