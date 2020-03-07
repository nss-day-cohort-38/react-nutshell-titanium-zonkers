import React, { useState, useEffect } from 'react';
import NewsArticleCard from './NewsArticleCard';
import dbAPI from '../../modules/dbAPI';
import { Button } from "semantic-ui-react";
import './NewsArticle.css';

const NewsArticleList = (props) => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const activeUserId = parseInt(sessionStorage.getItem("userId"));

    const getNewsArticles = () => {
        return dbAPI.getObjectByResource("newsArticles", activeUserId).then(newsFromAPI => {
            const sortedNewsFromAPI = newsFromAPI.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at)
            })
            setNewsArticles(sortedNewsFromAPI)
        })
    }

    const handleDeleteNewsArticle = (id) => {
            setIsLoading(true);
            dbAPI.deleteObjectByResource("newsArticles", id)
                .then(() => dbAPI.getObjectByResource("newsArticles", activeUserId).then(newsFromAPI => {
                    const sortedNewsFromAPI = newsFromAPI.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at)
                    })
                    setNewsArticles(sortedNewsFromAPI)
                }))
        
    }

    useEffect(() => {
        getNewsArticles();
    }, []);

    if (newsArticles.length === 0) {
        return (
            <>
                <section className="news-content-container">
                    <div className="add-news-button-container">
                        <Button
                            onClick={() => {
                                props.history.push("/newsArticles/new")
                            }}
                        >Add News Article</Button>
                    </div>
                    <div className="no-news-message-container">
                        <h1 className="no-news-message">You have no saved news articles.</h1>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            <>
                <section className="news-content-container">
                    <div className="add-news-button-container">
                        <Button
                            onClick={() => {
                                props.history.push("/newsArticles/new")
                            }}
                        >Add News Article</Button>
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
}

export default NewsArticleList;







// import React, { useState, useEffect } from 'react';
// import NewsArticleCard from './NewsArticleCard';
// import dbAPI from '../../modules/dbAPI';
// import { Button } from "semantic-ui-react";

// const NewsArticleList = (props) => {
//     const [newsArticles, setNewsArticles] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const activeUserId = parseInt(sessionStorage.getItem("userId"));

//     const getNewsArticles = () => {
//         return dbAPI.getObjectByResource("newsArticles", activeUserId).then(newsFromAPI => {
//             const sortedNewsFromAPI = newsFromAPI.sort((a,b) => {
//                 return new Date(b.created_at) - new Date(a.created_at)
//             })
//             setNewsArticles(sortedNewsFromAPI)
//         })
//     }

//     const handleDeleteNewsArticle = (id) => {
//         if (window.confirm("Are you sure you want to delete this news article?")) {
//             setIsLoading(true);
//             dbAPI.deleteObjectByResource("newsArticles", id)
//                 .then(() => dbAPI.getObjectByResource("newsArticles", activeUserId).then(setNewsArticles))
//         }
//     }

//     useEffect(() => {
//         getNewsArticles();
//     }, []);

//     if (newsArticles.length === 0) {
//         return (
//             <>
//                 <section className="news-content-container">
//                     <div className="add-news-button-container">
//                         <button
//                             type="button"
//                             className="add-news-button"
//                             onClick={() => {
//                                 props.history.push("/newsArticles/new")
//                             }}
//                         >Add News Article</button>
//                     </div>
//                     <div className="no-news-message-container">
//                         <h1 className="no-news-message">You have no saved news articles.</h1>
//                     </div>
//                 </section>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <section className="news-content-container">
//                     <div className="add-news-button-container">
//                         <button
//                             type="button"
//                             className="add-news-button"
//                             onClick={() => {
//                                 props.history.push("/newsArticles/new")
//                             }}
//                         >Add News Article</button>
//                     </div>
//                     <div className="news-cards-container">
//                         {newsArticles.map(newsArticle =>
//                             <NewsArticleCard
//                                 key={newsArticle.id}
//                                 newsArticle={newsArticle}
//                                 handleDeleteNewsArticle={handleDeleteNewsArticle}
//                                 disabled={isLoading}
//                                 {...props}
//                             />)}
//                     </div>
//                 </section>
//             </>
//         )
//     }
// }

// export default NewsArticleList;