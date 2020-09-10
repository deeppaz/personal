import { useState, useEffect } from 'react';

import fire from '../../config/fire-config';
import CreatePost from '../../components/CreatePost';
import Head from 'next/head';
import Link from 'next/link';
import Page from '@components/page'


const newpost = () => {
    return (
        <Page>
            <article>
                <Head>
                    <title>create new post | pure</title>
                </Head>
                <h1>New Post</h1>
                <CreatePost />
                <Link href="/blog">
                    <a>Back</a>
                </Link>
            </article>
        </Page>
    )
}
export default newpost;