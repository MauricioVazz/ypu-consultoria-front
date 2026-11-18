"use client";

import { useState } from "react";

import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalEyebrow,
    ModalTitle,
    ModalDescription,
    WarningMessage,
    FormGroup,
    Label,
    Keyword,
    Input,
    ErrorMessage,
    ModalFooter,
    CancelButton,
    ConfirmButton,
} from "./styles";

export default function ConfirmActionModal({
    open,
    onClose,
    onConfirm,
    title,
    description,
    keyword,
    confirmLabel = "Confirmar",
    danger = false,
    loading = false,
}) {
    const [typedKeyword, setTypedKeyword] = useState("");

    if (!open) return null;

    const isKeywordValid = typedKeyword === keyword;

    async function handleSubmit(event) {
        event.preventDefault();

        if (!isKeywordValid || loading) return;

        await onConfirm();
    }

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                    <ModalEyebrow>
                        Confirmação de segurança
                    </ModalEyebrow>

                    <ModalTitle>{title}</ModalTitle>

                    <ModalDescription>
                        {description}
                    </ModalDescription>
                </ModalHeader>

                <WarningMessage>
                    Para continuar, digite a palavra-chave exatamente
                    como apresentada abaixo.
                </WarningMessage>

                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="confirmation-keyword">
                            Digite <Keyword>{keyword}</Keyword> para confirmar
                        </Label>

                        <Input
                            id="confirmation-keyword"
                            type="text"
                            value={typedKeyword}
                            onChange={event =>
                                setTypedKeyword(event.target.value)
                            }
                            placeholder="Digite a palavra-chave"
                            autoComplete="off"
                            autoFocus
                            disabled={loading}
                        />

                        {typedKeyword.length > 0 && !isKeywordValid && (
                            <ErrorMessage>
                                A palavra-chave não corresponde.
                            </ErrorMessage>
                        )}
                    </FormGroup>

                    <ModalFooter>
                        <CancelButton
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                        >
                            Cancelar
                        </CancelButton>

                        <ConfirmButton
                            type="submit"
                            $danger={danger}
                            disabled={!isKeywordValid || loading}
                        >
                            {loading ? "Processando..." : confirmLabel}
                        </ConfirmButton>
                    </ModalFooter>
                </form>
            </ModalContainer>
        </ModalOverlay>
    );
}
