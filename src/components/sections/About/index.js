'use client'

import Container from '@/components/ui/Container'
import EditorialRow from './components/EditorialRow'

import { AboutSection, AboutTitle } from './styles'

export default function About() {
    return (
        <AboutSection>
            <Container>
                <AboutTitle>Sobre Nós</AboutTitle>
                <EditorialRow
                    mediaPosition="right"
                    eyebrow="Quem somos"
                    title="Consultoria ambiental com visão técnica e responsabilidade territorial"
                    paragraphs={[
                        'A YPU Consultoria Ambiental atua na adequação ambiental de empreendimentos, oferecendo soluções técnicas eficientes, responsáveis e alinhadas às legislações vigentes.',
                        'Nossa atuação integra rigor técnico-científico, educação ambiental crítica e soluções baseadas na natureza para apoiar empresas na construção de práticas mais sustentáveis e conscientes.',
                    ]}
                    image={{
                        src: '/images/about.jpg',
                        alt: 'Vista aérea de praia e vegetação',
                    }}
                />
                <EditorialRow
                    mediaPosition="left"
                    eyebrow="Nossa Missão"
                    title="Promover soluções ambientais responsáveis e sustentáveis"
                    paragraphs={[
                        'Promovemos a adequação ambiental de empreendimentos com responsabilidade socioambiental, contribuindo para a conservação da biodiversidade e para o desenvolvimento sustentável do território.',
                        'Acreditamos que empresas e natureza podem coexistir de forma equilibrada através de planejamento, educação ambiental e soluções conscientes.',
                    ]}
                    image={{
                        src: '/images/about.jpg',
                        alt: 'Vista aérea de praia e vegetação',
                    }}
                />
                <EditorialRow
                    mediaPosition="right"
                    eyebrow="Nosso Diferencial"
                    title="Mais do que adequação ambiental, uma parceria estratégica"
                    paragraphs={[
                        'A YPU transforma a complexidade ambiental em soluções práticas, acessíveis e eficientes para empresas e empreendimentos.',
                        'Nosso compromisso é desburocratizar processos, reduzir riscos e gerar valor ambiental e social através de um atendimento próximo, técnico e humanizado.',
                        'Acreditamos que empresas e natureza podem coexistir de forma equilibrada através de planejamento, educação ambiental e soluções conscientes.',
                    ]}
                    image={{
                        src: '/images/about.jpg',
                        alt: 'Vista aérea de praia e vegetação',
                    }}
                />
            </Container>
        </AboutSection>
    )
}