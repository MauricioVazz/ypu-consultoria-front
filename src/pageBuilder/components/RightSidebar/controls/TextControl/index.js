"use client";

import {
    ControlContainer,
    FieldLabel,
    Input,
} from "./styles";

export default function TextControl({
    label,
    value = "",
    onChange,
}) {
    return (
        <ControlContainer>
            <FieldLabel>
                {label}
            </FieldLabel>

            <Input
                type="text"
                value={value}
                onChange={e =>
                    onChange(e.target.value)
                }
            />
        </ControlContainer>
    );
}