import styles from '../styles/blog.module.css'
import Card from '../components/Card'
import fs from 'fs'
import matter from 'gray-matter'
import { ArticleMeta } from '../types/article'
import { FunctionComponent } from 'react'
import { Base } from '../templates/Base'

interface IProps {
    articles: ArticleMeta[];
}

const Blog: FunctionComponent<IProps> = ({ articles }) => {
    return (
        <Base hero="" title="#designthinking, #simplicity, #softwarearchitecture and #mentalhealth" description="This is a blog that gives you advice and insight into #designthinking, #simplicity, #softwarearchitecture and how to maintain focus and #mentalhealth with in a stressfull world.">
        <div className={styles.container}>
        {
            articles.map((article, i) => (
                <Card key={i} article={article} />
            ))
        }
        </div>
        </Base>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync("articles");
    
    let articles = files.map(file => {
        
        const data = fs
            .readFileSync(`articles/${file}`)
            .toString();

        return {
            ...matter(data).data,
            slug: file.split('.')[0]
        };
    });

    return {
        props: {
            articles: articles
        }
    };
}

export default Blog;