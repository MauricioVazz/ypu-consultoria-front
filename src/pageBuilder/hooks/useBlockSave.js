"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function useBlockSave(publicId) {

    const saveBlock = useBuilderStore(
        state => state.saveBlock
    );

    const dirtyBlocks = useBuilderStore(
        state => state.dirtyBlocks
    );

    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState(false);

    const isDirty = dirtyBlocks.includes(publicId);

    const handleSave = async () => {

        if (!isDirty || saving) {
            return;
        }

        setSaving(true);
        setSaveError(false);

        try {

            await saveBlock(publicId);

        } catch (error) {

            console.error(
                "Erro ao salvar bloco:",
                error
            );

            setSaveError(true);

        } finally {

            setSaving(false);

        }
    };

    return {
        isDirty,
        saving,
        saveError,
        handleSave,
    };
}