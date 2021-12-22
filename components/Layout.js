import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout ({ children, title = 'Movebike' }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />

      </Head>
      <Navbar />
      {children}
    </>
  )
}