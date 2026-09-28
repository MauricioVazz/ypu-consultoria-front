"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    SaveButton,
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

    const saveBlock = useBuilderStore(
        state => state.saveBlock
    );

    const dirtyBlocks = useBuilderStore(
        state => state.dirtyBlocks
    );

    const isDirty = dirtyBlocks.includes(
        block.publicId
    );

    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState(false);

    const { content } = block;

    const handleSave = async () => {

        setSaving(true);
        setSaveError(false);

        try {

            await saveBlock(
                block.publicId
            );

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