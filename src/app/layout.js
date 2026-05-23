import Providers from '@/lib/Providers'

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
          {children}
        </Providers>
      </body>
    </html>
  )
}