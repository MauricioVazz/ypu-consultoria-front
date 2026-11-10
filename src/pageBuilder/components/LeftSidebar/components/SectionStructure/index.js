
import StructureNode from "./StructureNode";

import {
    SectionViewHeader,
    BackButton,
    SectionViewTitle,
    StructureList,
    EmptyMessage,
} from "./styles";

export default function SectionStructure({
    section,
    sections,
    selectedBlock,
    onBack,
    onSelectBlock,
}) {
    const sectionIndex = sections.findIndex(
        item => item.publicId === section.publicId
    );

    return (
        <>
            <SectionViewHeader>
                <BackButton onClick={onBack}>
                    ← Voltar às seções
                </BackButton>

                <SectionViewTitle>
                    {section.content?.title || `Seção ${sectionIndex + 1}`}
                </SectionViewTitle>
            </SectionViewHeader>

            {section.children?.length > 0 ? (
                <StructureList>
                    {section.children.map((block, index) => (
                        <StructureNode
                            key={block.publicId}
                            block={block}
                            index={index}
                            selectedBlock={selectedBlock}
                            onSelectBlock={onSelectBlock}
                        />
                    ))}
                </StructureList>
            ) : (
                <EmptyMessage>
                    Esta seção ainda não possui elementos.
                </EmptyMessage>
            )}
        </>
    );
}
