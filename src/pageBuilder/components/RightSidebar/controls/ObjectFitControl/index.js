"use client";

import {
    ControlContainer,
    ControlHeader,
    Select,
} from "./styles";

const objectFitOptions = [
    { value: "COVER", label: "Preencher" },
    { value: "CONTAIN", label: "Conter" },
    { value: "FILL", label: "Esticar" },
];

export default function ObjectFitControl({
    value = "COVER",
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Ajuste da imagem</strong>
            </ControlHeader>

            <Select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                {objectFitOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </ControlContainer>
    );
}