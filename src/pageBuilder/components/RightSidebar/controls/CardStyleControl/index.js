"use client";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
    Select,
} from "./styles";

const defaultOptions = [
    {
        value: "NONE",
        label: "Nenhum",
    },
    {
        value: "OUTLINE",
        label: "Contorno",
    },
    {
        value: "SURFACE",
        label: "Superfície",
    },
];

export default function CardStyleControl({
    value = "SURFACE",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <ControlLabel>
                    Estilo do card
                </ControlLabel>
            </ControlHeader>

            <Select
                value={value}
                onChange={event =>
                    onChange(event.target.value)
                }
            >
                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </Select>
        </ControlContainer>
    );
}