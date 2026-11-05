"use client";

import { useState } from "react";

import MetricsItemsModal from "./MetricsItemsModal";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
    ItemsSummary,
    ItemsCount,
    ManageButton,
} from "./styles";

export default function MetricsItemsControl({
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
                        Indicadores
                    </ControlLabel>
                </ControlHeader>

                <ItemsSummary>
                    <ItemsCount>
                        {itemsCount}{" "}
                        {itemsCount === 1
                            ? "indicador"
                            : "indicadores"}
                    </ItemsCount>

                    <ManageButton
                        type="button"
                        onClick={() =>
                            setIsModalOpen(true)
                        }
                    >
                        Gerenciar indicadores
                    </ManageButton>
                </ItemsSummary>
            </ControlContainer>

            {isModalOpen && (
                <MetricsItemsModal
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