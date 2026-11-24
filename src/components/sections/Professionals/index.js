'use client'

import Container from '@/components/ui/Container'
import ProfessionalsRow from './components/ProfessionalsRow'

import { ProfessionalsTextSection, ProfessionalsTextTitle } from './styles'

export default function ProfessionalsText() {
    return (
        <ProfessionalsTextSection>
            <Container>
                <ProfessionalsTextTitle>Nossos Profissionais</ProfessionalsTextTitle>
                <ProfessionalsRow
                    mediaPosition="right"
                    eyebrow="Engenheiro Ambiental"
                    title="Fulano de Tal"
                    education="Engenharia Ambiental — Universidade Exemplo"
                    registration="CREA-SP 000000"
                    paragraphs={[
                        'Profissional com experiência em licenciamento e gestão ambiental.',
                        'Atua no desenvolvimento de soluções técnicas para empreendimentos.',
                    ]}
                    areas={[
                        'Licenciamento Ambiental',
                        'Gestão Ambiental',
                        'Estudos Ambientais',
                    ]}
                    image={{
                        src: '/images/about.jpg',
                        alt: 'Retrato do profissional Fulano de Tal',
                    }}
                />
                <ProfessionalsRow
                    mediaPosition="left"
                    eyebrow="Engenheiro Ambiental"
                    title="Fulano de Tal"
                    education="Engenharia Ambiental — Universidade Exemplo"
                    registration="CREA-SP 000000"
                    paragraphs={[
                        'Profissional com experiência em licenciamento e gestão ambiental.',
                        'Atua no desenvolvimento de soluções técnicas para empreendimentos.',
                    ]}
                    areas={[
                        'Licenciamento Ambiental',
                        'Gestão Ambiental',
                        'Estudos Ambientais',
                    ]}
                    image={{
                        src: '/images/about.jpg',
                        alt: 'Retrato do profissional Fulano de Tal',
                    }}
                />
            </Container>
        </ProfessionalsTextSection>
    )
}