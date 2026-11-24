'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
    FeaturedProjectContainer,
    FeaturedImageColumn,
    FeaturedImageWrapper,
    FeaturedPlaceholder,
    FeaturedImage,
    FeaturedInfo,
    FeaturedCategory,
    FeaturedTitle,
    FeaturedDivider,
    FeaturedSummary,
    FeaturedLink,
} from './styles'

import { FiImage, FiArrowUpRight } from 'react-icons/fi'

export default function FeaturedProject({ project }) {
    if (!project) return null

    return (
        <FeaturedProjectContainer>
            <FeaturedImageColumn>
                <FeaturedImageWrapper>
                    {project.coverImage?.url ? (
                        <FeaturedImage
                            src={project.coverImage.url}
                            alt={project.coverImage.alt || project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    ) : (
                        <FeaturedPlaceholder>
                            <FiImage />
                            <span>Sem imagem</span>
                        </FeaturedPlaceholder>
                    )}
                </FeaturedImageWrapper>
            </FeaturedImageColumn>

            <FeaturedInfo>
                <FeaturedCategory>
                    {project.category}
                </FeaturedCategory>

                <FeaturedTitle>
                    {project.title}
                </FeaturedTitle>

                <FeaturedDivider />

                <FeaturedSummary>
                    {project.summary}
                </FeaturedSummary>

                <FeaturedLink href={`/projetos/${project.slug}`}>
                    Ver mais
                    <FiArrowUpRight />
                </FeaturedLink>
            </FeaturedInfo>
        </FeaturedProjectContainer>
    )
}
