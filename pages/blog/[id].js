import fire from '../../config/fire-config';
import Link from 'next/link'

import Page from '@components/page'


const Blog = (props) => {

  return (
    <Page>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
      <Link href="/blog">
        <a style={{color: "orangered", textDecoration: "none"}}>←back</a>
      </Link>
    </Page>
  )
}

export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().title;
      content['content'] = result.data().content;
    });

  return {
    props: {
      title: content.title,
      content: content.content,
    }
  }
}

export default Blog