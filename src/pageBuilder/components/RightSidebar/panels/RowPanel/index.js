"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import useBlockSave from "@/pageBuilder/hooks/useBlockSave";

import SaveButton from "@/pageBuilder/components/SaveButton";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    SectionTitle,
    ErrorMessage,
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

import {
    PaddingControl,
    GapControl,
    AlignControl,
    JustifyControl,
} from "../../controls";

export default function RowPanel({ block }) {
    const updateBlock = useBuilderStore(
        state => state.updateBlock
    );

    const { isDirty, saving, saveError, handleSave } =
        useBlockSave(block.publicId);

    const { content = {} } = block;

    const handleChange = changes => {
        updateBlock(block.publicId, changes);
    };

    return (
        <PanelContainer>
            <PanelHeader>
                <PanelTitle>Row</PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />
            </PanelHeader>

            {saveError && (
                <ErrorMessage>
                    Não foi possível salvar o Row.
                </ErrorMessage>
            )}

            <SectionTitle>Espaçamento interno</SectionTitle>

            <PaddingControl
                value={{
                    paddingTop: content.paddingTop,
                    paddingBottom: content.paddingBottom,
                    paddingLeft: content.paddingLeft,
                    paddingRight: content.paddingRight,
                }}
                options={[
                    { value: "NONE", label: "Nenhum" },
                    { value: "XS", label: "Extra pequeno" },
                    { value: "SM", label: "Pequeno" },
                    { value: "MD", label: "Médio" },
                ]}
                onChange={handleChange}
            />

            <GapControl
                value={content.gap ?? "LG"}
                options={[
                    { value: "NONE", label: "Nenhum" },
                    { value: "XS", label: "Extra pequeno" },
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

            <AlignControl
                value={content.align ?? "STRETCH"}
                onChange={value =>
                    handleChange({
                        align: value,
                    })
                }
            />

            <JustifyControl
                value={content.justify ?? "START"}
                onChange={value =>
                    handleChange({
                        justify: value,
                    })
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