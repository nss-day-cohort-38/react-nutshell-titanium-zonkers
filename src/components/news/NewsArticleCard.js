import React, { useState } from "react";
import './NewsArticle.css';
import { Button, Card, Popup, Grid } from 'semantic-ui-react';

const NewsArticleCard = (props) => {

    const [popIsOpen, setPopIsOpen] = useState(false);

    return (
        <Card className="news-card-container">
            <Card.Content className="news-card-content">
                <Card.Header className="card-articleTitle"><a className="news-link" target="_blank" href={props.newsArticle.url}>{props.newsArticle.title}</a></Card.Header>
                <Card.Header className="card-articleSynopsis">{props.newsArticle.synopsis}</Card.Header>
            </Card.Content>
            <Card.Content extra>
            {!props.isFriend && <div className='ui two buttons'>
                 <Button onClick={() => {
                        props.handleEditNewsArticle(props.newsArticle.id)
                    }}
                        basic color='green'>
                        Edit
          </Button>

                    <Popup
                        wide
                        trigger={
                            <Button
                                basic
                                color="red"
                                content="Delete"
                                onClick={() => {
                                    setPopIsOpen(true);
                                }} />
                        }
                        on="click"
                        open={popIsOpen}
                    >
                        <Grid divided columns="equal">
                            <Grid.Column>
                                <Button
                                    color="red"
                                    content="Confirm"
                                    onClick={() => {
                                        props.handleDeleteNewsArticle(props.newsArticle.id);
                                        setPopIsOpen(false);
                                    }}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button
                                    color="grey"
                                    content="Cancel"
                                    onClick={() => {
                                        setPopIsOpen(false);
                                    }}
                                />
                            </Grid.Column>
                        </Grid>
                    </Popup>
                </div>}
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