'use client'

import {
    FaWhatsapp,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
} from 'react-icons/fa'

import {
    FooterContainer,
    FooterContent,
    FooterColumns,
    FooterColumn,
    FooterTitle,
    FooterLinks,
    FooterLink,
    FooterContactList,
    FooterContactItem,
    FooterSocialSection,
    FooterSocialLinks,
    FooterSocialLink,
    SocialIcon,
    FooterDivider,
    FooterCopyright,
} from './styles'

const navigationLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
]

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterColumns>
                    {/* Navegação */}
                    <FooterColumn>
                        <FooterTitle>Navegação</FooterTitle>

                        <FooterLinks>
                            {navigationLinks.map((link) => (
                                <FooterLink key={link.label} href={link.href}>
                                    {link.label}
                                </FooterLink>
                            ))}
                        </FooterLinks>
                    </FooterColumn>

                    {/* Contato */}
                    <FooterColumn>
                        <FooterTitle>Contato</FooterTitle>

                        <FooterContactList>
                            <FooterContactItem>
                                <FaPhoneAlt />
                                <span>(12) 98765 - 4321</span>
                            </FooterContactItem>

                            <FooterContactItem>
                                <FaEnvelope />
                                <span>ypu.consultoria@gmail.com</span>
                            </FooterContactItem>

                            <FooterLink href="#contato">
                                Fale conosco
                            </FooterLink>
                        </FooterContactList>
                    </FooterColumn>

                    {/* Atendimento e redes sociais */}
                    <FooterColumn>
                        <FooterTitle>Atendimento</FooterTitle>

                        <FooterContactList>
                            <FooterContactItem>
                                <FaClock />
                                <span>
                                    Segunda a Sexta | 8h às 11h | 13h às 17h
                                </span>
                            </FooterContactItem>
                        </FooterContactList>

                        <FooterSocialSection>
                            <FooterTitle>Redes Sociais</FooterTitle>

                            <FooterSocialLinks>
                                <FooterSocialLink
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SocialIcon $type="whatsapp">
                                        <FaWhatsapp />
                                    </SocialIcon>
                                    WhatsApp
                                </FooterSocialLink>

                                <FooterSocialLink
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SocialIcon $type="instagram">
                                        <FaInstagram />
                                    </SocialIcon>
                                    ypu.consultoria
                                </FooterSocialLink>
                            </FooterSocialLinks>
                        </FooterSocialSection>
                    </FooterColumn>
                </FooterColumns>

                <FooterDivider />

                <FooterCopyright>
                    YPU Consultoria Ambiental - © Todos os direitos reservados
                    2026 - Desenvolvimento e manutenção por MV Tech
                </FooterCopyright>
            </FooterContent>
        </FooterContainer>
    )
}