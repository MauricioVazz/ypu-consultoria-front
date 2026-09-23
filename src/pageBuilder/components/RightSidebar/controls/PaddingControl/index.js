"use client";

import { useState } from "react";
import {
ControlContainer,
ControlHeader,
ModeSelect,
FieldsContainer,
Field,
FieldLabel,
Select,
} from "./styles";

const spacingOptions = [
{ value: "NONE", label: "Nenhum" },
{ value: "SM", label: "SM" },
{ value: "MD", label: "MD" },
{ value: "LG", label: "LG" },
{ value: "XL", label: "XL" },
];

const modes = [
{ value: "general", label: "Geral" },
{ value: "vertical", label: "Vertical" },
{ value: "horizontal", label: "Horizontal" },
{ value: "sides", label: "Lados" },
];

export default function PaddingControl({ value = {}, onChange }) {
const [mode, setMode] = useState("general");

const handleChange = (field, newValue) => {
    onChange({
        [field]: newValue,
    });
};

const handleModeChange = (newMode) => {
    setMode(newMode);
};

const renderSelect = (label, field) => (
    <Field>
        <FieldLabel>{label}</FieldLabel>

        <Select
            value={value[field] ?? "NONE"}
            onChange={e =>
                handleChange(field, e.target.value)
            }
        >
            {spacingOptions.map(option => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </Select>
    </Field>
);

const handleGeneralChange = value => {
    onChange({
        paddingTop: value,
        paddingRight: value,
        paddingBottom: value,
        paddingLeft: value,
    });
};

const handleVerticalChange = value => {
    onChange({
        paddingTop: value,
        paddingBottom: value,
    });
};

const handleHorizontalChange = value => {
    onChange({
        paddingLeft: value,
        paddingRight: value,
    });
};

return (
    <ControlContainer>
        <ControlHeader>
            <strong>Padding</strong>

            <ModeSelect
                value={mode}
                onChange={e =>
                    handleModeChange(e.target.value)
                }
            >
                {modes.map(item => (
                    <option
                        key={item.value}
                        value={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </ModeSelect>
        </ControlHeader>

        {mode === "general" && (
            <FieldsContainer>
                <Field>
                    <FieldLabel>Todos os lados</FieldLabel>

                    <Select
                        value={value.paddingTop ?? "NONE"}
                        onChange={e =>
                            handleGeneralChange(
                                e.target.value
                            )
                        }
                    >
                        {spacingOptions.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </Select>
                </Field>
            </FieldsContainer>
        )}

        {mode === "vertical" && (
            <FieldsContainer>
                <Field>
                    <FieldLabel>Superior e inferior</FieldLabel>

                    <Select
                        value={value.paddingTop ?? "NONE"}
                        onChange={e =>
                            handleVerticalChange(
                                e.target.value
                            )
                        }
                    >
                        {spacingOptions.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </Select>
                </Field>
            </FieldsContainer>
        )}

        {mode === "horizontal" && (
            <FieldsContainer>
                <Field>
                    <FieldLabel>Esquerda e direita</FieldLabel>

                    <Select
                        value={value.paddingLeft ?? "NONE"}
                        onChange={e =>
                            handleHorizontalChange(
                                e.target.value
                            )
                        }
                    >
                        {spacingOptions.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </Select>
                </Field>
            </FieldsContainer>
        )}

        {mode === "sides" && (
            <FieldsContainer>
                {renderSelect(
                    "Superior",
                    "paddingTop"
                )}

                {renderSelect(
                    "Direita",
                    "paddingRight"
                )}

                {renderSelect(
                    "Inferior",
                    "paddingBottom"
                )}

                {renderSelect(
                    "Esquerda",
                    "paddingLeft"
                )}
            </FieldsContainer>
        )}
    </ControlContainer>
);

}
