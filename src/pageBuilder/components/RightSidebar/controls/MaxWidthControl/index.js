"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const defaultOptions = [
    {
        value: "SM",
        label: "Pequeno",
    },
    {
        value: "MD",
        label: "Médio",
    },
    {
        value: "LG",
        label: "Grande",
    },
    {
        value: "XL",
        label: "Extra grande",
    },
    {
        value: "FULL",
        label: "Tela inteira",
    },
];

export default function MaxWidthControl({
    value = "XL",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>
                    Largura máxima
                </strong>
            </ControlHeader>

            <Select
                value={value}
                onChange={event =>
                    onChange(
                        event.target.value
                    )
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