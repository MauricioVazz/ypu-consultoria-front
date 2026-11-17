"use client";

import {
    ElementsGroup,
    ElementsGroupTitle,
    ElementsList,
    ElementButton,
} from "./styles";

const elementGroups = [
    {
        title: "Estrutura",
        elements: [
            { type: "SECTION", label: "Section" },
            { type: "ROW", label: "Row" },
            { type: "COLUMN", label: "Column" },
        ],
    },
    {
        title: "Básicos",
        elements: [
            { type: "TITLE", label: "Título" },
            { type: "TEXT", label: "Texto" },
            { type: "IMAGE", label: "Imagem" },
            { type: "CTA", label: "CTA" },
        ],
    },
    {
        title: "Avançados",
        elements: [
            { type: "METRICS", label: "Métricas" },
            { type: "FEATURES", label: "Features" },
            { type: "TIMELINE", label: "Timeline" },
            { type: "GALLERY", label: "Galeria" },
        ],
    },
];

export default function ElementsPanel({
    canAddBlock,
    onAddBlock,
}) {
    return (
        <>
            {elementGroups.map(group => (
                <ElementsGroup key={group.title}>
                    <ElementsGroupTitle>
                        {group.title}
                    </ElementsGroupTitle>

                    <ElementsList>
                        {group.elements.map(element => {
                            const enabled = canAddBlock(element.type);

                            return (
                                <ElementButton
                                    key={element.type}
                                    type="button"
                                    disabled={!enabled}
                                    onClick={() => onAddBlock(element.type)}
                                    title={
                                        enabled
                                            ? `Adicionar ${element.label}`
                                            : "Selecione um elemento pai válido"
                                    }
                                >
                                    {element.label}
                                </ElementButton>
                            );
                        })}
                    </ElementsList>
                </ElementsGroup>
            ))}
        </>
    );
}