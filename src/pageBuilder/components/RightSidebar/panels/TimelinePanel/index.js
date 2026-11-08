
"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import useBlockSave from "@/pageBuilder/hooks/useBlockSave";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
} from "../FeaturesPanel/styles";

import {
    GapControl,
    OptionButtonsControl,
    CardStyleControl,
    RadiusControl,
} from "../../controls";

import TimelineItemsControl from "@/pageBuilder/components/TimelineItemsControl";
import SaveButton from "@/pageBuilder/components/SaveButton";

export default function TimelinePanel({ block }) {
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
                <PanelTitle>Timeline</PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />
            </PanelHeader>

            <GapControl
                label="Espaçamento"
                value={content.gap ?? "LG"}
                options={[
                    { value: "SM", label: "Pequeno" },
                    { value: "MD", label: "Médio" },
                    { value: "LG", label: "Grande" },
                    { value: "XL", label: "Extra grande" },
                ]}
                onChange={value =>
                    handleChange({ gap: value })
                }
            />

            <OptionButtonsControl
                label="Alinhamento"
                value={content.align ?? "LEFT"}
                options={[
                    { value: "LEFT", label: "Esquerda" },
                    { value: "CENTER", label: "Centro" },
                ]}
                onChange={value =>
                    handleChange({ align: value })
                }
            />

            <CardStyleControl
                value={content.cardStyle ?? "SURFACE"}
                onChange={value =>
                    handleChange({ cardStyle: value })
                }
            />

            <RadiusControl
                value={content.radius ?? "MD"}
                onChange={value =>
                    handleChange({ radius: value })
                }
            />

            <OptionButtonsControl
                label="Exibir datas"
                value={content.showDate ?? true}
                options={[
                    { value: true, label: "Sim" },
                    { value: false, label: "Não" },
                ]}
                onChange={value =>
                    handleChange({ showDate: value })
                }
            />

            <TimelineItemsControl
                value={content.items ?? []}
                onChange={items =>
                    handleChange({ items })
                }
            />
        </PanelContainer>
    );
}
