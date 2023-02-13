// nextjs
import Head from 'next/head'
// components
import Page from '@/components/Page'
import Navbar from '@/components/Navbar'
import SocialMedia from '@/components/SocialMedia'
import BorderCard from '@/components/BorderCard'
import Introduction from '@/components/Introduction'

export default function Home() {
  return (
    <>
      <Head>
        <title>NengYi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <BorderCard 
            sx={{position: "relative",
            height: "50vh",
            width: "60vw",
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center'}}>
          <Navbar />
          <Introduction />
          <SocialMedia />
        </BorderCard>
      </Page>
    </>
  )
}
