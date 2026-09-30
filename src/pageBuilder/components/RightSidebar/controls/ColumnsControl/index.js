"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const columnOptions = [
    { value: 1, label: "1 coluna" },
    { value: 2, label: "2 colunas" },
    { value: 3, label: "3 colunas" },
    { value: 4, label: "4 colunas" },
    { value: 5, label: "5 colunas" },
    { value: 6, label: "6 colunas" },
];

export default function ColumnsControl({
    value = 3,
    onChange,
    disabled = false,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Colunas</strong>
            </ControlHeader>

            <Select
                value={value}
                disabled={disabled}
                onChange={event =>
                    onChange(
                        Number(event.target.value)
                    )
                }
            >
                {columnOptions.map(option => (
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