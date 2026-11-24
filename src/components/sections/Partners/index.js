'use client'

import Container from '@/components/ui/Container'
import PartnersCarousel from './components/PartnersCarousel'

import {
    PartnersSection,
    PartnersTitle,
} from './styles'

export default function Partners() {
    return (
        <PartnersSection>
            <Container>
                <PartnersTitle>Quem trabalha conosco</PartnersTitle>

                <PartnersCarousel />
            </Container>
        </PartnersSection>
    )
}