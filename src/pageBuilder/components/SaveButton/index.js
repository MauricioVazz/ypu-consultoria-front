"use client";

import {
    SaveButtonContainer,
} from "./styles";

export default function SaveButton({
    disabled = false,
    saving = false,
    saveError = false,
    onClick,
}) {

    return (
        <SaveButtonContainer
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {saving
                ? "Salvando..."
                : saveError
                    ? "Tentar novamente"
                    : "Salvar"
            }
        </SaveButtonContainer>
    );
}