import React from "react";
import './NewsArticle.css';
import { Button, Card } from 'semantic-ui-react';

const NewsArticleCard = (props) => {

    return (
        <Card className="news-card-container">
            <Card.Content className="news-card-content">
                <Card.Header className="card-articleTitle"><a className="news-link" target="_blank" href={props.newsArticle.url}>{props.newsArticle.title}</a></Card.Header>
                <Card.Header className="card-articleSynopsis">{props.newsArticle.synopsis}</Card.Header>
            </Card.Content>
            <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={() => {
                        props.history.push(`/newsArticles/${props.newsArticle.id}/edit`)
                    }}
                    basic color='green'>
            Edit
          </Button>
          <Button onClick={() => props.handleDeleteNewsArticle(props.newsArticle.id)}
          basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
        </Card>
    )
}

export default NewsArticleCard;







// import React from "react";
// import './NewsArticleCard.css';


// const NewsArticleCard = (props) => {

//     return (
//         <div className="news-card-container">
//             <div className="news-card-content">

//                 <h1>{props.newsArticle.title}</h1>
//                 <h3>{props.newsArticle.url}</h3>
//                 <p>{props.newsArticle.synopsis}</p>

//             </div>
//             <div className="news-card-buttons-container">

//                 <button
//                     type="button"
//                     className="edit-news-button"
//                     onClick={() => {
//                         props.history.push(`/newsArticles/${props.newsArticle.id}/edit`)
//                     }}
//                 >Edit</button>

//                 <button
//                     type="button"
//                     className="delete-news-button"
//                     onClick={() => props.handleDeleteNewsArticle(props.newsArticle.id)}
//                 >Delete</button>

//             </div>
//         </div>
//     )
// }

// export default NewsArticleCard;