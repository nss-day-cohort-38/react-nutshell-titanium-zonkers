import React from "react";
import { Card } from "semantic-ui-react";
import * as moment from 'moment'


const EventCard = ({ item }) => {
    console.log(moment(item.date).calendar())
  return (
    <Card
      header={item.name}
      meta={item.date}
      description={item.location}
    />
  );
};

export default EventCard;
