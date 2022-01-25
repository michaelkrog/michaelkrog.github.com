import { FunctionComponent } from "react";
import fs from 'fs';
import matter from "gray-matter";
import styles from '../../styles/article.module.css';
import { ArticleInfo } from "../../types/article";
import { Base } from '../../templates/Base';
import Markdown from "../../components/Markdown";
import Head from "next/head";
import { useRouter } from "next/router";

interface IProps {
    article: ArticleInfo;
}

const Article: FunctionComponent<IProps> = ({ article }) => {
    const router = useRouter()
    const url = `https://michaelkrog.dev${router.asPath}`;
    const imageUrl = `https://michaelkrog.dev${article.meta.thumbnail}`;

    return <Base title={article.meta.title} description={article.meta.description}>
        <Head>
            <meta property="og:type" content="article"></meta>
            <meta property="og:title" content={article.meta.title}></meta>
            <meta property="og:url" content={url}></meta>
            <meta property="og:description" content={article.meta.description}></meta>
            <meta property="article:author" content="Michael Krog"></meta>
            {article.meta.tags.map(t => <meta property="article:tag" content={t}></meta>)}
            
            <meta property="og:image" content={imageUrl} />
        </Head>
        <div className={styles.article}>
            <div className={styles.thumbnail}>
                <img src={article.meta.thumbnail} />

                <div className={styles.title}>
                    <h1>{article.meta.title}</h1>
                </div>
            </div>

            <div className={styles.content}>
                <Markdown content={article.content} />
            </div>
        </div>
    </Base>
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;

    const content = fs
        .readFileSync(`articles/${slug}.md`)
        .toString();

    const info = matter(content);

    const article = {
        meta: {
            ...info.data,
            slug
        },
        content: info.content
    }

    return {
        props: {
            article: article
        }
    }
}

export async function getStaticPaths() {
    const files = fs.readdirSync("articles");
    const paths = files.map(file => ({
        params: {
            slug: file.split('.')[0]
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export default Article;
