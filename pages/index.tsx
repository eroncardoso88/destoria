import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from 'styles'
import FirstFrame from 'components/Home/FirstFrame'
import dynamic from 'next/dynamic'
import CharactersCarousel from 'components/Home/CharactersCarousel'

const CardCarousel = dynamic(
  () => import('components/Home/CardsCarousel'),
  { ssr: false }
)

const AnimatedGallery = dynamic(
  () => import('components/Home/AnimatedGallery'),
  { ssr: false }
)

const LastFrame = dynamic(
  () => import('components/Home/LastFrame'),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Destoria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstFrame />
      <CardCarousel />
      <CharactersCarousel />
      <AnimatedGallery />
      <LastFrame />
      <main>
      </main>
    </div>
  )
}

export default Home
