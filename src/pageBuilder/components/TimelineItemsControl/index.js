
"use client";

import { useState } from "react";

import TimelineItemsModal from "./TimelineItemsModal";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
    ItemsSummary,
    ItemsCount,
    ManageButton,
} from "./styles";

export default function TimelineItemsControl({
    value = [],
    onChange,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const itemsCount = value.length;

    const handleConfirm = items => {
        onChange(items);
        setIsModalOpen(false);
    };

    return (
        <>
            <ControlContainer>
                <ControlHeader>
                    <ControlLabel>
                        Etapas da timeline
                    </ControlLabel>
                </ControlHeader>

                <ItemsSummary>
                    <ItemsCount>
                        {itemsCount}{" "}
                        {itemsCount === 1 ? "etapa" : "etapas"}
                    </ItemsCount>

                    <ManageButton
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Gerenciar etapas
                    </ManageButton>
                </ItemsSummary>
            </ControlContainer>

            {isModalOpen && (
                <TimelineItemsModal
                    items={value}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleConfirm}
                />
            )}
        </>
    );
}
