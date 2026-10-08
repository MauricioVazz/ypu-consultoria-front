"use client";

import { createElement, useState } from "react";

import useResolvedIcon from "@/renderer/hooks/useResolvedIcon";

import {
    Overlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalContent,
    ItemsGrid,
    PreviewCard,
    PreviewIcon,
    PreviewTitle,
    PreviewDescription,
    EmptyMessage,
    ModalFooter,
    CancelButton,
    ConfirmButton,
    AddButton,
    CardMenu,
    CardMenuButton,
    CardMenuDropdown,
    CardMenuItem,
} from "./styles";

import EditFeatureItemModal from "./EditFeatureItemModal";

function FeaturePreviewCard({
    item,
    index,
    openMenu,
    onToggleMenu,
    onEdit,
    onDelete,
}) {
    const Icon = useResolvedIcon(item.icon);

    return (
        <PreviewCard>
            <CardMenu>
                <CardMenuButton
                    type="button"
                    onClick={() =>
                        onToggleMenu(index)
                    }
                    aria-label="Opções do item"
                >
                    ⋮
                </CardMenuButton>

                {openMenu === index && (
                    <CardMenuDropdown>
                        <CardMenuItem
                            type="button"
                            onClick={() =>
                                onEdit(index)
                            }
                        >
                            Editar
                        </CardMenuItem>

                        <CardMenuItem
                            type="button"
                            $danger
                            onClick={() =>
                                onDelete(index)
                            }
                        >
                            Excluir
                        </CardMenuItem>
                    </CardMenuDropdown>
                )}
            </CardMenu>

            {Icon && (
                <PreviewIcon>
                    {createElement(Icon)}
                </PreviewIcon>
            )}

            <PreviewTitle>
                {item.title || "Sem título"}
            </PreviewTitle>

            <PreviewDescription>
                {item.description ||
                    "Sem descrição"}
            </PreviewDescription>
        </PreviewCard>
    );
}

export default function FeaturesItemsModal({
    items = [],
    onClose,
    onConfirm,
}) {
    const [draftItems, setDraftItems] =
        useState(items);

    const [openMenu, setOpenMenu] =
        useState(null);

    const [editingIndex, setEditingIndex] =
        useState(null);

    const handleAddItem = () => {
        if (draftItems.length >= 12) {
            return;
        }

        const newItem = {
            title: "Novo item",
            description: "Descrição do item",
            icon: "",
        };

        setDraftItems([
            ...draftItems,
            newItem,
        ]);
    };

    const handleDeleteItem = index => {
        if (draftItems.length <= 1) {
            return;
        }

        setDraftItems(
            draftItems.filter(
                (_, itemIndex) =>
                    itemIndex !== index
            )
        );

        setOpenMenu(null);
    };

    const handleEditItem = index => {
        setOpenMenu(null);
        setEditingIndex(index);
    };

    const handleConfirmEdit = updatedItem => {
        setDraftItems(currentItems =>
            currentItems.map((item, index) =>
                index === editingIndex
                    ? updatedItem
                    : item
            )
        );

        setEditingIndex(null);
    };

    const handleToggleMenu = index => {
        setOpenMenu(
            openMenu === index
                ? null
                : index
        );
    };

    const handleConfirm = () => {
        onConfirm(draftItems);
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
                        Gerenciar itens
                    </ModalTitle>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        ×
                    </CloseButton>
                </ModalHeader>

                <ModalContent>
                    <AddButton
                        type="button"
                        onClick={handleAddItem}
                        disabled={
                            draftItems.length >= 12
                        }
                    >
                        + Adicionar item
                    </AddButton>

                    {draftItems.length === 0 ? (
                        <EmptyMessage>
                            Nenhum item adicionado.
                        </EmptyMessage>
                    ) : (
                        <ItemsGrid>
                            {draftItems.map(
                                (item, index) => (
                                    <FeaturePreviewCard
                                        key={index}
                                        item={item}
                                        index={index}
                                        openMenu={
                                            openMenu
                                        }
                                        onToggleMenu={
                                            handleToggleMenu
                                        }
                                        onEdit={
                                            handleEditItem
                                        }
                                        onDelete={
                                            handleDeleteItem
                                        }
                                    />
                                )
                            )}
                        </ItemsGrid>
                    )}
                </ModalContent>

                <ModalFooter>
                    <CancelButton
                        type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </CancelButton>

                    <ConfirmButton
                        type="button"
                        onClick={handleConfirm}
                    >
                        Confirmar
                    </ConfirmButton>
                </ModalFooter>
            </ModalContainer>

            {editingIndex !== null && (
                <EditFeatureItemModal
                    key={editingIndex}
                    item={draftItems[editingIndex]}
                    onClose={() =>
                        setEditingIndex(null)
                    }
                    onConfirm={handleConfirmEdit}
                />
            )}
        </Overlay>
    );
}