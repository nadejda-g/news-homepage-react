import styles from '@/app/page.module.css'

export default function NewArticle({title, description}) {
    return (
        <>
            <p>{title}</p>
            <p>{description}</p>
        </>
    )
}