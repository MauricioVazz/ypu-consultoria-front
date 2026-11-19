
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { FiMenu, FiX } from 'react-icons/fi';

import Container from '@/components/ui/Container';
import { HeaderContainer } from './styles';

const navigation = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Profissionais', href: '#profissionais' },
    { label: 'Contato', href: '#contato' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <HeaderContainer>
            <Container>
                <div className="header-content">

                    <a href="#inicio" className="logo" onClick={closeMenu}>
                        <Image
                            src="/images/logo.png"
                            alt="Logo da YPU"
                            width={105}
                            height={59}
                            priority
                        />
                    </a>

                    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">
                            {navigation.map((item) => (
                                <li className="nav-item" key={item.label}>
                                    <a href={item.href} onClick={closeMenu}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <a
                            href="#"
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
    );
}
