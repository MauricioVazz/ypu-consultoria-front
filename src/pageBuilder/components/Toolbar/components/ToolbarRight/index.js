
"use client";

import useSaveAll from "@/pageBuilder/hooks/useSaveAll";

import {
    ToolbarButtons,
    PreviewButton,
    SaveButton,
    PublishButton,
} from "./styles";

export default function ToolbarRight() {
    const {
        hasChanges,
        isSaving,
        saveError,
        handleSaveAll,
    } = useSaveAll();

    return (
        <ToolbarButtons>
            <PreviewButton type="button">
                Preview
            </PreviewButton>

            <SaveButton
                type="button"
                disabled={!hasChanges || isSaving}
                onClick={handleSaveAll}
            >
                {isSaving ? "Salvando..." : "Salvar"}
            </SaveButton>

            <PublishButton type="button">
                Publicar
            </PublishButton>

            {saveError && (
                <span role="alert">
                    {saveError}
                </span>
            )}
        </ToolbarButtons>
    );
}
