"use client";

import {
    ControlContainer,
    ControlHeader,
    FieldsContainer,
    Field,
    FieldLabel,
    Select,
} from "./styles";

const defaultOptions = Array.from(
    { length: 12 },
    (_, index) => ({
        value: index + 1,
        label: String(index + 1),
    })
);

const fields = [
    {
        key: "desktop",
        label: "Desktop",
    },
    {
        key: "tablet",
        label: "Tablet",
    },
    {
        key: "mobile",
        label: "Mobile",
    },
];

export default function ColumnSpanControl({
    value = {},
    onChange,
    options = defaultOptions,
}) {
    const handleChange = (field, newValue) => {
        onChange({
            [field]: Number(newValue),
        });
    };

    return (
        <ControlContainer>
            <ControlHeader>
                <strong>Colunas</strong>
            </ControlHeader>

            <FieldsContainer>
                {fields.map(field => (
                    <Field key={field.key}>
                        <FieldLabel>
                            {field.label}
                        </FieldLabel>

                        <Select
                            value={
                                value[field.key] ?? 12
                            }
                            onChange={event =>
                                handleChange(
                                    field.key,
                                    event.target.value
                                )
                            }
                        >
                            {options.map(option => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </Select>
                    </Field>
                ))}
            </FieldsContainer>
        </ControlContainer>
    );
}