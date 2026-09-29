"use client";

import {
    ControlContainer,
    ControlHeader,
    ToggleButton,
    ToggleIndicator,
} from "./styles";

export default function ShadowControl({
    value = false,
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Sombra</strong>
            </ControlHeader>

            <ToggleButton
                type="button"
                $active={value}
                onClick={() => onChange(!value)}
                aria-pressed={value}
            >
                <ToggleIndicator $active={value} />

                <span>
                    {value ? "Ativada" : "Desativada"}
                </span>
            </ToggleButton>
        </ControlContainer>
    );
}