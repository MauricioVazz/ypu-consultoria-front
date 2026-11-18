
"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import { reorderBlocks } from "@/pageBuilder/services/projectService";
import { serializeLayout } from "@/pageBuilder/utils/serializeLayout";

export default function useSaveAll() {
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState("");

    const dirtyBlocks = useBuilderStore(
        state => state.dirtyBlocks
    );

    const layout = useBuilderStore(
        state => state.layout
    );

    const saveBlock = useBuilderStore(
        state => state.saveBlock
    );

    const hasStructureChanges = useBuilderStore(
        state => state.hasStructureChanges
    );

    const markStructureSaved = useBuilderStore(
        state => state.markStructureSaved
    );

    const hasChanges =
        dirtyBlocks.length > 0 || hasStructureChanges();

    const handleSaveAll = async () => {
        if (isSaving || !hasChanges) return !hasChanges;

        try {
            setIsSaving(true);
            setSaveError("");

            const operations = dirtyBlocks.map(publicId =>
                saveBlock(publicId)
            );

            if (hasStructureChanges()) {
                operations.push(
                    (async () => {
                        const blocks = serializeLayout(layout);

                        await reorderBlocks(blocks);

                        markStructureSaved();
                    })()
                );
            }

            const results = await Promise.allSettled(operations);

            const failures = results.filter(
                result => result.status === "rejected"
            );

            if (failures.length > 0) {
                throw new Error(
                    `${failures.length} operação(ões) não puderam ser salvas.`
                );
            }

            return true;

        } catch (error) {
            console.error("Erro ao salvar tudo:", error);

            setSaveError(
                error.message || "Não foi possível salvar tudo."
            );

            return false;
            
        } finally {
            setIsSaving(false);
        }
    };

    return {
        hasChanges,
        isSaving,
        saveError,
        handleSaveAll,
    };
}
