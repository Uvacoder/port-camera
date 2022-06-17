import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a className={styles.brand}><b>Camera</b></a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/photos">
            <a className={styles.link}>Photos</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/videos">
            <a className={styles.link}>Videos</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
