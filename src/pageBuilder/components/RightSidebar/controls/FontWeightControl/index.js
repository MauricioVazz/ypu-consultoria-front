"use client";

import {
    ControlContainer,
    FieldLabel,
    Select,
} from "./styles";

const weightOptions = [
    {
        value: "REGULAR",
        label: "Regular",
    },
    {
        value: "MEDIUM",
        label: "Médio",
    },
    {
        value: "SEMIBOLD",
        label: "Semibold",
    },
    {
        value: "BOLD",
        label: "Bold",
    },
];

export default function FontWeightControl({
    value = "SEMIBOLD",
    onChange,
}) {
    return (
        <ControlContainer>
            <FieldLabel>
                Peso da fonte
            </FieldLabel>

            <Select
                value={value}
                onChange={e =>
                    onChange(e.target.value)
                }
            >
                {weightOptions.map(option => (
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