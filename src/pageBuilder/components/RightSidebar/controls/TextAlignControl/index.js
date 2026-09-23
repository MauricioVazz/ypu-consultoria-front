"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const options = [
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

export default function TextAlignControl({
    value = "LEFT",
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Alinhamento</strong>
            </ControlHeader>

            <Select
                value={value}
                onChange={e =>
                    onChange(e.target.value)
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