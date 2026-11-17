import useBuilderStore from "@/pageBuilder/store/builderStore";

import {
    ToolbarCenterContainer,
    ProjectTitle,
    ProjectStatus
} from "./styles";

export default function ToolbarCenter() {
    const project = useBuilderStore(state => state.project);

    const statusLabels = {
        DRAFT: "Rascunho",
        PUBLISHED: "Publicado"
    };

    return (
        <ToolbarCenterContainer className="center">
            <ProjectTitle>
                {project?.title || "Projeto sem título"}
            </ProjectTitle>

            <ProjectStatus>
                {statusLabels[project?.status] || "Desconhecido"}
            </ProjectStatus>
        </ToolbarCenterContainer>
    );
}