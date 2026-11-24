'use client'

import {
    ProfessionalsTextContainer,
    EyebrowGroup,
    AccentDivider,
    Eyebrow,
    ProfessionalsTitle,
    ProfessionalDetails,
    ProfessionalsParagraphs,
    AreasContainer,
    AreaTag,
} from './styles'

export default function ProfessionalsText({
    eyebrow,
    title,
    education,
    registration,
    paragraphs = [],
    areas = [],
}) {
    return (
        <ProfessionalsTextContainer>
            <EyebrowGroup>
                <AccentDivider />
                <Eyebrow>{eyebrow}</Eyebrow>
            </EyebrowGroup>

            <ProfessionalsTitle>{title}</ProfessionalsTitle>

            <ProfessionalDetails>
                {education && <p>{education}</p>}
                {registration && <p>{registration}</p>}
            </ProfessionalDetails>

            <ProfessionalsParagraphs>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </ProfessionalsParagraphs>

            {areas.length > 0 && (
                <AreasContainer>
                    <h4>Áreas de atuação</h4>

                    <div>
                        {areas.map((area, index) => (
                            <AreaTag key={index}>{area}</AreaTag>
                        ))}
                    </div>
                </AreasContainer>
            )}
        </ProfessionalsTextContainer>
    )
}