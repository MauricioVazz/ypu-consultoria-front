
"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import SidebarTabs from "./components/SidebarTabs";
import SectionsPanel from "./components/SectionsPanel";
import SectionStructure from "./components/SectionStructure";

import {
    SidebarContainer,
    SidebarContent,
    EmptyMessage,
} from "./styles";

export default function LeftSidebar() {
    const [activeTab, setActiveTab] = useState("elements");
    const [openedSectionId, setOpenedSectionId] = useState(null);

    const layout = useBuilderStore(state => state.layout);
    const selectedBlock = useBuilderStore(state => state.selectedBlock);
    const selectBlock = useBuilderStore(state => state.selectBlock);

    const sections = layout.filter(
        block => block.type === "SECTION"
    );

    const openedSection = sections.find(
        section => section.publicId === openedSectionId
    );

    const handleOpenSection = section => {
        setOpenedSectionId(section.publicId);
        selectBlock(section);
    };

    return (
        <SidebarContainer>
            <SidebarTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <SidebarContent>
                {activeTab === "elements" && (
                    <EmptyMessage>
                        Elementos disponíveis em breve.
                    </EmptyMessage>
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
