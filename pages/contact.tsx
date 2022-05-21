import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from 'styles'
import FirstFrame from 'components/Contact/FirstFrame'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Destoria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstFrame />
      <main>
      </main>
    </div>
  )
}

export default Contact