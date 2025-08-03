import logo from '@/public/images/logo.svg'
import styles from '@/app/page.module.css'
import {useState} from "react";

export default function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={styles.navBarMobile}>
                <img src={logo.src} alt={'Logo'}/>
                <button onClick={() => {
                    setIsOpen(true)
                }}>{isOpen ? 'close' : 'open'}</button>
            </div>

            <div className={styles.navbarFlyout} style={{ left: isOpen ? 0 : '100%' }}>
                <div className={styles.mobileFlyoutContainer}>
                    <button onClick={() => {
                        setIsOpen(false)
                    }}>close
                    </button>
                    <div className={styles.navBarButtonsMobile}>
                        <a href="/">Home</a>
                        <a href="/">New</a>
                        <a href="/">Popular</a>
                        <a href="/">Trending</a>
                        <a href="/">Categories</a>
                    </div>
                </div>
            </div>
        </>

    )
}