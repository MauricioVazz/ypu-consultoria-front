"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const layoutOptions = [
    { value: "GRID", label: "Grade" },
    { value: "MASONRY", label: "Masonry" },
    { value: "SLIDER", label: "Carrossel" },
];

export default function LayoutControl({
    value = "GRID",
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Layout</strong>
            </ControlHeader>

            <Select
                value={value}
                onChange={event =>
                    onChange(event.target.value)
                }
            >
                {layoutOptions.map(option => (
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