
import {
    StructureNodeContainer,
    StructureItemButton,
    StructureItemIcon,
    StructureItemName,
    StructureChildren,
} from "./styles";

const blockLabels = {
    ROW: { label: "Linha", icon: "↔" },
    COLUMN: { label: "Coluna", icon: "▥" },
    TITLE: { label: "Título", icon: "T" },
    TEXT: { label: "Texto", icon: "¶" },
    IMAGE: { label: "Imagem", icon: "▧" },
    CTA: { label: "Botão", icon: "↗" },
    FEATURES: { label: "Recursos", icon: "☷" },
    METRICS: { label: "Indicadores", icon: "№" },
    GALLERY: { label: "Galeria", icon: "▦" },
    TIMELINE: { label: "Linha do tempo", icon: "⋮" },
};

export default function StructureNode({
    block,
    index,
    selectedBlock,
    onSelectBlock,
}) {
    const blockInfo = blockLabels[block.type] || {
        label: block.type,
        icon: "•",
    };

    const isActive = selectedBlock?.publicId === block.publicId;
    const hasChildren = block.children?.length > 0;

    const label =
        block.type === "ROW"
            ? `Linha ${index + 1}`
            : block.type === "COLUMN"
                ? `Coluna ${index + 1}`
                : blockInfo.label;

    return (
        <StructureNodeContainer>
            <StructureItemButton
                $active={isActive}
                onClick={() => onSelectBlock(block)}
            >
                <StructureItemIcon>
                    {blockInfo.icon}
                </StructureItemIcon>

                <StructureItemName $active={isActive}>
                    {label}
                </StructureItemName>
            </StructureItemButton>

            {hasChildren && (
                <StructureChildren>
                    {block.children.map((child, childIndex) => (
                        <StructureNode
                            key={child.publicId}
                            block={child}
                            index={childIndex}
                            selectedBlock={selectedBlock}
                            onSelectBlock={onSelectBlock}
                        />
                    ))}
                </StructureChildren>
            )}
        </StructureNodeContainer>
    );
}
