import Providers from '@/lib/Providers'

import ScrollRestoration from '@/components/ui/ScrollRestoration';

export const metadata = {
  title: 'YPU Consultoria Ambiental',
  description:
    'Consultoria ambiental em Caraguatatuba'
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <ScrollRestoration />
          {children}
        </Providers>
      </body>
    </html>
  )
}