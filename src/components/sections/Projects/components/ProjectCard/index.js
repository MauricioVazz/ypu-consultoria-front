'use client'

import Image from 'next/image'

import {
    ProjectCardContainer,
    ProjectCover,
    CoverPlaceholder,
    ProjectInfo,
    ProjectCategory,
    ProjectTitle,
    ProjectDivider,
    ProjectSummary,
    ViewProjectLink,
} from './styles'

import { FiImage, FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project }) {
    return (
        <ProjectCardContainer>
            <ProjectCover>
                {project.coverImage?.url ? (
                    <Image
                        src={project.coverImage.url}
                        alt={project.coverImage.alt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                ) : (
                    <CoverPlaceholder>
                        <FiImage />
                        <span>Sem imagem</span>
                    </CoverPlaceholder>
                )}
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

                <ViewProjectLink href={`/projetos/${project.slug}`}>
                    Ver mais
                    <FiArrowUpRight />
                </ViewProjectLink>
            </ProjectInfo>
        </ProjectCardContainer>
    )
}
