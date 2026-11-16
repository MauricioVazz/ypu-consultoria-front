"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import useStructureSave from "@/pageBuilder/hooks/useStructureSave";
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
    const moveBlockLocal = useBuilderStore(
        state => state.moveBlockLocal
    );

    const originalSectionNumbers = useBuilderStore(
        state => state.originalSectionNumbers
    );

    const {
        hasChanges,
        isSaving,
        saveError,
        saveStructure,
        resetChanges,
    } = useStructureSave();

    const {
        dropTarget,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDragEnd,
    } = useSectionDragAndDrop(sections, moveBlockLocal);

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
                            onClick={resetChanges}
                            disabled={isSaving}
                        >
                            Cancelar
                        </CancelOrderButton>
                    )}

                    <SectionOrderButton
                        $disabled={!hasChanges || isSaving}
                        disabled={!hasChanges || isSaving}
                        onClick={saveStructure}
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
                            originalNumber={
                                originalSectionNumbers[section.publicId]
                            }
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
