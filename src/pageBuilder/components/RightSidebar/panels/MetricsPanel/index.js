"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import useBlockSave from "@/pageBuilder/hooks/useBlockSave";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
} from "../FeaturesPanel/styles";

import {
    NumberOptionsControl,
    PaddingControl,
    GapControl,
    OptionButtonsControl,
} from "../../controls";

import MetricsItemsControl from "@/pageBuilder/components/MetricsItemsControl";
import SaveButton from "@/pageBuilder/components/SaveButton";

export default function MetricsPanel({ block }) {
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
        updateBlock(block.publicId, changes);
    };

    return (
        <PanelContainer>
            <PanelHeader>
                <PanelTitle>Metrics</PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />
            </PanelHeader>

            <NumberOptionsControl
                label="Colunas"
                value={content.columns ?? 4}
                options={[1, 2, 3, 4]}
                onChange={value =>
                    handleChange({
                        columns: value,
                    })
                }
            />

            <PaddingControl
                value={block.content}
                onChange={changes =>
                    handleChange(changes)
                }
            />

            <GapControl
                label="Espaçamento"
                value={content.gap ?? "MD"}
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
                    {
                        value: "XL",
                        label: "Extra grande",
                    },
                ]}
                onChange={value =>
                    handleChange({
                        gap: value,
                    })
                }
            />

            <OptionButtonsControl
                label="Alinhamento"
                value={content.align ?? "CENTER"}
                options={[
                    {
                        value: "LEFT",
                        label: "Esquerda",
                    },
                    {
                        value: "CENTER",
                        label: "Centro",
                    },
                ]}
                onChange={value =>
                    handleChange({
                        align: value,
                    })
                }
            />

            <MetricsItemsControl
                value={content.items ?? []}
                onChange={items =>
                    handleChange({
                        items,
                    })
                }
            />
        </PanelContainer>
    );
}