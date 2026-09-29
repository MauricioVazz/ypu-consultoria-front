"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import {
    PanelContainer,
    PanelHeader,
    PanelTitle,
    SaveButton,
    Section,
    SectionTitle,
    DebugSection,
    DebugTitle,
    DebugContent,
} from "./styles";

export default function GalleryPanel({ block }) {
    const dirtyBlocks = useBuilderStore(state => state.dirtyBlocks);
    const saveBlock = useBuilderStore(state => state.saveBlock);

    const isDirty = dirtyBlocks.includes(block.publicId);

    const handleSave = async () => {
        try {
            await saveBlock(block.publicId);
        } catch (error) {
            console.error(error);
        }
    };

    return (<PanelContainer> <PanelHeader> <PanelTitle>Galeria</PanelTitle>

        <SaveButton
            type="button"
            disabled={!isDirty}
            onClick={handleSave}
        >
            Salvar
        </SaveButton>
    </PanelHeader>

        <Section>
            <SectionTitle>Imagens</SectionTitle>
        </Section>

        <Section>
            <SectionTitle>Configurações</SectionTitle>
        </Section>

        <DebugSection>
            <DebugTitle>Debug</DebugTitle>

            <DebugContent>
                <pre>
                    {JSON.stringify(block.content, null, 2)}
                </pre>
            </DebugContent>
        </DebugSection>
    </PanelContainer>

    );
}
