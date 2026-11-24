
import Container from "@/components/ui/Container";

import {
    HeroContainer,
    HeroContent,
    HeroLeftColumn,
    HeroTexts,
    HeroEyebrow,
    HeroTitle,
    HeroDescription,
    HeroButton,
} from "./styles";

export default function Hero() {
    return (
        <HeroContainer id="inicio">
            <Container>
                <HeroContent>
                    <HeroLeftColumn>
                        <HeroTexts>
                            <HeroEyebrow>Consultoria Ambiental</HeroEyebrow>

                            <HeroTitle>
                                Ecoando ações socioambientais
                            </HeroTitle>

                            <HeroDescription>
                                Soluções ambientais responsáveis
                                para empresas e empreendimentos
                                no litoral norte de São Paulo.
                            </HeroDescription>
                        </HeroTexts>

                        <HeroButton href="#projetos">
                            Conheça nossos projetos
                        </HeroButton>
                    </HeroLeftColumn>
                </HeroContent>
            </Container>
        </HeroContainer>
    );
}
