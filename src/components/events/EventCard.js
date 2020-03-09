import React, { useState } from "react";
import { Card, Button, Popup, Grid } from "semantic-ui-react";
import * as moment from "moment";
import "./EventCard.css";

const EventCard = ({ item, editEvent, deleteEvent, cardNumber }) => {
  const [popIsOpen, setPopIsOpen] = useState(false);

  return (
    <Card id={cardNumber === 0 ? "firstCard" : ""}>
      <Card.Content>
        <Card.Header>
        <div>{cardNumber === 0 && "Name:"}</div> <div>{item.name}</div>
        </Card.Header>
        <Card.Header>
        <div>{cardNumber === 0 && "Date:"}</div>  <div
        >{moment(item.date, moment.ISO_8601).calendar()}</div>        
        </Card.Header>
        <Card.Meta>
          <div>{cardNumber === 0 && "Time:"}</div>{" "}
          <div>{moment(item.isoTime, moment.ISO_8601).format('LLL')}</div>
        </Card.Meta>
        <Card.Header>
          <div>{cardNumber === 0 && "Location:"}</div>{" "}
          <div>{item.location}</div>
        </Card.Header>
      </Card.Content>
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
    </Card>
  );
};

export default EventCard;
