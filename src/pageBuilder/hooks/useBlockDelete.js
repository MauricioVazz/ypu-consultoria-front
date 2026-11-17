
"use client";

import { useState } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import { deleteBlock } from "@/pageBuilder/services/projectService";

export default function useBlockDelete() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState("");

    const deleteBlockLocal = useBuilderStore(
        state => state.deleteBlockLocal
    );

    const handleDelete = async publicId => {
        if (isDeleting) return;

        const confirmed = window.confirm(
            "Tem certeza que deseja excluir este bloco? Todos os seus blocos filhos também serão removidos."
        );

        if (!confirmed) return;

        try {
            setIsDeleting(true);
            setDeleteError("");

            await deleteBlock(publicId);

            deleteBlockLocal(publicId);

        } catch (error) {
            console.error("Erro ao excluir bloco:", error);

            setDeleteError(
                error.message || "Não foi possível excluir o bloco."
            );
        } finally {
            setIsDeleting(false);
        }
    };

    return {
        isDeleting,
        deleteError,
        handleDelete,
    };
}
