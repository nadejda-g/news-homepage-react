import logo from '@/public/images/logo.svg'
import styles from '@/app/page.module.css'

export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <img src={logo.src} alt={'Logo'}/>
            <div className={styles.navBarButtons}>
                <a href="/">Home</a>
                <a href="/">New</a>
                <a href="/">Popular</a>
                <a href="/">Trending</a>
                <a href="/">Categories</a>
            </div>
        </div>
    )
}