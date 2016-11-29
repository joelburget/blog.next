import React from 'react'
import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="building the best software i know how. we who cut mere stones must always be envisioning cathedrals" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Joel Burget</title>
    </Head>
    {children}
  </div>
)
