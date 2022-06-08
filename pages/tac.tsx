import type { NextPage } from 'next'
import Head from 'next/head'
import FirstFrame from 'components/TaC/FirstFrame'
import LastFrame from 'components/TaC/LastFrame'

const TaC: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Destoria Terms and Conditions</title>
        <meta name="description" content="Terms and conditions of the Destoria website." />
        <link rel="icon" href="/dest-favicon.svg" />
      </Head>
      <FirstFrame />
      <LastFrame />
      <main>
      </main>
    </div>
  )
}

export default TaC
