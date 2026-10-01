"use client";

import {
    ControlContainer,
    ControlHeader,
    FieldsContainer,
    Field,
    FieldLabel,
    Select,
} from "./styles";

const spacingOptions = [
    { value: "NONE", label: "None" },
    { value: "SM", label: "SM" },
    { value: "MD", label: "MD" },
    { value: "LG", label: "LG" },
    { value: "XL", label: "XL" },
];

export default function VerticalPaddingControl({
    value = {},
    onChange,
}) {
    const handleChange = (field, newValue) => {
        onChange({
            [field]: newValue,
        });
    };

    return (
        <ControlContainer>

            <ControlHeader>
                <strong>Vertical Padding</strong>
            </ControlHeader>

            <FieldsContainer>

                <Field>
                    <FieldLabel>Top</FieldLabel>

                    <Select
                        value={value.paddingTop ?? "NONE"}
                        onChange={e =>
                            handleChange(
                                "paddingTop",
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

                <Field>
                    <FieldLabel>Bottom</FieldLabel>

                    <Select
                        value={value.paddingBottom ?? "NONE"}
                        onChange={e =>
                            handleChange(
                                "paddingBottom",
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

        </ControlContainer>
    );
}