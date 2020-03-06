import React, { useEffect, useState } from 'react';
import dbAPI from '../../modules/dbAPI';

const NewsArticleEditForm = (props) => {
    const [newsArticle, setNewsArticle] = useState({title: "", url: "", synopsis: ""});
    const [isLoading, setIsLoading] = useState(false);

    const activeUserId = parseInt(sessionStorage.getItem("userId"));

    const handleFieldChange = evt => {
        const stateToChange = { ...newsArticle };
        stateToChange[evt.target.id] = evt.target.value;
        setNewsArticle(stateToChange);
    };

    const updateExistingNewsArticle = evt => {
        evt.preventDefault();
        if (newsArticle.title === "" || newsArticle.url === "" || newsArticle.synopsis === "") {
            window.alert("Please fill out all fields");
        } else {

            setIsLoading(true);

            const currentDateTime = new Date();
            
            const editedNewsArticle = {
                id: props.match.params.newsArticleId,
                userId: activeUserId,
                title: newsArticle.title,
                url: newsArticle.url,
                synopsis: newsArticle.synopsis,
                created_at: currentDateTime
            };

            dbAPI.putObjectByResource("newsArticles", editedNewsArticle)
                .then(() => {
                    props.history.push("/newsArticles")
                });
        }
    }

    useEffect(() => {
        dbAPI.fetchObjectById("newsArticles", props.match.params.newsArticleId)
          .then(newsArticle => {
            setNewsArticle(newsArticle);
            setIsLoading(false);
          });
      }, []);

    return (
        <>
            <form>
                <fieldset>

                    <div className="news-form">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            value={newsArticle.title}
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            value={newsArticle.url}
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="synopsis"
                            value={newsArticle.synopsis}
                        />
                    </div>

                </fieldset>

                <div className="save-new-news-button-container">
                    <button
                        className="save-news-button"
                        type="button"
                        disabled={isLoading}
                        onClick={updateExistingNewsArticle}
                    >Save News Article</button>

                    <button type="button"
                        className="news-cancel-button"
                        onClick={() => {
                            props.history.push("/newsArticles")
                        }}
                    >Cancel</button>
                </div>
            </form>
        </>
    )
}

export default NewsArticleEditForm;