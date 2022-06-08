import type { NextPage } from 'next'
import Head from 'next/head'
import FirstFrame from 'components/Privacy/FirstFrame'
import LastFrame from 'components/Privacy/LastFrame'

const Privacy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Destoria Privacy Policy</title>
        <meta name="description" content="Destoria privacy policy" />
        <link rel="icon" href="/dest-favicon.svg" />
      </Head>
      <FirstFrame />
      <LastFrame />
      <main>
      </main>
    </div>
  )
}

export default Privacy
