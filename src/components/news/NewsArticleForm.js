import React, { useState, useEffect } from 'react';
import dbAPI from '../../modules/dbAPI';

const NewsArticleForm = (props) => {
    const [newsArticle, setNewsArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...newsArticle };
        stateToChange[evt.target.id] = evt.target.value;
        setNewsArticle(stateToChange);
    };

    const constructNewNewsArticle = evt => {
        evt.preventDefault();
        if (news.title === "" || news.url === "" || news.synopsis === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);

            const currentDateTime = new Date();

            const newNewsArticle = {
                id: props.match.params.newsArticleId,
                userId: news.userId,
                title: news.title,
                url: news.url,
                synopsis: news.synopsis,
                created_at: currentDateTime
            };

            dbAPI.postObjectByResource(newNewsArticle, activeUserId)
                .then(() => props.history.push("/news"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="add-news-form'">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            placeholder="News Article Title"
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            placeholder="URL"
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Synopsis"
                        />
                    </div>
                </fieldset>
                <div>
                    <button
                        className="save-new-news-button"
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewNewsArticle}
                    >Save News Article</button>
                </div>
            </form>
        </>
    )
}

export default NewsArticleForm;