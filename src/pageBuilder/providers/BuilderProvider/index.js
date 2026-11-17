'use client';

import { useEffect } from "react";

import BuilderLayout from "../../components/BuilderLayout";

import useBuilderStore from "../../store/builderStore";

import { getProjectLayoutWithProject } from "../../services/projectService";

export default function BuilderProvider({ publicId }) {

    const setLayout = useBuilderStore(state => state.setLayout);

    const setLoading = useBuilderStore(
        state => state.setLoading
    );

    const setProjectPublicId = useBuilderStore(
        state => state.setProjectPublicId
    );

    const setProject = useBuilderStore(
        state => state.setProject
    );

    useEffect(() => {

        setProjectPublicId(publicId);

        async function loadProject() {

            try {

                setLoading(true);

                const response = await getProjectLayoutWithProject(publicId);

                setProject(response.project);

                setLayout(response.blocks);

            } catch (error) {

                console.error(
                    "Erro ao carregar projeto:",
                    error
                );

            } finally {

                setLoading(false);

            }

        }

        loadProject();

    }, [publicId, setProjectPublicId, setProject, setLayout, setLoading]);

    return <BuilderLayout />;

}