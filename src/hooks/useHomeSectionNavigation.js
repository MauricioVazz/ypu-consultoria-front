'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function useHomeSectionNavigation() {
    const router = useRouter()
    const pathname = usePathname()

    const pendingSection = useRef(null)

    useEffect(() => {
        if (pathname !== '/' || !pendingSection.current) return

        const sectionId = pendingSection.current
        pendingSection.current = null

        requestAnimationFrame(() => {
            const section = document.getElementById(sectionId)

            section?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    }, [pathname])

    function navigateToSection(sectionId) {
        if (pathname !== '/') {
            pendingSection.current = sectionId
            router.push('/')
            return
        }

        const section = document.getElementById(sectionId)

        section?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return navigateToSection
}