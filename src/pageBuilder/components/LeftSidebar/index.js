"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import { createBlock } from "@/pageBuilder/services/projectService";

import SidebarTabs from "./components/SidebarTabs";
import SectionsPanel from "./components/SectionsPanel";
import SectionStructure from "./components/SectionStructure";
import ElementsPanel from "./components/ElementsPanel";

import {
    SidebarContainer,
    SidebarContent,
    EmptyMessage,
} from "./styles";

// Procura um bloco na árvore pelo publicId
function findBlockByPublicId(blocks, publicId) {
    for (const block of blocks) {
        if (block.publicId === publicId) {
            return block;
        }

        if (block.children?.length) {
            const found = findBlockByPublicId(
                block.children,
                publicId
            );

            if (found) return found;
        }
    }

    return null;
}

// Encontra o pai adequado a partir do bloco selecionado
function findParentByType(layout, selectedBlock, expectedType) {
    let currentBlock = selectedBlock;

    while (currentBlock) {
        if (currentBlock.type === expectedType) {
            return currentBlock;
        }

        currentBlock = currentBlock.parentId
            ? findBlockByPublicId(layout, currentBlock.parentId)
            : null;
    }

    return null;
}

const parentTypes = {
    ROW: "SECTION",
    COLUMN: "ROW",
    TITLE: "COLUMN",
    TEXT: "COLUMN",
    IMAGE: "COLUMN",
    CTA: "COLUMN",
    METRICS: "COLUMN",
    FEATURES: "COLUMN",
    TIMELINE: "COLUMN",
    GALLERY: "COLUMN",
};

export default function LeftSidebar() {
    const [activeTab, setActiveTab] = useState("elements");
    const [openedSectionId, setOpenedSectionId] = useState(null);
    const [creationError, setCreationError] = useState("");

    const layout = useBuilderStore(state => state.layout);
    const selectedBlock = useBuilderStore(state => state.selectedBlock);

    const projectPublicId = useBuilderStore(
        state => state.projectPublicId
    );

    const selectBlock = useBuilderStore(state => state.selectBlock);
    const addBlock = useBuilderStore(state => state.addBlock);

    const sections = layout.filter(
        block => block.type === "SECTION"
    );

    const initialBlockContent = {
        TITLE: {
            text: "Novo título",
        },

        TEXT: {
            content: "Adicione seu texto aqui.",
        },

        IMAGE: {
            imagePublicId: null,
            alt: "Descrição da imagem",
        },

        CTA: {
            text: "Saiba mais",
            href: "#",
        },

        METRICS: {
            items: [
                {
                    label: "Novo indicador",
                    value: "0",
                },
            ],
        },

        FEATURES: {
            items: [
                {
                    title: "Novo recurso",
                    description: "Descreva este recurso.",
                },
            ],
        },

        TIMELINE: {
            items: [
                {
                    date: "",
                    title: "Nova etapa",
                    description: "",
                },
            ],
        },

        GALLERY: {},
    };

    const openedSection = sections.find(
        section => section.publicId === openedSectionId
    );

    const handleOpenSection = section => {
        setOpenedSectionId(section.publicId);
        selectBlock(section);
    };

    const getParentForBlock = type => {
        const expectedType = parentTypes[type];

        if (!expectedType) return null;

        return findParentByType(
            layout,
            selectedBlock,
            expectedType
        );
    };

    const canAddBlock = type => {
        // Sections não precisam de um bloco pai
        if (type === "SECTION") return true;

        return Boolean(getParentForBlock(type));
    };

    const handleAddBlock = async type => {
        if (!canAddBlock(type)) return;

        setCreationError("");

        try {
            const parent = getParentForBlock(type);

            const blockData = {
                type,
                content: initialBlockContent[type] || {},
            };

            if (parent) {
                blockData.parentPublicId = parent.publicId;
            }

            const response = await createBlock(
                projectPublicId,
                blockData
            );

            if (!response?.block) {
                throw new Error("A API não retornou o bloco criado.");
            }

            const wasAdded = addBlock(response.block);

            if (!wasAdded) {
                throw new Error(
                    "Não foi possível inserir o bloco na estrutura."
                );
            }
        } catch (error) {
            console.error("Erro ao criar bloco:", error);

            setCreationError(
                error.message || "Não foi possível criar o bloco."
            );
        }
    };

    return (
        <SidebarContainer>
            <SidebarTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <SidebarContent>
                {activeTab === "elements" && (
                    <>
                        <ElementsPanel
                            canAddBlock={canAddBlock}
                            onAddBlock={handleAddBlock}
                        />

                        {creationError && (
                            <EmptyMessage>
                                {creationError}
                            </EmptyMessage>
                        )}
                    </>
                )}

                {activeTab === "structure" && (
                    <>
                        {!openedSection ? (
                            <SectionsPanel
                                sections={sections}
                                selectedBlock={selectedBlock}
                                onOpenSection={handleOpenSection}
                            />
                        ) : (
                            <SectionStructure
                                section={openedSection}
                                sections={sections}
                                selectedBlock={selectedBlock}
                                onBack={() => setOpenedSectionId(null)}
                                onSelectBlock={selectBlock}
                            />
                        )}
                    </>
                )}
            </SidebarContent>
        </SidebarContainer>
    );
}