import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Page from '@components/page'
import Link from '@components/link'

const Register = () => {
    const router = useRouter();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');
    const [notification, setNotification] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        if (password !== passConf) {
            setNotification(
                'Password and password confirmation does not   match'
            )
            setTimeout(() => {
                setNotification('')
            }, 2000)
            setPassword('');
            setPassConf('');
            return null;
        }
        fire.auth()
            .createUserWithEmailAndPassword(userName, password)
            .catch((err) => {
                console.log(err.code, err.message)
            });
        router.push("login")
    }
    return (
        <Page>
            <article>
                <Head>
                    <title>register page | pure</title>
                </Head>
                <h1>Create new user</h1>
                <hr />

                {notification}
                <form onSubmit={handleLogin}>
                    Email: <input type="text" value={userName}
                        onChange={({ target }) => setUsername(target.value)} />
                    <br />
        Password: <input type="password" value={password}
                        onChange={({ target }) => setPassword(target.value)} />
                    <br />
        Password conf: <input type="password" value={passConf}
                        onChange={({ target }) => setPassConf(target.value)} />
                    <br />
                    <button type="submit">register</button>{' '}
                    <Link underline href="login">
                        login
                    </Link>
                </form>
            </article>
        </Page>
    )
}
export default Register