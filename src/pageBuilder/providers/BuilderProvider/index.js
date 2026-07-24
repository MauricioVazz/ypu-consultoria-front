'use client';

import { useEffect } from "react";

import BuilderLayout from "../../components/BuilderLayout";

import useBuilderStore from "../../store/builderStore";

import { getProjectLayout } from "../../services/projectService";

export default function BuilderProvider({ publicId }) {

    const setLayout = useBuilderStore(state => state.setLayout);

    const setLoading = useBuilderStore(
        state => state.setLoading
    );

    useEffect(() => {

        async function loadProject() {

            try {

                setLoading(true);

                const blocks = await getProjectLayout(publicId);

                setLayout(blocks);

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

    }, [publicId, setLayout, setLoading]);

    return <BuilderLayout />;

}