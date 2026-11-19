
"use client";

import { useEffect, useState } from "react";
import { FiPlus, FiFolder, FiAlertCircle } from "react-icons/fi";

import { getAllProjects } from "@/services/project.service";
import { getImagesByPublicIds } from "@/services/media";

import ProjectsGrid from "../ProjectsGrid";
import ProjectsContainer from "../ProjectsContainer";
import ProjectFormModal from "../ProjectFormModal";

import { getCurrentAdmin } from "@/services/auth.service";

import {
    Page,
    PageHeader,
    Intro,
    Eyebrow,
    PageTitle,
    PageDescription,
    ProjectsToolbar,
    ProjectCount,
    CreateButton,
    StateMessage,
    EmptyState,
} from "./styles";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isAdmin, setIsAdmin] = useState(false);
    const [checkingAdmin, setCheckingAdmin] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function checkAdminSession() {
            try {
                await getCurrentAdmin();

                if (isMounted) {
                    setIsAdmin(true);
                }
            } catch {
                if (isMounted) {
                    setIsAdmin(false);
                }
            } finally {
                if (isMounted) {
                    setCheckingAdmin(false);
                }
            }
        }

        checkAdminSession();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        async function loadProjects() {
            try {
                setLoading(true);
                setError("");

                const projectsData = await getAllProjects();

                const coverPublicIds = projectsData
                    .map(project => project.cover)
                    .filter(Boolean);

                const images = coverPublicIds.length
                    ? await getImagesByPublicIds(coverPublicIds)
                    : [];

                const projectsWithCovers = projectsData.map(project => ({
                    ...project,
                    coverImage: images.find(
                        image => image.publicId === project.cover
                    ) || null
                }));

                setProjects(projectsWithCovers);

            } catch (error) {
                console.error("Erro ao carregar projetos:", error);
                setError("Não foi possível carregar os projetos. Tente novamente.");
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    return (
        <Page>
            <ProjectsContainer>
                <PageHeader>
                    <Intro>
                        <Eyebrow>YPU Consultoria Ambiental</Eyebrow>

                        <PageTitle>
                            Nossos projetos
                        </PageTitle>

                        <PageDescription>
                            Conheça iniciativas, soluções e trabalhos
                            desenvolvidos com responsabilidade ambiental
                            e compromisso com o futuro.
                        </PageDescription>
                    </Intro>

                    <ProjectsToolbar>
                        <ProjectCount>
                            <FiFolder />
                            <span>
                                {projects.length} {projects.length === 1
                                    ? "projeto"
                                    : "projetos"}
                            </span>
                        </ProjectCount>

                        {!checkingAdmin && isAdmin && (
                            <CreateButton
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <FiPlus />
                                Criar novo projeto
                            </CreateButton>
                        )}
                    </ProjectsToolbar>
                </PageHeader>

                {loading ? (
                    <StateMessage>
                        Carregando projetos...
                    </StateMessage>
                ) : error ? (
                    <StateMessage $error>
                        <FiAlertCircle />
                        {error}
                    </StateMessage>
                ) : projects.length > 0 ? (
                    <ProjectsGrid
                        projects={projects}
                        isAdmin={isAdmin}
                    />
                ) : (
                    <EmptyState>
                        <FiFolder />
                        <h2>Nenhum projeto encontrado</h2>
                        <p>
                            Em breve, novos projetos e iniciativas estarão
                            disponíveis por aqui.
                        </p>
                    </EmptyState>
                )}
            </ProjectsContainer>

            {isAdmin && (
                <ProjectFormModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </Page>
    );
}
