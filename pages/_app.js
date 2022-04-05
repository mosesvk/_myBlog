import {useEffect, useState} from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import {Layout} from '../components'

import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
