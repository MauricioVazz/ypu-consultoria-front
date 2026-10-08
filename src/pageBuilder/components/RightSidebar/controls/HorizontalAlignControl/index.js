"use client";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
    Select,
} from "./styles";

const defaultOptions = [
    {
        value: "LEFT",
        label: "Esquerda",
    },
    {
        value: "CENTER",
        label: "Centro",
    },
    {
        value: "RIGHT",
        label: "Direita",
    },
];

export default function HorizontalAlignControl({
    value = "CENTER",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <ControlLabel>
                    Alinhamento horizontal
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