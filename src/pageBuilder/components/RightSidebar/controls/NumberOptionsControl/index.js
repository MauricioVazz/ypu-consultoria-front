"use client";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
    Select,
} from "./styles";

export default function NumberOptionsControl({
    label,
    value,
    options = [],
    onChange,
}) {
    return (
        <ControlContainer>

            <ControlHeader>
                <ControlLabel>
                    {label}
                </ControlLabel>
            </ControlHeader>

            <Select
                value={value}
                onChange={event =>
                    onChange(
                        Number(event.target.value)
                    )
                }
            >
                {options.map(option => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </Select>

        </ControlContainer>
    );
}