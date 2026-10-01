"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const defaultOptions = [
    { value: "AUTO", label: "Automática" },
    { value: "SM", label: "Pequena" },
    { value: "MD", label: "Média" },
    { value: "LG", label: "Grande" },
    { value: "FULL", label: "Tela inteira" },
];

export default function MinHeightControl({
    value = "AUTO",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Altura mínima</strong>
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