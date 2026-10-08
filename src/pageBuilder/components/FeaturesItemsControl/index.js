"use client";

import { useState } from "react";

import FeaturesItemsModal from "./FeaturesItemsModal";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
    ItemsSummary,
    ItemsCount,
    ManageButton,
} from "./styles";

export default function FeaturesItemsControl({
    value = [],
    onChange,
}) {
    const [isModalOpen, setIsModalOpen] =
        useState(false);

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
                        Itens
                    </ControlLabel>
                </ControlHeader>

                <ItemsSummary>
                    <ItemsCount>
                        {itemsCount}{" "}
                        {itemsCount === 1
                            ? "item"
                            : "itens"}
                    </ItemsCount>

                    <ManageButton
                        type="button"
                        onClick={() =>
                            setIsModalOpen(true)
                        }
                    >
                        Gerenciar itens
                    </ManageButton>
                </ItemsSummary>
            </ControlContainer>

            {isModalOpen && (
                <FeaturesItemsModal
                    items={value}
                    onClose={() =>
                        setIsModalOpen(false)
                    }
                    onConfirm={handleConfirm}
                />
            )}
        </>
    );
}