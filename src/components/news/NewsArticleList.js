import React, { useState, useEffect } from 'react';
import NewsArticleCard from './NewsArticleCard';
import dbAPI from '../../modules/dbAPI';

const NewsArticlesList = (props) => {
    const [newsArticles, setNewsArticles] = useState([]);

    // const activeUserId = 

    const getNewsArticles = () => {
        return dbAPI.getObjectByResource(newsArticles, activeUserId).then(newsFromAPI => {
            setNewsArticles(newsFromAPI)
        })
    }

    useEffect(() => {
        getNewsArticles();
    }, []);

    return (
        <>
            <section className="news-content-container">
                <div className="add-news-button-container">
                <button
                type="button"
                className="add-news-button"
                onClick={() => {
                    props.history.push("/news/new")
                }}
                >Add News Article</button>
                </div>
                <div className="news-cards-container">
                    {newsArticles.map(newsArticle =>
                        <NewsArticleCard 
                        key={newsArticle.id}
                        newsArticle={newsArticle}
                        />)}
                </div>
            </section>
        </>
    )
}

export default NewsArticlesList