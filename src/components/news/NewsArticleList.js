import React, { useState, useEffect } from 'react';
import NewsArticleCard from './NewsArticleCard';
import dbAPI from '../../modules/dbAPI';

const NewsArticleList = (props) => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 

    const getNewsArticles = () => {
        return dbAPI.getObjectByResource("newsArticles", 1).then(newsFromAPI => {
            setNewsArticles(newsFromAPI)
        })
    }

    const handleDeleteNewsArticle = (id) => {
        if(window.confirm("Are you sure you want to delete this news article?")) {
            setIsLoading(true);
            dbAPI.deleteObjectByResource("newsArticles", id)
                .then(() => dbAPI.getObjectByResource("newsArticles", 1).then(setNewsArticles))
        }
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
                    props.history.push("/newsArticles/new")
                }}
                >Add News Article</button>
                </div>
                <div className="news-cards-container">
                    {newsArticles.map(newsArticle =>
                        <NewsArticleCard 
                        key={newsArticle.id}
                        newsArticle={newsArticle}
                        handleDeleteNewsArticle={handleDeleteNewsArticle}
                        disabled={isLoading}
                        {...props}
                        />)}
                </div>
            </section>
        </>
    )
}

export default NewsArticleList;