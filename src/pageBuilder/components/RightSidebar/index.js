"use client";

import { SidebarContainer } from "./styles";
import useBuilderStore from "@/pageBuilder/store/builderStore";
import DefaultPanel from "./panels/DefaultPanel";
import { panelMap } from "./panels/index.js";

export default function RightSidebar() {

    const selectedBlock = useBuilderStore(state => state.selectedBlock);

    if (!selectedBlock) {
        return (
            <SidebarContainer>
                Nenhum bloco selecionado
            </SidebarContainer>
        );
    }

    const Panel = panelMap[selectedBlock.type] || DefaultPanel;

    return (
        <SidebarContainer>

            <Panel block={selectedBlock} />

        </SidebarContainer>
    );
}