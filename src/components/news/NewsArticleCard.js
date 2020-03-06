import React from 'react';

const NewsArticleCard = (props) => {
    return (
        <div className="news-card-container">
            <h1>{props.news.title}</h1>
            <h3>{props.news.url}</h3>
            <p>{props.news.synopsis}</p>
        </div>
    )
}

export default NewsArticleCard;