"use client";

import {
    ControlContainer,
    ControlHeader,
    OptionsContainer,
    OptionButton,
} from "./styles";

const radiusOptions = [
    {
        value: "NONE",
        label: "Nenhum",
    },
    {
        value: "SM",
        label: "Pequeno",
    },
    {
        value: "MD",
        label: "Médio",
    },
    {
        value: "LG",
        label: "Grande",
    },
];

export default function RadiusControl({
    value = "MD",
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Arredondamento</strong>
            </ControlHeader>

            <OptionsContainer>
                {radiusOptions.map(option => (
                    <OptionButton
                        key={option.value}
                        type="button"
                        $active={option.value === value}
                        onClick={() =>
                            onChange(option.value)
                        }
                    >
                        {option.label}
                    </OptionButton>
                ))}
            </OptionsContainer>
        </ControlContainer>
    );
}