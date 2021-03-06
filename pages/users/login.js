import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router'

import Head from 'next/head'
import Page from '@components/page'
import Link from '@components/link'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notify, setNotification] = useState('');
    const router = useRouter();
    const handleLogin = (e) => {
        e.preventDefault();
        fire.auth()
            .signInWithEmailAndPassword(username, password)
            .catch((err) => {
                console.log(err.code, err.message)
                setNotification(err.message)
                setTimeout(() => {
                    setNotification('')
                }, 2000)
            })
        setUsername('')
        setPassword('')
        router.push("/blog")
    }
    return (
        <Page>
            <article>
                <Head>
                    <title>login page | pure</title>
                </Head>
                <h1>Login</h1>
                <hr />

                {notify}
                <form onSubmit={handleLogin}>
                    Email: <input type="text" value={username}
                        onChange={({ target }) => setUsername(target.value)} />
                    <br />
                    Password: <input type="password" value={password}
                        onChange={({ target }) => setPassword(target.value)} />
                    <br />
                    <button type="submit">Login</button>{' '}
                    <Link underline href="register">
                        register
                    </Link>
                </form>
            </article>
        </Page>
    )
}
export default Login
