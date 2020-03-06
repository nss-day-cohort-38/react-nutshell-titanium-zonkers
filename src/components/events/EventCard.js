import React from "react";
import { Card, Button, Popup, Grid } from "semantic-ui-react";
import * as moment from "moment";

const EventCard = ({ item, editEvent, deleteEvent }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>{moment(item.date, moment.ISO_8601).calendar()}</Card.Meta>
        <Card.Description>{item.location}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid className="ui two buttons">
          <Button basic color="green" onClick={() => editEvent(item.id)}>
            Edit
          </Button>

          <Popup
            wide
            trigger={<Button basic color="red" content="Delete" />}
            on="click"
          >
            <Grid divided columns="equal">
              <Grid.Column>
                <Button
                  color="blue"
                  content="Delete"
                  onClick={() => deleteEvent(item.id)}
                />
              </Grid.Column>
              <Grid.Column>
                <Button color="blue" content="Cancel" />
              </Grid.Column>
            </Grid>
          </Popup>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default EventCard;
