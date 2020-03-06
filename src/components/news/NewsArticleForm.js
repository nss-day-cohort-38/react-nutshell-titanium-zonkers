import React, { useState } from 'react';
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
        if (newsArticle.title === "" || newsArticle.url === "" || newsArticle.synopsis === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);

            const currentDateTime = new Date();

            const newNewsArticle = {
                id: props.match.params.newsArticleId,
                userId: 1,
                title: newsArticle.title,
                url: newsArticle.url,
                synopsis: newsArticle.synopsis,
                created_at: currentDateTime
            };

            dbAPI.postObjectByResource("newsArticles", newNewsArticle)
                .then(() => props.history.push("/newsArticles"));
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
                <div className="save-new-news-button-container">
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