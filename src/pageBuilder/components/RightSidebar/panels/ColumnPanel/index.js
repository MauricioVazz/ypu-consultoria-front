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
    GapControl,
    PaddingControl, 
    ColumnSpanControl,
} from "../../controls";

export default function ColumnPanel({ block }) {
    const updateBlock = useBuilderStore(
        state => state.updateBlock
    );

    const {
        isDirty,
        saving,
        saveError,
        handleSave,
    } = useBlockSave(block.publicId);

    const { content = {} } = block;

    const handleChange = changes => {
        updateBlock(block.publicId, changes);
    };

    return (
        <PanelContainer>
            <PanelHeader>
                <PanelTitle>Column</PanelTitle>

                <SaveButton
                    disabled={!isDirty || saving}
                    saving={saving}
                    saveError={saveError}
                    onClick={handleSave}
                />
            </PanelHeader>

            {saveError && (
                <ErrorMessage>
                    Não foi possível salvar a Column.
                </ErrorMessage>
            )}

            <SectionTitle>
                Largura da coluna
            </SectionTitle>

            <ColumnSpanControl
                value={{
                    desktop: content.desktop ?? 12,
                    tablet: content.tablet ?? 12,
                    mobile: content.mobile ?? 12,
                }}
                onChange={handleChange}
            />

            <SectionTitle>
                Espaçamento interno
            </SectionTitle>

            <GapControl
                value={content.gap ?? "MD"}
                options={[
                    {
                        value: "NONE",
                        label: "Nenhum",
                    },
                    {
                        value: "XS",
                        label: "Extra pequeno",
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

            <PaddingControl
                value={{
                    paddingTop: content.paddingTop,
                    paddingRight: content.paddingRight,
                    paddingBottom: content.paddingBottom,
                    paddingLeft: content.paddingLeft,
                }}
                options={[
                    { value: "NONE", label: "Nenhum" },
                    { value: "XS", label: "Extra pequeno" },
                    { value: "SM", label: "Pequeno" },
                    { value: "MD", label: "Médio" },
                    { value: "LG", label: "Grande" },
                    { value: "XL", label: "Extra grande" },
                ]}
                onChange={handleChange}
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