"use client";

import { useState } from "react";

import {
    ControlContainer,
    ControlHeader,
    ColorButton,
    ColorPreview,
    ColorLabel,
    OptionsContainer,
    OptionButton,
} from "./styles";

import { theme } from "@/styles/theme";

const colorOptions = [
    {
        value: "DEFAULT",
        label: "Padrão",
        color: theme.colors.text,
    },
    {
        value: "PRIMARY",
        label: "Primária",
        color: theme.colors.primary,
    },
    {
        value: "GREEN",
        label: "Verde",
        color: theme.colors.green,
    },
    {
        value: "WHITE",
        label: "Branca",
        color: theme.colors.white,
    },
];

export default function ColorControl({
    value = "DEFAULT",
    onChange,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedColor =
        colorOptions.find(
            option => option.value === value
        ) ?? colorOptions[0];

    const handleSelect = newValue => {
        onChange(newValue);
        setIsOpen(false);
    };

    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Cor</strong>
            </ControlHeader>

            <ColorButton
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <ColorPreview
                    $color={selectedColor.color}
                />

                <ColorLabel>
                    {selectedColor.label}
                </ColorLabel>

                <span>
                    {isOpen ? "▴" : "▾"}
                </span>
            </ColorButton>

            {isOpen && (
                <OptionsContainer>
                    {colorOptions.map(option => (
                        <OptionButton
                            type="button"
                            key={option.value}
                            $active={
                                option.value === value
                            }
                            onClick={() =>
                                handleSelect(option.value)
                            }
                        >
                            <ColorPreview
                                $color={option.color}
                            />

                            <ColorLabel>
                                {option.label}
                            </ColorLabel>
                        </OptionButton>
                    ))}
                </OptionsContainer>
            )}
        </ControlContainer>
    );
}