"use client";

import { PageContainer } from "./styles";
import useBuilderStore from "@/pageBuilder/store/builderStore";
import BlockRenderer from "@/pageBuilder/renderer/BlockRenderer";
import { getViewportWidth } from "@/pageBuilder/utils/viewport";

export default function Page() {

    const layout = useBuilderStore(
        state => state.layout
    );

    const viewport = useBuilderStore(
        state => state.viewport
    );

    const width = getViewportWidth(viewport);

    return (
        <PageContainer $width={width}>

            {!layout.length ? (

                <p>Nenhum bloco adicionado.</p>

            ) : (

                layout.map((block) => (
                    <BlockRenderer
                        key={block.publicId}
                        block={block}
                    />
                ))

            )}

        </PageContainer>
    );
}