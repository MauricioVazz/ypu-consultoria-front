'use client'

import Container from '@/components/ui/Container'
import ContactInfo from './components/ContactInfo'
import ContactAction from './components/ContactAction'

import {
    ContactSection,
    ContactTitle,
    ContactColumns,
} from './styles'

export default function Contact() {
    return (
        <ContactSection>
            <Container>
                <ContactTitle>Entre em contato</ContactTitle>

                <ContactColumns>
                    <ContactInfo />
                    <ContactAction />
                </ContactColumns>
            </Container>
        </ContactSection>
    )
}