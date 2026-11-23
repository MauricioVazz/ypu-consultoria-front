'use client'

import {
    EditorialTextContainer,
    EyebrowGroup,
    AccentDivider,
    Eyebrow,
    EditorialTitle,
    EditorialParagraphs,
} from './styles'

export default function EditorialText({
    eyebrow,
    title,
    paragraphs = [],
}) {
    return (
        <EditorialTextContainer>
            <EyebrowGroup>
                <AccentDivider />
                <Eyebrow>{eyebrow}</Eyebrow>
            </EyebrowGroup>

            <EditorialTitle>{title}</EditorialTitle>

            <EditorialParagraphs>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </EditorialParagraphs>
        </EditorialTextContainer>
    )
}