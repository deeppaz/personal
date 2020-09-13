import { useState, useEffect } from 'react';

import fire from '../config/fire-config';
import CreatePost from '../components/CreatePost';
import Head from 'next/head';
import Link from 'next/link';
import Page from '@components/page'
import Entry from '@components/entry'


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [notification, setNotification] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    fire.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        })
    useEffect(() => {
        fire.firestore()
            .collection('blog')
            .onSnapshot(snap => {
                const blogs = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogs(blogs);
            });
    }, []);
    const handleLogout = () => {
        fire.auth()
            .signOut()
            .then(() => {
                setNotification('Logged out')
                setTimeout(() => {
                    setNotification('')
                }, 2000)
            });
    }
    return (
        <Page>
            <article>
                <Head>
                    <title>Blog | pure</title>
                </Head>
                <h1>Blog</h1>
                {notification}
                {!loggedIn
                    ?
                    <>
                        {/* <Link href="/users/register">
                            <a>Register</a>
                        </Link> |
                        <Link href="/users/login">
                            <a> Login</a>
                        </Link> */}
                    </>
                    :
                    <button style={{ float: "right", marginTop: "-4em" }} onClick={handleLogout}>Logout</button>
                }
                {/* <ul>
                    {blogs.map(blog =>
                        <li key={blog.id}>
                            <Link href="/blog/[id]" as={'/blog/' + blog.id}>
                                <a itemProp="hello">{blog.title}</a>
                            </Link>
                        </li>
                    )}
                </ul> */}
                {blogs.map(blog =>
                    <Entry
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        image={blog.image}
                        // href={entry.url}
                        href={'/blog/' + blog.id}

                    />
                )}
                {loggedIn &&
                    <CreatePost />
                }
            </article>
        </Page>
    )
}
export default Blog;