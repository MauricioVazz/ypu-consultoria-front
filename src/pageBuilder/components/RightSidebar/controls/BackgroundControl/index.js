"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const defaultOptions = [
    {
        value: "DEFAULT",
        label: "Padrão",
    },
    {
        value: "PRIMARY",
        label: "Primária",
    },
    {
        value: "GREEN",
        label: "Verde",
    },
    {
        value: "DARK",
        label: "Escuro",
    },
];

export default function BackgroundControl({
    value = "DEFAULT",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Fundo</strong>
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