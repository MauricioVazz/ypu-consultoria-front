"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import ProjectFormModal from "@/projects/components/ProjectFormModal";

import {
    ToolbarLeftContainer,
    BackButton,
    EditButton,
} from "./styles";

export default function ToolbarLeft() {
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const project = useBuilderStore((state) => state.project);
    const setProject = useBuilderStore((state) => state.setProject);

    const dirtyBlocks = useBuilderStore((state) => state.dirtyBlocks);
    const hasStructureChanges = useBuilderStore((state) => state.hasStructureChanges);
    const hasSectionOrderChanges = useBuilderStore((state) => state.hasSectionOrderChanges);
    const hasRowChanges = useBuilderStore((state) => state.hasRowChanges);

    function handleBack() {
        const hasUnsavedChanges =
            dirtyBlocks.length > 0 ||
            hasStructureChanges() ||
            hasSectionOrderChanges() ||
            hasRowChanges();

        if (hasUnsavedChanges) {
            const confirmed = window.confirm(
                "Existem alterações não salvas. Deseja sair sem salvar?"
            );

            if (!confirmed) return;
        }

        router.push("/projetos");
    }

    return (
        <>
            <ToolbarLeftContainer>
                <BackButton type="button" onClick={handleBack}>
                    ← Projetos
                </BackButton>

                <EditButton
                    type="button"
                    disabled={!project}
                    onClick={() => setIsModalOpen(true)}
                >
                    Editar informações
                </EditButton>
            </ToolbarLeftContainer>

            <ProjectFormModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={project}
                onSave={setProject}
            />
        </>
    );
}