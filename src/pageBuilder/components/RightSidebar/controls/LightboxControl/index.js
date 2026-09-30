"use client";

import {
    ControlContainer,
    ControlHeader,
    SwitchContainer,
    HiddenCheckbox,
    Switch,
    SwitchLabel,
} from "./styles";

export default function LightboxControl({
    value = true,
    onChange,
}) {
    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Ampliar imagem</strong>
            </ControlHeader>

            <SwitchContainer>
                <HiddenCheckbox
                    type="checkbox"
                    checked={value}
                    onChange={event =>
                        onChange(event.target.checked)
                    }
                />

                <Switch $checked={value}>
                    <span />
                </Switch>

                <SwitchLabel>
                    {value ? "Ativado" : "Desativado"}
                </SwitchLabel>
            </SwitchContainer>
        </ControlContainer>
    );
}