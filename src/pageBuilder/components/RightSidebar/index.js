"use client";

import { SidebarContainer } from "./styles";
import useBuilderStore from "@/pageBuilder/store/builderStore";

import DefaultPanel from "./panels/DefaultPanel";
import { panelMap } from "./panels/index.js";

import useBlockDelete from "@/pageBuilder/hooks/useBlockDelete";

import {
    DeleteButton,
    DeleteSection,
} from "./styles";

export default function RightSidebar() {
    const selectedBlock = useBuilderStore(
        state => state.selectedBlock
    );

    const {
        isDeleting,
        deleteError,
        handleDelete,
    } = useBlockDelete();

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

            <DeleteSection>
                {deleteError && (
                    <p>{deleteError}</p>
                )}

                <DeleteButton
                    type="button"
                    disabled={isDeleting}
                    onClick={() => handleDelete(selectedBlock.publicId)}
                >
                    {isDeleting ? "Excluindo..." : "Excluir bloco"}
                </DeleteButton>
            </DeleteSection>
        </SidebarContainer>
    );
}
