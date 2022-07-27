import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="hello there, it's pure. Front-End developer, futuristic enthusiast, practicing minimalist. and unlimited music genre lover in search of flow. you can also hit social media accounts">
      <article>
        <h1>pure</h1>

        <p>
          hello there, it's pure. Front-End developer ,{' '}
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
          working with{' '}˗ˏˋ ´ˎ˗
          <Link underline href="https://opaliv.com" external>
            pubinno
          </Link>{' '}
          to make the future of draft beer
        </p>
      </article>
    </Page>
  )
}

export default About
