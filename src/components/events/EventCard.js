import React, { useState } from "react";
import { Card, Button, Popup, Grid } from "semantic-ui-react";
import * as moment from "moment";
import "./EventCard.css";

const EventCard = ({ item, editEvent, deleteEvent, cardNumber }) => {
  const [popIsOpen, setPopIsOpen] = useState(false);
  console.log();
  return (
    <Card id={cardNumber === 0 ? "firstCard" : ""}>
      <Card.Content>
        <Card.Header>
          {cardNumber == 0 && (
            <Card.Meta>
              <div>Name</div>
            </Card.Meta>
          )}
          <div>{item.name}</div>
        </Card.Header>
        {cardNumber === 0 ? (
          <>
            <Card.Header>
              <Card.Meta>
                <div>Date</div>
              </Card.Meta>
              <div>{moment(item.isoTime, "YYYY-MM-DD HH:mm").calendar()}</div>
            </Card.Header>
          </>
        ) : (
          <Card.Meta>
            <div>{moment(item.isoTime, "YYYY-MM-DD HH:mm").calendar()}</div>
          </Card.Meta>
        )}
        <Card.Header>
          {cardNumber == 0 && (
            <Card.Meta>
              <div>Location</div>
            </Card.Meta>
          )}
          <div>{item.location}</div>
        </Card.Header>
      </Card.Content>
      {item.userId === Number(sessionStorage.getItem("userId")) && (
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={() => editEvent(item.id)}>
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
                  }}
                />
              }
              on="click"
              open={popIsOpen}
            >
              <Grid divided columns="equal">
                <Grid.Column>
                  <Button
                    color="red"
                    content="Delete"
                    onClick={() => {
                      deleteEvent(item.id);
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
          </div>
        </Card.Content>
      )}
    </Card>
  );
};

export default EventCard;
