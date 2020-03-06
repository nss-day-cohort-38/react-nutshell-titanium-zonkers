import React, { useState, useEffect } from 'react';
import dbAPI from '../../modules/dbAPI';

const NewsArticleForm = (props) => {
    const [newsArticle, setNewsArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...newsArticle};
        stateToChange[evt.target.id] = evt.target.value;
        setNewsArticle(stateToChange);
    };

    
}

export default NewsArticleForm;