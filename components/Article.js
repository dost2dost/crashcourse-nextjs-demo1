import style from '../styles/Article.module.css'
import Link from 'next/link'

export default function Article({ article }) {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={style.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{ article.body}</p>
            </a>
        
        </Link>
    )
}

