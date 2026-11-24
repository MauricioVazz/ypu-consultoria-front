
'use client'

import { useEffect, useState } from 'react'

import { getAllProjects } from '@/services/project.service'
import { getImagesByPublicIds } from '@/services/media'

import Container from '@/components/ui/Container'

import FeaturedProject from './components/FeaturedProject'
import ProjectsGrid from './components/ProjectsGrid'

import { FiArrowUpRight } from 'react-icons/fi'

import {
    ProjectsSection,
    ProjectsTitle,
    ProjectsMessage,
    ViewAllProjectsLink,
} from './styles'

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        let isMounted = true

        async function loadProjects() {
            try {
                setLoading(true)

                const projectsData = await getAllProjects()

                const sortedProjects = [...projectsData].sort(
                    (a, b) =>
                        new Date(b.updatedAt) - new Date(a.updatedAt)
                )

                const coverPublicIds = sortedProjects
                    .map(project => project.cover)
                    .filter(Boolean)

                const images = coverPublicIds.length
                    ? await getImagesByPublicIds(coverPublicIds)
                    : []

                const projectsWithCovers = sortedProjects.map(project => ({
                    ...project,
                    coverImage: images.find(
                        image => image.publicId === project.cover
                    ) || null,
                }))

                if (isMounted) {
                    setProjects(projectsWithCovers)
                }

            } catch (error) {
                console.error('Erro ao carregar projetos:', error)

                if (isMounted) {
                    setError(true)
                }

            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        loadProjects()

        return () => {
            isMounted = false
        }
    }, [])

    const featuredProject = projects[0]
    const otherProjects = projects.slice(1, 5)

    return (
        <ProjectsSection id="projetos">
            <Container>
                <ProjectsTitle>Projetos</ProjectsTitle>

                {loading ? (
                    <ProjectsMessage>
                        Carregando projetos...
                    </ProjectsMessage>
                ) : error ? (
                    <ProjectsMessage>
                        Não foi possível carregar os projetos.
                    </ProjectsMessage>
                ) : projects.length === 0 ? (
                    <ProjectsMessage>
                        Em breve, novos projetos estarão disponíveis.
                    </ProjectsMessage>
                ) : (
                    <>
                        <FeaturedProject project={featuredProject} />

                        {otherProjects.length > 0 && (
                            <ProjectsGrid projects={otherProjects} />
                        )}
                        <ViewAllProjectsLink href="/projetos">
                            Ver todos os projetos
                            <FiArrowUpRight />
                        </ViewAllProjectsLink>
                    </>
                )}
            </Container>
        </ProjectsSection>
    )
}
