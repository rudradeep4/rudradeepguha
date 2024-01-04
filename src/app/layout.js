import { fonts } from './fonts'
import { Providers } from './providers'


export const metadata = {
  title: 'Rudradeep Guha',
  description: 'Personal website',
}

export default function RootLayout({children}) {
  return (
    <html lang='en' className={fonts.fragment_mono.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}