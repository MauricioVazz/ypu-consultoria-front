"use client";

import {
    ControlContainer,
    ControlHeader,
    ControlLabel,
    OptionsGrid,
    OptionButton,
    OptionLabel,
    PreviewContainer,
} from "./styles";

export default function OptionButtonsControl({
    label,
    value,
    options = [],
    onChange,
    renderPreview,
    compact = false,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <ControlLabel>
                    {label}
                </ControlLabel>
            </ControlHeader>

            <OptionsGrid>
                {options.map(option => {
                    const isActive =
                        option.value === value;

                    return (
                        <OptionButton
                            key={option.value}
                            type="button"
                            $active={isActive}
                            $compact={compact}
                            onClick={() =>
                                onChange(option.value)
                            }
                        >
                            <PreviewContainer
                                $compact={compact}
                            >
                                {renderPreview
                                    ? renderPreview(option)
                                    : null}
                            </PreviewContainer>

                            <OptionLabel>
                                {option.label}
                            </OptionLabel>
                        </OptionButton>
                    );
                })}
            </OptionsGrid>
        </ControlContainer>
    );
}