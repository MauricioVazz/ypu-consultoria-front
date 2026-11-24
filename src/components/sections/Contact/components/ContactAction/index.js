'use client'

import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

import {
    ContactActionContainer,
    ContactActionTitle,
    ContactActionDescription,
    ContactLogo,
    WhatsAppButton,
} from './styles'

export default function ContactAction() {
    return (
        <ContactActionContainer>
            <ContactActionTitle>
                Atendimento especializado
            </ContactActionTitle>

            <ContactActionDescription>
                Soluções ambientais alinhadas às necessidades do seu
                empreendimento.
            </ContactActionDescription>

            <ContactLogo>
                <Image
                    src="/images/logo.png"
                    alt="YPU Consultoria Ambiental"
                    width={230}
                    height={129}
                />
            </ContactLogo>

            <WhatsAppButton
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp />
                Conversar pelo WhatsApp
            </WhatsAppButton>
        </ContactActionContainer>
    )
}