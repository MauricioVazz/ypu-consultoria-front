"use client";

import { useState } from "react";

import {
    Overlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalContent,
    ItemsGrid,
    PreviewCard,
    PreviewValue,
    PreviewLabel,
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

import EditMetricItemModal from "./EditMetricItemModal";

function MetricPreviewCard({
    item,
    index,
    openMenu,
    onToggleMenu,
    onEdit,
    onDelete,
}) {
    return (
        <PreviewCard>
            <CardMenu>
                <CardMenuButton
                    type="button"
                    onClick={() =>
                        onToggleMenu(index)
                    }
                    aria-label="Opções do indicador"
                    aria-expanded={openMenu === index}
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
                            disabled={false}
                            onClick={() =>
                                onDelete(index)
                            }
                        >
                            Excluir
                        </CardMenuItem>
                    </CardMenuDropdown>
                )}
            </CardMenu>

            <PreviewValue>
                {item.value || "0"}
                {item.suffix || ""}
            </PreviewValue>

            <PreviewLabel>
                {item.label || "Sem rótulo"}
            </PreviewLabel>
        </PreviewCard>
    );
}

export default function MetricsItemsModal({
    items = [],
    onClose,
    onConfirm,
}) {
    const [draftItems, setDraftItems] =
        useState(() => [...items]);

    const [openMenu, setOpenMenu] =
        useState(null);

    const [editingIndex, setEditingIndex] =
        useState(null);

    const handleAddItem = () => {
        if (draftItems.length >= 12) {
            return;
        }

        const newItem = {
            label: "Novo indicador",
            value: "100",
            suffix: "",
        };

        setDraftItems(currentItems => [
            ...currentItems,
            newItem,
        ]);
    };

    const handleDeleteItem = index => {
        if (draftItems.length <= 1) {
            return;
        }

        setDraftItems(currentItems =>
            currentItems.filter(
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
        setOpenMenu(current =>
            current === index ? null : index
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
                        Gerenciar indicadores
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
                        disabled={draftItems.length >= 12}
                    >
                        + Adicionar indicador
                    </AddButton>

                    {draftItems.length === 0 ? (
                        <EmptyMessage>
                            Nenhum indicador adicionado.
                        </EmptyMessage>
                    ) : (
                        <ItemsGrid>
                            {draftItems.map(
                                (item, index) => (
                                    <MetricPreviewCard
                                        key={index}
                                        item={item}
                                        index={index}
                                        openMenu={openMenu}
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
                <EditMetricItemModal
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