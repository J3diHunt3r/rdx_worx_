import React from 'react'
import Head from 'next/head'
import siteConfig from '#data/config'

interface SEOProps {
  title: string
  description: string
  [key: string]: any // For any additional props you might need to add
}

export const SEO = ({ title, description, ...props }: SEOProps) => {
  const fullTitle = `${title} | ${siteConfig.seo.titleTemplate}`; // Or handle your title as needed

  return (
    <Head>
      {/* SEO Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Additional tags from props */}
      {Object.entries(props).map(([key, value]) => (
        <meta key={key} name={key} content={value as string} />
      ))}
    </Head>
  )
}
