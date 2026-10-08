"use client";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
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
];

export default function GeneralPaddingControl({
    value = "LG",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <ControlLabel>
                    Padding
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