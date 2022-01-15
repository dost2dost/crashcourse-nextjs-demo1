import style from '../styles/article.module.css'
import Article from './Article'



export default function ArticleList({articles}) {
    return (
        <div className={style.grid}>
            {articles.map((article) => (<Article article={article}/>))}
        </div>
    )
}
