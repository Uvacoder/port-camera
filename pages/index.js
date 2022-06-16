import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Camera</title>
        <meta name="description" content="Camera app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Camera app
        </h1>

        <div className={styles.grid}>
	  <Link href="/photos">
            <a className={styles.card}>
              <h2>Photos</h2>
              <p>Photos from camera</p>
            </a>
	  </Link>

	  <Link href="/videos">
            <a className={styles.card}>
              <h2>Videos</h2>
              <p>Videos from camera</p>
            </a>
	  </Link>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
