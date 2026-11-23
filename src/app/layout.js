import { Poppins } from 'next/font/google'

import Providers from '@/lib/Providers'
import ScrollRestoration from '@/components/ui/ScrollRestoration'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

export const metadata = {
    title: 'YPU Consultoria Ambiental',
    description: 'Consultoria ambiental em Caraguatatuba'
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={poppins.className}>
                <Providers>
                    <ScrollRestoration />
                    {children}
                </Providers>
            </body>
        </html>
    )
}