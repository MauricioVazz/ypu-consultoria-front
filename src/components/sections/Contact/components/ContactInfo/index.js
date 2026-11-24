'use client'

import {
    ContactInfoContainer,
    ContactInfoTitle,
    ContactInfoDescription,
    ContactDetails,
    ContactDetail,
} from './styles'

import {
    FaWhatsapp,
    FaEnvelope,
    FaClock,
} from 'react-icons/fa'

export default function ContactInfo() {
    return (
        <ContactInfoContainer>
            <ContactInfoTitle>Fale com a YPU</ContactInfoTitle>

            <ContactInfoDescription>
                Entre em contato com a YPU Consultoria Ambiental para entender
                como podemos auxiliar seu empreendimento com soluções
                responsáveis, eficientes e alinhadas às necessidades ambientais
                do território.
            </ContactInfoDescription>

            <ContactDetails>
                <ContactDetail>
                    <FaWhatsapp />
                    <span>(12) 98765-4321</span>
                </ContactDetail>

                <ContactDetail>
                    <FaEnvelope />
                    <span>ypu.consutoria@gmail.com</span>
                </ContactDetail>

                <ContactDetail>
                    <FaClock />
                    <span>
                        Segunda a Sexta | 8h às 11h | 13h às 17h
                    </span>
                </ContactDetail>
            </ContactDetails>
        </ContactInfoContainer>
    )
}