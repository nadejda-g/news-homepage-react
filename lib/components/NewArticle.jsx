import styles from '@/app/page.module.css'

export default function NewArticle({title, description}) {
    return (
        <div className={styles.newArticleCard}>
            <p className={styles.newArticleTitle}>{title}</p>
            <p className={styles.newArticleDescription}>{description}</p>
        </div>
    )
}