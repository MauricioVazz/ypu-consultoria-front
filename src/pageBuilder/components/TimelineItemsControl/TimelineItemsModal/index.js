
"use client";

import { useState } from "react";

import {
    Overlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalContent,
    ItemsList,
    PreviewItem,
    TimelineIndicator,
    PreviewContent,
    PreviewDate,
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
} from "./styles.js";

import EditTimelineItemModal from "./EditTimelineItemModal";

function TimelinePreviewItem({
    item,
    index,
    isLast,
    openMenu,
    onToggleMenu,
    onEdit,
    onDelete,
}) {
    return (
        <PreviewItem>
            <TimelineIndicator $isLast={isLast}>
                <span />
            </TimelineIndicator>

            <PreviewContent>
                <CardMenu>
                    <CardMenuButton
                        type="button"
                        onClick={() => onToggleMenu(index)}
                        aria-label="Opções da etapa"
                        aria-expanded={openMenu === index}
                    >
                        ⋮
                    </CardMenuButton>

                    {openMenu === index && (
                        <CardMenuDropdown>
                            <CardMenuItem
                                type="button"
                                onClick={() => onEdit(index)}
                            >
                                Editar
                            </CardMenuItem>

                            <CardMenuItem
                                type="button"
                                $danger
                                onClick={() => onDelete(index)}
                            >
                                Excluir
                            </CardMenuItem>
                        </CardMenuDropdown>
                    )}
                </CardMenu>

                {item.date && (
                    <PreviewDate>
                        {item.date}
                    </PreviewDate>
                )}

                <PreviewTitle>
                    {item.title || "Sem título"}
                </PreviewTitle>

                <PreviewDescription>
                    {item.description || "Sem descrição"}
                </PreviewDescription>
            </PreviewContent>
        </PreviewItem>
    );
}

export default function TimelineItemsModal({
    items = [],
    onClose,
    onConfirm,
}) {
    const [draftItems, setDraftItems] = useState(() => [...items]);

    const [openMenu, setOpenMenu] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddItem = () => {
        const newItem = {
            title: "Nova etapa",
            description: "",
            date: "",
        };

        setDraftItems(currentItems => [
            ...currentItems,
            newItem,
        ]);
    };

    const handleDeleteItem = index => {
        setDraftItems(currentItems =>
            currentItems.filter((_, itemIndex) => itemIndex !== index)
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
                index === editingIndex ? updatedItem : item
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
                onMouseDown={event => event.stopPropagation()}
            >
                <ModalHeader>
                    <ModalTitle>
                        Gerenciar etapas
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
                    >
                        + Adicionar etapa
                    </AddButton>

                    {draftItems.length === 0 ? (
                        <EmptyMessage>
                            Nenhuma etapa adicionada.
                        </EmptyMessage>
                    ) : (
                        <ItemsList>
                            {draftItems.map((item, index) => (
                                <TimelinePreviewItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    isLast={index === draftItems.length - 1}
                                    openMenu={openMenu}
                                    onToggleMenu={handleToggleMenu}
                                    onEdit={handleEditItem}
                                    onDelete={handleDeleteItem}
                                />
                            ))}
                        </ItemsList>
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
                <EditTimelineItemModal
                    key={editingIndex}
                    item={draftItems[editingIndex]}
                    onClose={() => setEditingIndex(null)}
                    onConfirm={handleConfirmEdit}
                />
            )}
        </Overlay>
    );
}
