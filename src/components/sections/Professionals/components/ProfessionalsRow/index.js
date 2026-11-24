'use client'

import ProfessionalsText from '../ProfessionalsText'
import ProfessionalsMediaFrame from '../ProfessionalsMediaFrame'

import {
    ProfessionalsRowContainer,
    TextColumn,
    MediaColumn,
} from './styles'

export default function ProfessionalsRow({
    mediaPosition = 'right',
    eyebrow,
    title,
    education,
    registration,
    paragraphs,
    areas = [],
    image,
}) {
    return (
        <ProfessionalsRowContainer>
            <TextColumn $mediaPosition={mediaPosition}>
                <ProfessionalsText
                    eyebrow={eyebrow}
                    title={title}
                    education={education}
                    registration={registration}
                    paragraphs={paragraphs}
                    areas={areas}
                />
            </TextColumn>

            <MediaColumn $mediaPosition={mediaPosition}>
                <ProfessionalsMediaFrame
                    src={image.src}
                    alt={image.alt}
                />
            </MediaColumn>
        </ProfessionalsRowContainer>
    )
}