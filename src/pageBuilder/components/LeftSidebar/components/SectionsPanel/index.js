
"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import { reorderBlocks } from "@/pageBuilder/services/projectService";

import useSectionDragAndDrop from "../../hooks/useSectionDragAndDrop";
import SectionItem from "./SectionItem";

import {
    SectionsHeader,
    SectionsHeaderTitle,
    SectionsCount,
    SectionName,
    SectionOrderActions,
    SectionOrderButton,
    CancelOrderButton,
    SectionsList,
    SectionOrderError,
} from "./styles";

import { EmptyMessage } from "../../styles";

export default function SectionsPanel({
    sections,
    selectedBlock,
    onOpenSection,
}) {
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState("");

    const moveBlockLocal = useBuilderStore(
        state => state.moveBlockLocal
    );

    const hasSectionOrderChanges = useBuilderStore(
        state => state.hasSectionOrderChanges
    );

    const resetSectionOrder = useBuilderStore(
        state => state.resetSectionOrder
    );

    const markSectionOrderSaved = useBuilderStore(
        state => state.markSectionOrderSaved
    );

    const originalSectionNumbers = useBuilderStore(
        state => state.originalSectionNumbers
    );

    const {
        dropTarget,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDragEnd,
    } = useSectionDragAndDrop(sections, moveBlockLocal);

    const hasChanges = hasSectionOrderChanges();

    const handleSaveOrder = async () => {
        if (!hasChanges || isSaving) return;

        try {
            setIsSaving(true);
            setSaveError("");

            const blocks = sections.map((section, index) => ({
                publicId: section.publicId,
                position: index,
            }));

            await reorderBlocks(blocks);

            markSectionOrderSaved();

        } catch (error) {
            console.error("Erro ao salvar ordem das seções:", error);

            setSaveError(
                error.message || "Não foi possível salvar a ordem das seções."
            );
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <>
            <SectionsHeader>
                <SectionsHeaderTitle>
                    <SectionName>Seções da página</SectionName>

                    <SectionsCount>
                        {sections.length}
                    </SectionsCount>
                </SectionsHeaderTitle>

                <SectionOrderActions>
                    {hasChanges && (
                        <CancelOrderButton
                            onClick={resetSectionOrder}
                            disabled={isSaving}
                        >
                            Cancelar
                        </CancelOrderButton>
                    )}

                    <SectionOrderButton
                        $disabled={!hasChanges || isSaving}
                        disabled={!hasChanges || isSaving}
                        onClick={handleSaveOrder}
                    >
                        {isSaving ? "Salvando..." : "Salvar"}
                    </SectionOrderButton>
                </SectionOrderActions>
            </SectionsHeader>

            {saveError && (
                <SectionOrderError>
                    {saveError}
                </SectionOrderError>
            )}

            <SectionsList>
                {sections.length > 0 ? (
                    sections.map((section, index) => (
                        <SectionItem
                            key={section.publicId}
                            section={section}
                            index={index}
                            originalNumber={originalSectionNumbers[section.publicId]}
                            isActive={
                                selectedBlock?.publicId === section.publicId
                            }
                            onClick={() => onOpenSection(section)}
                            dropPosition={
                                dropTarget?.publicId === section.publicId
                                    ? dropTarget.position
                                    : null
                            }
                            onDragStart={event =>
                                handleDragStart(section.publicId, event)
                            }
                            onDragOver={event =>
                                handleDragOver(section.publicId, event)
                            }
                            onDrop={event =>
                                handleDrop(section.publicId, event)
                            }
                            onDragEnd={handleDragEnd}
                        />
                    ))
                ) : (
                    <EmptyMessage>
                        Nenhuma seção adicionada à página.
                    </EmptyMessage>
                )}
            </SectionsList>
        </>
    );
}
