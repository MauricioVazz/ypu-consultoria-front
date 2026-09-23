"use client";

import {
    ControlContainer,
    FieldLabel,
    Select,
} from "./styles";

export default function TypographyControl({
    label = "Tamanho",
    value,
    options = [],
    onChange,
}) {
    return (
        <ControlContainer>
            <FieldLabel>
                {label}
            </FieldLabel>

            <Select
                value={value ?? ""}
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