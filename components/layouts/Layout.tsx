import { FC, ReactElement } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
  title?: string
  children?: ReactElement | ReactElement[]
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Gabriel Conte'></meta>
        <meta name='description' content={`Info sobre pokemon ${title}`}></meta>
        <meta name='keywords' content={`${title}, pokemon, pokedex`}></meta>
      </Head>
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  )
}
