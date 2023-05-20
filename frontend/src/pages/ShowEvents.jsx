import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_EVENTS = gql`
  query {
    events {
      _id
      title
      description
      price
      rsvp {
        _id
        name
        status
      }
    }
  }
`;

function ShowEvents() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  const SubmitConsole = async() => {
    console.log(data);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :</p>;
  }

  return (
    <div>
      <button onClick={SubmitConsole}>Click Me!</button>
    </div>
  );
}

export default ShowEvents;
