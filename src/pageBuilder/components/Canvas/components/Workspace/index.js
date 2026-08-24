"use client";

import { useEffect, useRef, useState } from "react";

import { WorkspaceContainer, PageViewport, PageFrame } from "./styles";

import Page from "../Page";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import { getViewportWidth } from "@/pageBuilder/utils/viewport";

export default function Workspace() {

    const viewport = useBuilderStore(
        state => state.viewport
    );

    const containerRef = useRef(null);

    const [scale, setScale] = useState(1);

    const pageWidth = getViewportWidth(viewport);

    useEffect(() => {

        const container = containerRef.current;

        if (!container) {
            return;
        }

        const updateScale = () => {

            const availableWidth =
                container.clientWidth - 96;

            const nextScale =
                Math.min(
                    1,
                    availableWidth / pageWidth
                );

            setScale(nextScale);
        };

        updateScale();

        const observer =
            new ResizeObserver(updateScale);

        observer.observe(container);

        return () => {
            observer.disconnect();
        };

    }, [pageWidth]);

    return (
        <WorkspaceContainer ref={containerRef}>

            <PageViewport
                $scale={scale}
                $pageWidth={pageWidth}
            >
                <PageFrame $scale={scale}>

                    <Page />
                
                </PageFrame>

            </PageViewport>

        </WorkspaceContainer>
    );
}