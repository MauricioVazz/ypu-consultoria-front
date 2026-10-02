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
        value: "STRETCH",
        label: "Esticar",
    },
];

export default function AlignControl({
    value = "STRETCH",
    onChange,
    options = defaultOptions,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Alinhamento vertical</strong>
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