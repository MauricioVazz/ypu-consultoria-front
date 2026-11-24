'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
    CarouselContainer,
    CarouselViewport,
    CarouselTrack,
    PartnerItem,
    PartnerLogo,
    CarouselButton,
} from './styles'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const partners = [
    { id: 1, name: 'Parceiro 1', image: '/images/logo.png' },
    { id: 2, name: 'Parceiro 2', image: '/images/logo.png' },
    { id: 3, name: 'Parceiro 3', image: '/images/logo.png' },
    { id: 4, name: 'Parceiro 4', image: '/images/logo.png' },
    { id: 5, name: 'Parceiro 5', image: '/images/logo.png' },
    { id: 6, name: 'Parceiro 6', image: '/images/logo.png' },
]

export default function PartnersCarousel() {
    const [visibleCount, setVisibleCount] = useState(4)
    const [currentIndex, setCurrentIndex] = useState(4)
    const [transitionEnabled, setTransitionEnabled] = useState(true)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1025px)')
        const tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)')

        const updateVisibleCount = () => {
            const count = desktop.matches ? 4 : tablet.matches ? 3 : 2

            setVisibleCount(count)
            setCurrentIndex(count)
            setTransitionEnabled(false)
        }

        updateVisibleCount()

        desktop.addEventListener('change', updateVisibleCount)
        tablet.addEventListener('change', updateVisibleCount)

        return () => {
            desktop.removeEventListener('change', updateVisibleCount)
            tablet.removeEventListener('change', updateVisibleCount)
        }
    }, [])

    const extendedPartners = [
        ...partners.slice(-visibleCount),
        ...partners,
        ...partners.slice(0, visibleCount),
    ]

    const nextSlide = () => {
        setTransitionEnabled(true)
        setCurrentIndex((current) => current + 1)
    }

    const previousSlide = () => {
        setTransitionEnabled(true)
        setCurrentIndex((current) => current - 1)
    }

    const handleTransitionEnd = () => {
        if (currentIndex >= partners.length + visibleCount) {
            setTransitionEnabled(false)
            setCurrentIndex(visibleCount)
        }

        if (currentIndex < visibleCount) {
            setTransitionEnabled(false)
            setCurrentIndex(partners.length + visibleCount - 1)
        }
    }

    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            nextSlide()
        }, 4500)

        return () => clearInterval(interval)
    }, [currentIndex, isPaused])

    return (
        <CarouselContainer
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <CarouselButton
                type="button"
                aria-label="Ver logos anteriores"
                onClick={previousSlide}
            >
                <FaChevronLeft />
            </CarouselButton>

            <CarouselViewport>
                <CarouselTrack
                    $count={extendedPartners.length}
                    $visibleCount={visibleCount}
                    $currentIndex={currentIndex}
                    $transitionEnabled={transitionEnabled}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedPartners.map((partner, index) => (
                        <PartnerItem
                            key={`${partner.id}-${index}`}
                            $count={extendedPartners.length}
                        >
                            <PartnerLogo>
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </PartnerLogo>
                        </PartnerItem>
                    ))}
                </CarouselTrack>
            </CarouselViewport>

            <CarouselButton
                type="button"
                aria-label="Ver próximos logos"
                onClick={nextSlide}
            >
                <FaChevronRight />
            </CarouselButton>
        </CarouselContainer>
    )
}