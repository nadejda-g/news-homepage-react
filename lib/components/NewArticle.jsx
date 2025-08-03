import styles from '@/app/page.module.css'

export default function NewArticle({title, description}) {
    return (
        <div className={styles.newArticleCard}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}