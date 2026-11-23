'use client'

import Image from 'next/image'

import {
    MediaFrameContainer,
    MediaImageWrapper,
    MediaImage,
} from './styles'

export default function MediaFrame({ src, alt }) {
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