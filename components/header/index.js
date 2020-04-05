import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './header.module.css'
import Command from '@components/command'
import Button from '@components/button'
import useTheme from '@lib/theme'
import {
  Moon,
  Sun,
  Book,
  M6,
  Music,
  Document,
  Pencil,
  ArrowRight,
  Twitter,
  GitHub,
  Search,
  RSS,

  Lightbulb,
  Quote,
  Logo as LogoIcon,
  Command as CommandIcon
} from '@components/icons'

const Logo = () => {
  return (
    <Link href="/">
      <a aria-label="Navigate Home" className={styles.home}>
        <LogoIcon />
      </a>
    </Link>
  )
}


const Header = ({ title, content }) => {
  const router = useRouter()
  const [hint, setHint] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (!localStorage.getItem('hide-hint')) {
      setHint(true)
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <Command
          max={5}
          width="calc(var(--main-content) - var(--gap))"
          top={
            hint && (
              <div className={styles.hint}>
                <div>
                  Press <kbd>⌘ K</kbd> to open this menu anywhere.
                </div>

                <Button
                  onClick={() => {
                    localStorage.setItem('hide-hint', '1')
                    setHint(false)
                  }}
                >
                  Got it
                </Button>
              </div>
            )
          }
          placeholder="Type a command or search..."
          options={[
            {
              name: 'Toggle theme',
              keybind: 't',
              icon: theme === 'light' ? <Moon /> : <Sun />,
              callback: () => toggleTheme()
            },
            {
              name: 'Collections',
              collection: true,
              items: [
                {
                  name: 'Projects',
                  keybind: 'g p',
                  icon: <Document />,
                  callback: () => router.push('/projects')
                },
                {
                  name: 'About',
                  keybind: 'g a',
                  icon: <Quote />,
                  callback: () => router.push('/about')
                },
                {
                  name: 'Music',
                  keybind: 'g m',
                  icon: <Music />,
                  callback: () => router.push('/music')
                }
              ]
            },
            {
              name: 'Navigation',
              collection: true,
              items: [
                {
                  name: 'Home',
                  keybind: 'g h',
                  icon: <ArrowRight />,
                  callback: () => router.push('/')
                },
                {
                  name: 'Contact',
                  keybind: 'g c',
                  icon: <ArrowRight />,
                  callback: () => router.push('/contact')
                }
              ]
            },
            {
              name: 'Social',
              collection: true,
              items: [
                {
                  name: 'Twitter',
                  icon: <Twitter />,
                  callback: () =>
                    window.open('https://twitter.com/7fffd2', '_blank')
                },
                {
                  name: 'GitHub',
                  icon: <GitHub />,
                  callback: () =>
                    window.open('https://github.com/deeppaz', '_blank')
                }
              ]
            }
          ]}
        >
          <button className={styles.command} title="⌘K">
            <CommandIcon />
          </button>
        </Command>
        {content && <div className={styles.content}>{content}</div>}
      </div>
    </nav>
  )
}

export default Header
