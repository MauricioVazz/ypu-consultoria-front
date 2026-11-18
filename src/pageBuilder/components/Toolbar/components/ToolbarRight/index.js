
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useSaveAll from "@/pageBuilder/hooks/useSaveAll";
import useBuilderStore from "@/pageBuilder/store/builderStore";

import {
    updateProject,
    deleteProject,
} from "@/services/project.service";

import ConfirmActionModal from "@/pageBuilder/components/ConfirmActionModal";

import {
    ToolbarButtons,
    PreviewButton,
    SaveButton,
    PublishButton,
    DeleteButton,
} from "./styles";

export default function ToolbarRight() {
    const router = useRouter();

    const project = useBuilderStore(state => state.project);
    const setProject = useBuilderStore(state => state.setProject);

    const {
        hasChanges,
        isSaving,
        saveError,
        handleSaveAll,
    } = useSaveAll();

    const [confirmationAction, setConfirmationAction] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [actionError, setActionError] = useState("");

    const isPublished = project?.status === "PUBLISHED";

    function handleOpenPublishModal() {
        setActionError("");

        setConfirmationAction({
            type: "publish",
            title: isPublished ? "Voltar para rascunho?" : "Publicar projeto?",
            description: isPublished
                ? "O projeto deixará de ficar disponível publicamente. Você poderá publicá-lo novamente depois."
                : "O projeto ficará disponível publicamente no site da YPU.",
            keyword: isPublished ? "RASCUNHO" : "PUBLICAR",
            confirmLabel: isPublished ? "Voltar para rascunho" : "Publicar",
            danger: false,
        });
    }

    function handleOpenDeleteModal() {
        setActionError("");

        setConfirmationAction({
            type: "delete",
            title: "Excluir projeto?",
            description:
                "Essa ação excluirá permanentemente o projeto e seus dados relacionados. Essa operação não poderá ser desfeita.",
            keyword: "EXCLUIR",
            confirmLabel: "Excluir projeto",
            danger: true,
        });
    }

    async function handleConfirmAction() {
        if (!confirmationAction || isProcessing) return;

        try {
            setIsProcessing(true);
            setActionError("");

            if (confirmationAction.type === "publish") {
                const saved = await handleSaveAll();

                if (!saved) return;

                const nextStatus = isPublished ? "DRAFT" : "PUBLISHED";

                const updatedProject = await updateProject(project.publicId, {
                    status: nextStatus,
                });

                setProject(updatedProject);
                setConfirmationAction(null);
                return;
            }

            if (confirmationAction.type === "delete") {
                await deleteProject(project.publicId);

                setConfirmationAction(null);
                router.push("/projetos");
            }
        } catch (error) {
            console.error("Erro ao executar ação do projeto:", error);
            setActionError(
                error.message || "Não foi possível executar esta ação."
            );
        } finally {
            setIsProcessing(false);
        }
    }

    return (
        <>
            <ToolbarButtons>
                {/* Preview será reativado futuramente. */}
                {/*
                <PreviewButton type="button">
                    Preview
                </PreviewButton>
                */}

                <SaveButton
                    type="button"
                    disabled={!hasChanges || isSaving || isProcessing}
                    onClick={handleSaveAll}
                >
                    {isSaving ? "Salvando..." : "Salvar"}
                </SaveButton>

                <PublishButton
                    type="button"
                    disabled={!project || isProcessing || isSaving}
                    onClick={handleOpenPublishModal}
                >
                    {isPublished ? "Voltar para rascunho" : "Publicar"}
                </PublishButton>

                <DeleteButton
                    type="button"
                    disabled={!project || isProcessing || isSaving}
                    onClick={handleOpenDeleteModal}
                >
                    Excluir
                </DeleteButton>

                {(saveError || actionError) && (
                    <span role="alert">
                        {actionError || saveError}
                    </span>
                )}
            </ToolbarButtons>

            {confirmationAction && (
                <ConfirmActionModal
                    key={confirmationAction.type}
                    open={true}
                    onClose={() => {
                        if (!isProcessing) {
                            setConfirmationAction(null);
                        }
                    }}
                    onConfirm={handleConfirmAction}
                    title={confirmationAction.title}
                    description={confirmationAction.description}
                    keyword={confirmationAction.keyword}
                    confirmLabel={confirmationAction.confirmLabel}
                    danger={confirmationAction.danger}
                    loading={isProcessing}
                />
            )}
        </>
    );
}
