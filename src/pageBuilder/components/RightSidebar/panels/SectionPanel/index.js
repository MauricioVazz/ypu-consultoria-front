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
    VerticalPaddingControl,
    GapControl,
    BackgroundControl,
    OverlayControl,
    OverlayOpacityControl,
    MaxWidthControl,
    MinHeightControl,
} from "../../controls";

import SaveButton from "@/pageBuilder/components/SaveButton";

export default function SectionPanel({ block }) {

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
                    Section
                </PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />

            </PanelHeader>

            <VerticalPaddingControl
                value={{
                    paddingTop:
                        content.paddingTop,

                    paddingBottom:
                        content.paddingBottom,
                }}
                onChange={handleChange}
            />

            <GapControl
                value={content.gap ?? "LG"}
                options={[
                    { value: "NONE", label: "Nenhum" },
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

            <BackgroundControl
                value={content.background ?? "DEFAULT"}
                onChange={value =>
                    handleChange({
                        background: value,
                    })
                }
            />

            <OverlayControl
                value={content.overlay ?? false}
                onChange={value =>
                    handleChange({
                        overlay: value,
                    })
                }
            />

            {content.overlay && (
                <OverlayOpacityControl
                    value={
                        content.overlayOpacity ?? 50
                    }
                    onChange={value =>
                        handleChange({
                            overlayOpacity: value,
                        })
                    }
                />
            )}

            <MaxWidthControl
                value={
                    content.maxWidth ?? "XL"
                }
                onChange={value =>
                    handleChange({
                        maxWidth: value,
                    })
                }
            />

            <MinHeightControl
                value={content.minHeight ?? "AUTO"}
                onChange={value =>
                    handleChange({
                        minHeight: value,
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