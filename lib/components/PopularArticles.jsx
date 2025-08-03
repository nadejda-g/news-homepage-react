import styles from '@/app/page.module.css'

export default function PopularArticles({src, alt, number, title, description}) {
    return (
        <div className={styles.popularArticle}>
            <img src={src} alt={alt}/>
            <div className={styles.popularDescription}>
                <p>{number}</p>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}