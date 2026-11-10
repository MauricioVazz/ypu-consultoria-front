
import {
    SectionItemButton,
    SectionName,
    SectionArrow,
} from "./styles";

export default function SectionItem({
    section,
    originalNumber,
    index,
    isActive,
    onClick,
    dropPosition,
    onDragStart,
    onDragOver,
    onDrop,
    onDragEnd,
}) {
    return (
        <SectionItemButton
            $active={isActive}
            $dropPosition={dropPosition}
            draggable
            onClick={onClick}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnd={onDragEnd}
        >
            <SectionName>
                {section.content?.title || `Seção ${originalNumber ?? index + 1}`}
            </SectionName>

            <SectionArrow>›</SectionArrow>
        </SectionItemButton>
    );
}
