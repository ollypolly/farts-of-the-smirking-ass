import 'tailwindcss/tailwind.css'
// Import tailwind preflight styles
import 'tailwindcss/base.css'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import { FartCursor } from 'components/FartCursor'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = dynamic(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <FartCursor>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      {draftMode && <VisualEditing />}
    </FartCursor>
  )
}
