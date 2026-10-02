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

            const horizontalPadding =
                viewport === "desktopFullHD"
                    ? 64
                    : 144;

            const availableWidth =
                container.clientWidth -
                horizontalPadding;

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

    }, [pageWidth, viewport]);

    return (
        <WorkspaceContainer
            ref={containerRef}
            $isFullHD={viewport === "desktopFullHD"}
        >

            <PageViewport
                $width={pageWidth}
                $scale={scale}
            >
                <PageFrame
                    $scale={scale}
                    $pageWidth={pageWidth}
                >

                    <Page />

                </PageFrame>

            </PageViewport>

        </WorkspaceContainer>
    );
}