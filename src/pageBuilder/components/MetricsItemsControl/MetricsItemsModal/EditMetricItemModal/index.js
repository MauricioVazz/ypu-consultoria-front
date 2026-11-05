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
    HelperText,
    ModalFooter,
    CancelButton,
    ConfirmButton,
} from "./styles";

export default function EditMetricItemModal({
    item,
    onClose,
    onConfirm,
}) {
    const [label, setLabel] = useState(
        item.label ?? ""
    );

    const [value, setValue] = useState(
        item.value ?? ""
    );

    const [suffix, setSuffix] = useState(
        item.suffix ?? ""
    );

    const handleSubmit = event => {
        event.preventDefault();

        onConfirm({
            ...item,
            label: label.trim(),
            value: value.trim(),
            suffix: suffix.trim(),
        });
    };

    return (
        <Overlay onMouseDown={onClose}>
            <ModalContainer
                onMouseDown={event =>
                    event.stopPropagation()
                }
            >
                <ModalHeader>
                    <ModalTitle>
                        Editar indicador
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
                            <Label htmlFor="metric-value">
                                Valor
                            </Label>

                            <Input
                                id="metric-value"
                                value={value}
                                onChange={event =>
                                    setValue(
                                        event.target.value
                                    )
                                }
                                placeholder="Ex.: 150"
                                maxLength={30}
                                required
                                autoFocus
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="metric-label">
                                Rótulo
                            </Label>

                            <Input
                                id="metric-label"
                                value={label}
                                onChange={event =>
                                    setLabel(
                                        event.target.value
                                    )
                                }
                                placeholder="Ex.: Projetos realizados"
                                maxLength={100}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="metric-suffix">
                                Sufixo
                            </Label>

                            <Input
                                id="metric-suffix"
                                value={suffix}
                                onChange={event =>
                                    setSuffix(
                                        event.target.value
                                    )
                                }
                                placeholder="Ex.: +, %, km"
                                maxLength={15}
                            />

                            <HelperText>
                                Campo opcional. Use para
                                complementar o valor com
                                unidades ou símbolos.
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