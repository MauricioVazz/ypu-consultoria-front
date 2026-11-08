
"use client";

import { useState } from "react";

import {
    Overlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalContent,
    FormGroup,
    Label,
    Input,
    Textarea,
    HelperText,
    ModalFooter,
    CancelButton,
    ConfirmButton,
} from "./styles";

export default function EditTimelineItemModal({
    item,
    onClose,
    onConfirm,
}) {
    const [title, setTitle] = useState(item.title ?? "");
    const [description, setDescription] = useState(
        item.description ?? ""
    );
    const [date, setDate] = useState(item.date ?? "");

    const handleSubmit = event => {
        event.preventDefault();

        onConfirm({
            ...item,
            title: title.trim(),
            description: description.trim(),
            date: date.trim(),
        });
    };

    return (
        <Overlay onMouseDown={onClose}>
            <ModalContainer
                onMouseDown={event => event.stopPropagation()}
            >
                <ModalHeader>
                    <ModalTitle>
                        Editar etapa
                    </ModalTitle>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        ×
                    </CloseButton>
                </ModalHeader>

                <form onSubmit={handleSubmit}>
                    <ModalContent>
                        <FormGroup>
                            <Label htmlFor="timeline-title">
                                Título
                            </Label>

                            <Input
                                id="timeline-title"
                                value={title}
                                onChange={event =>
                                    setTitle(event.target.value)
                                }
                                placeholder="Ex.: Início do projeto"
                                maxLength={100}
                                required
                                autoFocus
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="timeline-description">
                                Descrição
                            </Label>

                            <Textarea
                                id="timeline-description"
                                value={description}
                                onChange={event =>
                                    setDescription(event.target.value)
                                }
                                placeholder="Descreva esta etapa..."
                                maxLength={1000}
                                rows={5}
                                required
                            />

                            <HelperText>
                                Explique brevemente o que aconteceu nesta etapa.
                            </HelperText>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="timeline-date">
                                Data
                            </Label>

                            <Input
                                id="timeline-date"
                                type="text"
                                value={date}
                                onChange={event =>
                                    setDate(event.target.value)
                                }
                                placeholder="Ex.: Janeiro de 2026"
                                maxLength={50}
                            />

                            <HelperText>
                                Campo opcional. Você pode informar uma data,
                                mês ou período.
                            </HelperText>
                        </FormGroup>
                    </ModalContent>

                    <ModalFooter>
                        <CancelButton
                            type="button"
                            onClick={onClose}
                        >
                            Cancelar
                        </CancelButton>

                        <ConfirmButton type="submit">
                            Salvar alterações
                        </ConfirmButton>
                    </ModalFooter>
                </form>
            </ModalContainer>
        </Overlay>
    );
}
