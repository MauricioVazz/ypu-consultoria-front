'use client'

import EditorialText from '../EditorialText'
import MediaFrame from '../MediaFrame'

import {
    EditorialRowContainer,
    TextColumn,
    MediaColumn,
} from './styles'

export default function EditorialRow({
    mediaPosition = 'right',
    eyebrow,
    title,
    paragraphs,
    image,
}) {
    return (
        <EditorialRowContainer>
            <TextColumn $mediaPosition={mediaPosition}>
                <EditorialText
                    eyebrow={eyebrow}
                    title={title}
                    paragraphs={paragraphs}
                />
            </TextColumn>

            <MediaColumn $mediaPosition={mediaPosition}>
                <MediaFrame
                    src={image.src}
                    alt={image.alt}
                />
            </MediaColumn>
        </EditorialRowContainer>
    )
}