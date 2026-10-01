"use client";

import {
    ControlContainer,
    ControlHeader,
    ValueContainer,
    Value,
    ResetButton,
    Slider,
} from "./styles";

const DEFAULT_OPACITY = 50;

export default function OverlayOpacityControl({
    value = DEFAULT_OPACITY,
    onChange,
}) {
    const handleReset = () => {
        onChange(DEFAULT_OPACITY);
    };

    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Opacidade</strong>

                <ValueContainer>
                    <Value>
                        {value}%
                    </Value>

                    {value !== DEFAULT_OPACITY && (
                        <ResetButton
                            type="button"
                            onClick={handleReset}
                        >
                            Resetar
                        </ResetButton>
                    )}
                </ValueContainer>
            </ControlHeader>

            <Slider
                type="range"
                min="0"
                max="100"
                step="1"
                value={value}
                onChange={event =>
                    onChange(
                        Number(
                            event.target.value
                        )
                    )
                }
            />
        </ControlContainer>
    );
}