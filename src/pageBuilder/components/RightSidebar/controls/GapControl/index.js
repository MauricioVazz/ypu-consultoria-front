"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const defaultOptions = [
    { value: "XS", label: "Extra pequeno", },
    { value: "SM", label: "Pequeno" },
    { value: "MD", label: "Médio" },
    { value: "LG", label: "Grande" },
];

export default function GapControl({
    value = "MD",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Espaçamento</strong>
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