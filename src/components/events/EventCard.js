import React from "react";
import { Card, Button } from "semantic-ui-react";
import * as moment from "moment";

const EventCard = ({ item, editEvent, deleteEvent }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>{moment(item.date, moment.ISO_8601).calendar()}</Card.Meta>
        <Card.Description>
        {item.location}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => editEvent(item.id)}>
            Edit
          </Button>
          <Button basic color='red' onClick={() => deleteEvent(item.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>

  );
};

export default EventCard;
