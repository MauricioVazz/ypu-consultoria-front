'use client'

import Container from '@/components/ui/Container'
import ServicesGrid from './components/ServicesGrid'

import {
    FaLeaf,
    FaClipboardCheck,
    FaRecycle,
    FaTree,
    FaGraduationCap,
    FaBalanceScale,
    FaSeedling,
} from 'react-icons/fa'

import { ServicesSection, ServicesTitle } from './styles'

const services = [
    {
        id: 1,
        title: 'Adequação Ambiental',
        description: 'Auxiliamos empreendimentos na adequação ambiental de forma técnica, responsável e alinhada às legislações vigentes.',
        icon: FaLeaf,
    },
    {
        id: 2,
        title: 'Licenciamento Ambiental',
        description: 'Atuamos no suporte técnico e estratégico para processos de licenciamento ambiental com mais segurança e eficiência.',
        icon: FaClipboardCheck,
    },
    {
        id: 3,
        title: 'Gestão de Resíduos Sólidos',
        description: 'Desenvolvemos soluções para gerenciamento adequado de resíduos, promovendo responsabilidade ambiental e redução de impactos.',
        icon: FaRecycle,
    },
    {
        id: 4,
        title: 'Recuperação de Áreas Degradadas',
        description: 'Planejamos ações voltadas à recuperação ambiental e reestruturação ecológica de áreas impactadas.',
        icon: FaTree,
    },
    {
        id: 5,
        title: 'Educação Ambiental',
        description: 'Promovemos ações de educação ambiental crítica para fortalecer a consciência socioambiental e o desenvolvimento sustentável.',
        icon: FaGraduationCap,
    },
    {
        id: 6,
        title: 'Consultoria em ESG',
        description: 'Auxiliamos empresas na implementação de práticas ESG alinhadas à sustentabilidade, governança e responsabilidade social.',
        icon: FaBalanceScale,
    },
    {
        id: 7,
        title: 'Soluções Baseadas na Natureza',
        description: 'Aplicamos estratégias sustentáveis inspiradas nos processos naturais para gerar benefícios ambientais, sociais e econômicos.',
        icon: FaSeedling,
    }
]

export default function Services() {
    return (
        <ServicesSection>
            <Container>
                <ServicesTitle>Serviços</ServicesTitle>
                <ServicesGrid items={services} />
            </Container>
        </ServicesSection>
    )
}
