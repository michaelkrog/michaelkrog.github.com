import Link from "next/link";
import React from "react";
import { ArticleMeta } from "../types/article";
import styles from "../styles/card.module.css";

interface IProps {
    article: ArticleMeta;
}

class Card extends React.Component<IProps> {
    
    builderArticleCard() {
        return <Link href={`/article/${this.props.article.slug}`}>
                <div className={styles.card}>
                    <img className="max-h-40 object-cover" src={this.props.article.thumbnail} />

                    <div className={styles.info}>
                        <h1>{this.props.article!.title}</h1>
                        <p>{this.props.article!.description}</p>
                    </div>
                    <div className="ml-4">
                        {this.props.article.tags.map(t => <sl-badge type="default">#{t}</sl-badge>)}
                    </div>
                </div>
            </Link>;
    }

    builderTeaserCard() {
        return  <div className={styles.card}>
                    <img className="max-h-40 object-cover" src={this.props.article!.thumbnail} />

                    <div className={styles.info}>
                        <h1>{this.props.article!.title}</h1>
                        <p>{this.props.article!.description}</p>
                    </div>
                    <div className="ml-4">
                    <sl-badge type="warning">Coming soon!</sl-badge>
                    </div>
                </div>;
    }

    render() {
        return (this.props.article?.teaser ? this.builderTeaserCard() : this.builderArticleCard());
    }
}

export default Card;