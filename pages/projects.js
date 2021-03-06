import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page title="Projects" description="Collection of past and present work.">
      <article>
        <Entry
          title="Kivimenu"
          description="The simplest in restaurant business"
          image="https://i.snipboard.io/ZGFnJq.jpg"
          href="https://kivimenu.com/"
        />

        <Entry
          title="focircle"
          description="focircle is a bot that posts fotografs to tumblr, twitter"
          image="https://64.media.tumblr.com/1a45c9ae9b2fa3ddc3dee4723043870f/c5732907666409b4-d5/s2048x3072_c14516,0,84758,100000/9f213c770fd364a52ec66f963c21a9794ee4a3d2.png"
          href="https://focircle.tumblr.com/"
        />

        <Entry
          title="Hosmus"
          description="The beauty in the photo"
          image="https://i.imgur.com/4A9HloR.png"
          href="https://hosmus.com/"
        />

        <Entry
          title="Serenes"
          description="Serenes player for listen to music while working"
          image="https://i.imgur.com/nxhNoSl.jpg"
          href="https://serenes.space/"
        />

        <Entry
          title="IAmAlanWalker"
          description="Walkers Join!"
          image="https://i.imgur.com/lHsXJIn.jpg"
          href="https://iamalanwalker.com/"
        />

        <Entry
          title="Cryptosozluk"
          description="Alternative source of information for Cryptocurrency only"
          image="https://pbs.twimg.com/media/ENnYEq5XYAEGMBg?format=jpg"
          href="https://github.com/crypto-sozluk/crypto_sozluk"
          position="top"
        />

        <Entry
          title="Binance Bot"
          description="Order Cancel Order"
          image="https://public.bnbstatic.com/20190324/0ad6840b-d41f-4e5b-9f51-8284cf8beb0f.png"
          href="https://github.com/deeppaz/kullanisli-oco"
          position="top"
        />

        <Entry
          title="Alert tool"
          description="Alert tool for Binance exchange"
          image="https://www.cryptonewsz.com/wp-content/uploads/2019/04/Binance-coin-Cryptonewsz-03-1200x900.png"
          href="https://github.com/deeppaz/uyariciarac_binance"
          position="top"
        />
      </article>
    </Page>
  )
}

export default Projects
