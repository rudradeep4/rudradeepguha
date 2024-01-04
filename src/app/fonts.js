import { Fragment_Mono } from 'next/font/google'

const fragment_mono = Fragment_Mono({
  subsets: ['latin'],
  variable: '--font-fragment_mono',
  weight: '400'
})

export const fonts = {
  fragment_mono,
}