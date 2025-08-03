import styles from '@/app/page.module.css'

export default function PopularArticles({src, alt, number, title, description}) {
    return (
        <div className={styles.popularArticle}>
            <img src={src} alt={alt}/>
            <div className={styles.popularDescription}>
                <p className={styles.popularArticleNr}>{number}</p>
                <p className={styles.popularArticleTitle}>{title}</p>
                <p className={styles.popularArticleDescription}>{description}</p>
            </div>
        </div>
    )
}