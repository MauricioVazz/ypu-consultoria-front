"use client";

import {
    CardContainer,
    CardHeader,
    CardNumber,
    CardTitle,
    FieldGroup,
    FieldLabel,
    TextInput,
    TextArea,
} from "./styles";

export default function FeatureItemCard({
    item,
    index,
    onChange,
}) {
    const handleChange = changes => {
        onChange({
            ...item,
            ...changes,
        });
    };

    return (
        <CardContainer>
            <CardHeader>
                <CardNumber>
                    Item {index + 1}
                </CardNumber>
            </CardHeader>

            <FieldGroup>
                <FieldLabel>
                    Título
                </FieldLabel>

                <TextInput
                    type="text"
                    value={item.title ?? ""}
                    placeholder="Título do item"
                    onChange={event =>
                        handleChange({
                            title: event.target.value,
                        })
                    }
                />
            </FieldGroup>

            <FieldGroup>
                <FieldLabel>
                    Descrição
                </FieldLabel>

                <TextArea
                    value={item.description ?? ""}
                    placeholder="Descrição do item"
                    rows={4}
                    onChange={event =>
                        handleChange({
                            description:
                                event.target.value,
                        })
                    }
                />
            </FieldGroup>
        </CardContainer>
    );

}
