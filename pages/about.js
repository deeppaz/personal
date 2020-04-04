import Page from '@components/page'
import getMarkdown from '@lib/get-markdown'
import Link from '@components/link' // eslint-disable-line

const Quotes = ({ html }) => {
  return (
    <Page
      title="About"
      description="about me "
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const md = await getMarkdown('data/aboutme.md')

  return {
    props: {
      html: md
    }
  }
}

export default Quotes
