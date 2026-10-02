"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const defaultOptions = [
    {
        value: "START",
        label: "Início",
    },
    {
        value: "CENTER",
        label: "Centro",
    },
    {
        value: "END",
        label: "Fim",
    },
    {
        value: "BETWEEN",
        label: "Espaço entre",
    },
    {
        value: "AROUND",
        label: "Espaço ao redor",
    },
    {
        value: "EVENLY",
        label: "Espaço uniforme",
    },
];

export default function JustifyControl({
    value = "START",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>
                    Distribuição horizontal
                </strong>
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