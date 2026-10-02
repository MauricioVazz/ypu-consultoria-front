"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import useBlockSave from "@/pageBuilder/hooks/useBlockSave";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

import { theme } from "@/styles/theme";

import {
    resolveButtonStyle,
    resolveButtonSize,
    resolveRadius,
    resolveShadow,
} from "@/renderer/theme/resolveToken";

import {
    TextControl,
    OptionButtonsControl,
} from "../../controls";

import SaveButton from "@/pageBuilder/components/SaveButton";

import {
    FiAlignLeft,
    FiAlignCenter,
    FiAlignRight,
} from "react-icons/fi";

export default function CTAPanel({ block }) {
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

    const handleChange = changes => {
        updateBlock(
            block.publicId,
            changes
        );
    };

    const renderButtonPreview = option => {
        const style = resolveButtonStyle(
            option.value
        );

        return (
            <span
                style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "11px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    ...style,
                }}
            >
                Saiba mais
            </span>
        );
    };

    const renderSizePreview = option => {
        const sizes = {
            SM: {
                padding: "4px 8px",
                fontSize: "9px",
            },
            MD: {
                padding: "5px 10px",
                fontSize: "10px",
            },
            LG: {
                padding: "6px 12px",
                fontSize: "11px",
            },
        };

        const style = sizes[option.value];

        return (
            <span
                style={{
                    display: "inline-block",
                    background: theme.colors.primary,
                    color: theme.colors.white,
                    borderRadius: theme.radius.sm,
                    fontWeight:
                        theme.typography.fontWeight.semibold,
                    whiteSpace: "nowrap",
                    lineHeight: 1.2,
                    ...style,
                }}
            >
                Saiba mais
            </span>
        );
    };

    const renderAlignPreview = option => {
        const icons = {
            LEFT: <FiAlignLeft size={20} />,
            CENTER: <FiAlignCenter size={20} />,
            RIGHT: <FiAlignRight size={20} />,
        };

        return icons[option.value];
    };

    const renderRadiusPreview = option => {
        return (
            <span
                style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    background: theme.colors.primary,
                    color: theme.colors.white,
                    borderRadius:
                        resolveRadius(option.value),
                    fontSize: "10px",
                    fontWeight:
                        theme.typography.fontWeight.semibold,
                    whiteSpace: "nowrap",
                }}
            >
                Saiba mais
            </span>
        );
    };

    return (
        <PanelContainer>
            <PanelHeader>
                <PanelTitle>
                    CTA
                </PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />
            </PanelHeader>

            <TextControl
                label="Texto"
                value={content.text ?? ""}
                onChange={value =>
                    handleChange({
                        text: value,
                    })
                }
            />

            <TextControl
                label="Link"
                value={content.href ?? ""}
                onChange={value =>
                    handleChange({
                        href: value,
                    })
                }
            />

            <OptionButtonsControl
                label="Variante"
                value={content.variant ?? "PRIMARY"}
                options={[
                    { value: "PRIMARY", label: "Primário" },
                    { value: "SECONDARY", label: "Secundário" },
                    { value: "OUTLINE", label: "Contorno" },
                    { value: "GHOST", label: "Ghost" },
                ]}
                renderPreview={renderButtonPreview}
                onChange={value =>
                    handleChange({
                        variant: value,
                    })
                }
            />

            <OptionButtonsControl
                label="Tamanho"
                value={content.size ?? "MD"}
                options={[
                    {
                        value: "SM",
                        label: "Pequeno",
                    },
                    {
                        value: "MD",
                        label: "Médio",
                    },
                    {
                        value: "LG",
                        label: "Grande",
                    },
                ]}
                renderPreview={renderSizePreview}
                compact
                onChange={value =>
                    handleChange({
                        size: value,
                    })
                }
            />

            <OptionButtonsControl
                label="Alinhamento"
                value={content.align ?? "LEFT"}
                options={[
                    {
                        value: "LEFT",
                        label: "Esquerda",
                    },
                    {
                        value: "CENTER",
                        label: "Centro",
                    },
                    {
                        value: "RIGHT",
                        label: "Direita",
                    },
                ]}
                renderPreview={renderAlignPreview}
                compact
                onChange={value =>
                    handleChange({
                        align: value,
                    })
                }
            />

            <OptionButtonsControl
                label="Arredondamento"
                value={content.radius ?? "MD"}
                options={[
                    {
                        value: "NONE",
                        label: "Nenhum",
                    },
                    {
                        value: "SM",
                        label: "Pequeno",
                    },
                    {
                        value: "MD",
                        label: "Médio",
                    },
                    {
                        value: "LG",
                        label: "Grande",
                    },
                ]}
                renderPreview={renderRadiusPreview}
                compact
                onChange={value =>
                    handleChange({
                        radius: value,
                    })
                }
            />

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
