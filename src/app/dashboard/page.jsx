"use client"
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
  const router = useRouter()

  let loggedIn = "authenticated"
  // if user is not logged in route user to login page
  if (loggedIn == "authenticated") {
    router.replace('/login')
  }
  else {
    return (
      <>
        <Head>
          <>
            <meta name="description" content="Discover trendy clothing at our online store. Shop the latest styles in fashion, dresses, shirts, and accessories." />
            <meta name="keywords" content="clothing, fashion, trendy, apparel, dresses, shirts, accessories, online store" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="UTF-8" />
          </>

        </Head>
        <div>
          <h2>Hello, this is the dashboard</h2>
        </div>
      </>
    )

  }



}
