"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import { reorderBlocks } from "@/pageBuilder/services/projectService";
import { serializeLayout } from "@/pageBuilder/utils/serializeLayout";

export default function useStructureSave() {
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState("");

    const layout = useBuilderStore(state => state.layout);

    const hasStructureChanges = useBuilderStore(
        state => state.hasStructureChanges
    );

    const markStructureSaved = useBuilderStore(
        state => state.markStructureSaved
    );

    const resetStructure = useBuilderStore(
        state => state.resetStructure
    );

    const hasChanges = hasStructureChanges;

    const saveStructure = async () => {
        if (isSaving || !hasChanges()) return;

        try {
            setIsSaving(true);
            setSaveError("");

            const blocks = serializeLayout(layout);

            await reorderBlocks(blocks);

            markStructureSaved();

        } catch (error) {
            console.error("Erro ao salvar estrutura:", error);

            setSaveError(
                error.message || "Não foi possível salvar a estrutura."
            );
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        resetStructure();
        setSaveError("");
    };

    return {
        hasChanges: hasChanges(),
        isSaving,
        saveError,
        saveStructure,
        resetChanges,
    };
}
