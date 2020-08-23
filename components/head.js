import NextHead from 'next/head'

const defaultOgImage =
  'https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572673557/og-image_budbm8.png'

const Head = ({
  title = 'pure',
  description = "hey, I'm pure. full stack developer",
  image = defaultOgImage,
  children
}) => {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://puure.space" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@7fffd2" />
      <meta name="apple-mobile-web-app-title" content="pure" />
      <meta name="author" content="pure" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for puure.space"
        href="/feed.xml"
      />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/x-icon"
        sizes="32x32"
        href="/favicon/favicon.ico"
      />
      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16"
        href="/favicon/favicon.ico"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {children}
    </NextHead>
  )
}

export default Head
