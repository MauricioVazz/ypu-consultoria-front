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
    ModalFooter,
    CancelButton,
    ConfirmButton,
    HelperText,
    IconsLink,
} from "./styles";

export default function EditFeatureItemModal({
    item,
    onClose,
    onConfirm,
}) {
    const [title, setTitle] = useState(
        item.title ?? ""
    );

    const [description, setDescription] = useState(
        item.description ?? ""
    );

    const [icon, setIcon] = useState(
        item.icon ?? ""
    );

    const handleSubmit = event => {
        event.preventDefault();

        const normalizedIcon = icon
            .trim()
            .replace(/^<\s*/, "")
            .replace(/\s*\/?>\s*$/, "");

        onConfirm({
            ...item,
            title: title.trim(),
            description: description.trim(),
            icon: normalizedIcon,
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
                        Editar item
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
                            <Label htmlFor="feature-title">
                                Título
                            </Label>

                            <Input
                                id="feature-title"
                                value={title}
                                onChange={event =>
                                    setTitle(
                                        event.target.value
                                    )
                                }
                                placeholder="Ex.: Licenciamento ambiental"
                                maxLength={100}
                                required
                                autoFocus
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="feature-description">
                                Descrição
                            </Label>

                            <Textarea
                                id="feature-description"
                                value={description}
                                onChange={event =>
                                    setDescription(
                                        event.target.value
                                    )
                                }
                                placeholder="Descreva este serviço ou diferencial..."
                                rows={4}
                                maxLength={500}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="feature-icon">
                                Ícone
                            </Label>

                            <Input
                                id="feature-icon"
                                value={icon}
                                onChange={event =>
                                    setIcon(
                                        event.target.value
                                    )
                                }
                                placeholder="Ex.: FaLeaf ou <FaLeaf />"
                                maxLength={100}
                            />

                            <HelperText>
                                Você pode informar o nome
                                do componente ou copiar o
                                componente diretamente do
                                React Icons.
                            </HelperText>

                            <IconsLink
                                href="https://react-icons.github.io/react-icons/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pesquisar ícones no React Icons ↗
                            </IconsLink>
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