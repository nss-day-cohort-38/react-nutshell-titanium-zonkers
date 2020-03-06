import React from 'react';
import { Link } from 'react-router-dom';

const NewsArticleCard = () => {
    return (
        <div className="news-card-container">
            <h1>{news.title}</h1>
            <h3>{news.url}</h3>
            <p>{news.synopsis}</p>
        </div>
    )
}

export default NewsArticleCard;