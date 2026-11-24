'use client'

import {
    MediaFrameContainer,
    MediaImageWrapper,
    MediaImage,
} from './styles'

export default function ProfessionalsMediaFrame({ src, alt }) {
    return (
        <MediaFrameContainer>
            <MediaImageWrapper>
                <MediaImage
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </MediaImageWrapper>
        </MediaFrameContainer>
    )
}