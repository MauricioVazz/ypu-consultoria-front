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

import {
    NumberOptionsControl,
    GapControl,
    HorizontalAlignControl,
    CardStyleControl,
    RadiusControl,
    GeneralPaddingControl,
} from "../../controls";

import FeaturesItemsControl from "@/pageBuilder/components/FeaturesItemsControl";

import SaveButton from "@/pageBuilder/components/SaveButton";

export default function FeaturesPanel({ block }) {

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

    return (
        <PanelContainer>

            <PanelHeader>

                <PanelTitle>
                    Features
                </PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />

            </PanelHeader>

            <NumberOptionsControl
                label="Colunas"
                value={content.columns ?? 3}
                options={[1, 2, 3, 4]}
                onChange={value =>
                    handleChange({
                        columns: value,
                    })
                }
            />

            <GapControl
                value={content.gap ?? "LG"}
                options={[
                    { value: "XS", label: "Muito pequeno" },
                    { value: "SM", label: "Pequeno" },
                    { value: "MD", label: "Médio" },
                    { value: "LG", label: "Grande" },
                    { value: "XL", label: "Extra grande" },
                ]}
                onChange={value =>
                    handleChange({
                        gap: value,
                    })
                }
            />

            <HorizontalAlignControl
                value={content.align ?? "CENTER"}
                onChange={value =>
                    handleChange({
                        align: value,
                    })
                }
            />

            <CardStyleControl
                value={content.cardStyle ?? "SURFACE"}
                onChange={value =>
                    handleChange({
                        cardStyle: value,
                    })
                }
            />

            <RadiusControl
                value={content.radius ?? "MD"}
                onChange={value =>
                    handleChange({
                        radius: value,
                    })
                }
            />

            <GeneralPaddingControl
                value={content.padding ?? "LG"}
                onChange={value =>
                    handleChange({
                        padding: value,
                    })
                }
            />

            <FeaturesItemsControl
                value={content.items}
                onChange={value =>
                    handleChange({ items: value })
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