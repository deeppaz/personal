import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Contact" footer={false} description="Get in touch.">
      <article>
        <p>get in touch.</p>

        <blockquote>
          <a href="mailto:mail@puure.space?subject=Hello" className="reset">
            mail@puure.space
          </a>
        </blockquote>

        <blockquote>
          <a href="https://github.com/deeppaz" className="reset">
            my github profile
          </a>
        </blockquote>

        <blockquote>
          <a href="https://twitter.com/7fffd2" className="reset">
            twitter account
          </a>
        </blockquote>

        <blockquote>
          <a href="https://github.com/deeppaz" className="reset">
            linkedin
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
