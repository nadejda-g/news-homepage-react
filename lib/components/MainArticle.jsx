import styles from '@/app/page.module.css'
import bannerImg from '@/public/images/image-web-3-desktop.jpg'

export default function MainArticle() {
    return (
        <div className={styles.mainArticle}>
            <img src={bannerImg.src} alt={'bannerImage'} className={styles.bannerImage}/>
            <div className={styles.mainTitle}>
                <p>The Bright Future of Web 3.0?</p>
                <div className={styles.mainText}>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}