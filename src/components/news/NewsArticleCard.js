import React from 'react';

const NewsArticleCard = (props) => {
    return (
        <div className="news-card-container">
            <h1>{props.newsArticle.title}</h1>
            <h3>{props.newsArticle.url}</h3>
            <p>{props.newsArticle.synopsis}</p>
        </div>
    )
}

export default NewsArticleCard;