'use client'

import Container from '@/components/ui/Container'
import { HeaderContainer } from './styles'
import Image from 'next/image'
import { BiLogoWhatsapp } from 'react-icons/bi'

export default function Header() {
  return (
    <HeaderContainer>
      <Container>

        <div className="header-content">

          <div className='logo-container'>
            <div className='logo'>
              <Image
                src='/images/logo.png'
                alt='Logo da YPU'
                width={120}
                height={67}
                priority
              />
            </div>
          </div>

          <div>
            <nav className='navbar'>

              <ul className='nav-list'>

                <li className='nav-item'>
                  <a href='#'>Inicio</a>
                </li>

                <li className='nav-item'>
                  <a href='#'>Sobre</a>
                </li>

                <li className='nav-item'>
                  <a href='#'>Serviços</a>
                </li>

                <li className='nav-item'>
                  <a href='#'>Projetos</a>
                </li>

                <li className='nav-item'>
                  <a href='#'>Proficionais</a>
                </li>

                <li className='nav-item'>
                  <a href='#'>Contato</a>
                </li>

              </ul>
            </nav>
          </div>

          <div className='button-container'>
            <button className='contact-button'>
              <div className='contact-content'>                
                <BiLogoWhatsapp size={24} color='#FFFFFF' /> WhatsApp
              </div>
            </button>
          </div>

        </div>

      </Container>
    </HeaderContainer>
  )
}