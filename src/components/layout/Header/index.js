'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoWhatsapp } from 'react-icons/bi'
import { FiMenu, FiX } from 'react-icons/fi'

import Container from '@/components/ui/Container'
import { HeaderContainer } from './styles'

import useHomeSectionNavigation from '@/hooks/useHomeSectionNavigation'

const navigation = [
    { label: 'Início', section: 'inicio' },
    { label: 'Sobre', section: 'sobre' },
    { label: 'Serviços', section: 'servicos' },
    { label: 'Projetos', section: 'projetos' },
    { label: 'Profissionais', section: 'profissionais' },
    { label: 'Contato', section: 'contato' },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navigateToSection = useHomeSectionNavigation()

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <HeaderContainer>
            <Container>
                <div className="header-content">

                    <Link
                        href="/#inicio"
                        className="logo"
                        onClick={(event) => {
                            event.preventDefault()
                            closeMenu()
                            navigateToSection('inicio')
                        }}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Logo da YPU"
                            width={105}
                            height={59}
                            priority
                        />
                    </Link>

                    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">
                            {navigation.map((item) => (
                                <li className="nav-item" key={item.label}>
                                    <a
                                        href={`/#${item.section}`}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            closeMenu()
                                            navigateToSection(item.section)
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <a
                            href="https://wa.me/5512987654321"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            <BiLogoWhatsapp size={21} />
                            <span>WhatsApp</span>
                        </a>

                        <button
                            type="button"
                            className="menu-toggle"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
                        </button>
                    </div>

                </div>
            </Container>
        </HeaderContainer>
    )
}