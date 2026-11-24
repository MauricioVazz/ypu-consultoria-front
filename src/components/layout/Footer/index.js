'use client'

import {
    FaWhatsapp,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
} from 'react-icons/fa'

import useHomeSectionNavigation from '@/hooks/useHomeSectionNavigation'

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
    { label: 'Início', section: 'inicio' },
    { label: 'Sobre', section: 'sobre' },
    { label: 'Serviços', section: 'servicos' },
    { label: 'Projetos', section: 'projetos' },
    { label: 'Profissionais', section: 'profissionais' },
    { label: 'Contato', section: 'contato' },
]

export default function Footer() {
    const navigateToSection = useHomeSectionNavigation()

    function handleSectionNavigation(event, section) {
        event.preventDefault()
        navigateToSection(section)
    }

    return (
        <FooterContainer>
            <FooterContent>
                <FooterColumns>
                    {/* Navegação */}
                    <FooterColumn>
                        <FooterTitle>Navegação</FooterTitle>

                        <FooterLinks>
                            {navigationLinks.map((link) => (
                                <FooterLink
                                    key={link.label}
                                    href={`/#${link.section}`}
                                    onClick={(event) =>
                                        handleSectionNavigation(event, link.section)
                                    }
                                >
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

                            <FooterLink
                                href="/#contato"
                                onClick={(event) =>
                                    handleSectionNavigation(event, 'contato')
                                }
                            >
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
                                    href="https://wa.me/5512987654321"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SocialIcon $type="whatsapp">
                                        <FaWhatsapp />
                                    </SocialIcon>
                                    WhatsApp
                                </FooterSocialLink>

                                <FooterSocialLink
                                    href="https://www.instagram.com/ypu.consultoria/"
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