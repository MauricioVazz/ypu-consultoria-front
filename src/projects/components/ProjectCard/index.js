
"use client";

import {
    ProjectCardContainer,
    ProjectCover,
    CoverPlaceholder,
    EditButton,
    ProjectInfo,
    ProjectCategory,
    ProjectTitle,
    ProjectDivider,
    ProjectSummary,
    ProjectFooter,
    ProjectStatus,
    ViewProjectLink
} from "./styles";

import Image from "next/image";

import {
    FiEdit2,
    FiImage,
    FiArrowUpRight
} from "react-icons/fi";

export default function ProjectCard({ project }) {
    const statusLabels = {
        DRAFT: "Rascunho",
        PUBLISHED: "Publicado"
    };

    return (
        <ProjectCardContainer>
            <ProjectCover>
                {project.coverImage?.url ? (
<Image
    src={project.coverImage.url}
    alt={project.coverImage.alt || project.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
    style={{ objectFit: "cover" }}
/>
                ) : (
                    <CoverPlaceholder>
                        <FiImage />
                        <span>Sem imagem</span>
                    </CoverPlaceholder>
                )}

                <EditButton
                    type="button"
                    title="Editar projeto"
                    onClick={() => {
                        window.location.href =
                            `/admin/projetos/${project.publicId}/builder`;
                    }}
                >
                    <FiEdit2 />
                </EditButton>
            </ProjectCover>

            <ProjectInfo>
                <ProjectCategory>
                    {project.category}
                </ProjectCategory>

                <ProjectTitle>
                    {project.title}
                </ProjectTitle>

                <ProjectDivider />

                <ProjectSummary>
                    {project.summary}
                </ProjectSummary>

                <ProjectFooter>
                    <ProjectStatus status={project.status}>
                        {statusLabels[project.status] || "Desconhecido"}
                    </ProjectStatus>

                    <ViewProjectLink href={`/projetos/${project.slug}`}>
                        Ver mais
                        <FiArrowUpRight />
                    </ViewProjectLink>
                </ProjectFooter>
            </ProjectInfo>
        </ProjectCardContainer>
    );
}
