"use client";

import {
    ControlContainer,
    ControlHeader,
    OptionsContainer,
    OptionButton,
} from "./styles";

const widthOptions = [
    {
        value: "AUTO",
        label: "Automática",
    },
    {
        value: "FULL",
        label: "Largura total",
    },
];

export default function WidthControl({
    value = "FULL",
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Largura</strong>
            </ControlHeader>

            <OptionsContainer>
                {widthOptions.map(option => (
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