import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  title: string
  siteName: string
}

const SEO = ({ title, siteName }: Props) => {
  const router = useRouter()
  let DEFAULT_OG_IMAGE = ''

  return (
    <Head>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <title key='title'>{`${title}${siteName ? ' | ' + siteName : ''}`}</title>
      <meta name='description' content={"Hey, I'm Mikhail, frontend developer passionate about web development."} />
      <meta key='og_type' property='og:type' content='website' />
      <meta key='og_title' property='og:title' content={title} />
      <meta
        key='og_description'
        property='og:description'
        content={"Hey, I'm Mikhail, frontend developer passionate about web development."}
      />
      <meta key='og_locale' property='og:locale' content='en_IE' />
      <meta key='og_site_name' property='og:site_name' content={siteName} />
      <meta key='og_url' property='og:url' content={router.basePath} />
      <meta key='og_site_name' property='og:site_name' content={siteName} />
      <meta name='theme-color' content='#EEEEEE' />

      <meta name='robots' content='index,follow' />

      <link rel='apple-touch-icon' sizes='180x180' href='/apple_touch_icon.png' />
      
    </Head>
  )
}

export default SEO
