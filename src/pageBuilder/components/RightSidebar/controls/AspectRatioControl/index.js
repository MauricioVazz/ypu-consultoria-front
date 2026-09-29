"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const aspectRatioOptions = [
    { value: "AUTO", label: "Automática" },
    { value: "SQUARE", label: "Quadrada (1:1)" },
    { value: "PORTRAIT", label: "Retrato (3:4)" },
    { value: "LANDSCAPE", label: "Paisagem (4:3)" },
    { value: "WIDESCREEN", label: "Widescreen (16:9)" },
];

export default function AspectRatioControl({
    value = "LANDSCAPE",
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Proporção</strong>
            </ControlHeader>

            <Select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                {aspectRatioOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </ControlContainer>
    );
}