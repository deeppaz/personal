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
      </article>
    </Page>
  )
}

export default Contact
