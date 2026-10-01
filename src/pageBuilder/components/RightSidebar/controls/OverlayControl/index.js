"use client";

import {
    ControlContainer,
    ControlHeader,
    SwitchContainer,
    Switch,
    SwitchLabel,
} from "./styles";

export default function OverlayControl({
    value = false,
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Sobreposição</strong>
            </ControlHeader>

            <SwitchContainer>
                <Switch
                    type="checkbox"
                    checked={value}
                    onChange={event =>
                        onChange(
                            event.target.checked
                        )
                    }
                />

                <SwitchLabel>
                    Ativar sobreposição
                </SwitchLabel>
            </SwitchContainer>
        </ControlContainer>
    );
}