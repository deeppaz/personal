import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="hey, i'm pure. full stack developer but usually Front-End , futuristic enthusiast, practicing minimalist. and unlimited music genre lover in search of flow. you can also hit social media accounts">
      <article>
        <h1>pure</h1>

        <p>
          full stack developer but usually Front-End ,{' '}
          <Link underline href="https://deeppaz.tumblr.com/archive">
            futuristic
          </Link>{' '}
            enthusiast, practicing minimalist. and{' '}
          <Link underline href="/music">
            unlimited music genre lover
          </Link>{' '}
            in search of flow.
        
            you can also hit {' '}
          <Link underline href="/about">
            social media accounts
          </Link>{' '}
        </p>

        <p>
          working with{' '}🥝
          <Link underline href="https://kivimenu.com" external>
            kivimenu
          </Link>{' '}
          to make restaurants faster and better.
        </p>
      </article>
    </Page>
  )
}

export default About
