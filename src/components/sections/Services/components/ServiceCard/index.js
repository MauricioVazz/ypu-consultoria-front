'use client'

import {
    ServiceCardContainer,
    ServiceCardContent,
    IconWrapper,
    ServiceTitle,
    AccentDivider,
    ServiceDescription,
} from './styles'

export default function ServiceCard({
    icon: Icon,
    title,
    description,
}) {
    return (
        <ServiceCardContainer>
            <ServiceCardContent>
                {Icon && (
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                )}

                <ServiceTitle>{title}</ServiceTitle>

                <AccentDivider />

                <ServiceDescription>
                    {description}
                </ServiceDescription>
            </ServiceCardContent>
        </ServiceCardContainer>
    )
}