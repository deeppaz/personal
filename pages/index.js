import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="hello there, it's serhat. front-end developer, futuristic enthusiast, practicing minimalist. and unlimited music genre lover in search of flow. you can also hit social media accounts">
      <article>
        <h1>pure</h1>

        <p>
          hello there, it's serhat. frontend developer,{' '}
          <Link underline href="https://deeppaz.tumblr.com/archive">
            futuristic
          </Link>{' '}
            enthusiast, practicing minimalist. and{' '}
          <Link underline href="/music">
            unlimited music genre lover
          </Link>{' '}
            in search of flow.
        
            you can also hit {' '}
          <Link underline href="/contact">
            social media accounts
          </Link>{' '}
        </p>

        <p>
          working with{' '}
          <Link underline href="https://pubinno.com" external>
            pubinno
          </Link>{' '}
          to make the future of draft beer (•‿‿•)
        </p>
      </article>
    </Page>
  )
}

export default About
