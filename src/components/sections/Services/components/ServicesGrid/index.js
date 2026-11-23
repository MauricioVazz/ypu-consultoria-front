'use client'

import ServiceCard from '../ServiceCard'
import { ServicesGridContainer } from './styles'

export default function ServicesGrid({ items = [] }) {
    return (
        <ServicesGridContainer>
            {items.map((item, index) => (
                <ServiceCard
                    key={item.id ?? index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </ServicesGridContainer>
    )
}