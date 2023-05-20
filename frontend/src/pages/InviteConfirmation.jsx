import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import './InviteConfirmation.css';

function InviteConfirmation() {
  const { eventid, userid } = useParams();
  const [resultNumber, setResultNumber] = useState(2);
  const SET_STATUS = gql
  `
mutation {
  updateRsvpStatus (
    eventId: "${eventid}"
    rsvpId: "${userid}"
    status: ${resultNumber}
  ) {
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

  

  const [updateRsvpStatus, { data, loading}] = useMutation(SET_STATUS);

  const setYes = async () => {
    setResultNumber(1)
    await updateRsvpStatus(
      {
        variables: {
          eventId: eventid,
          rsvpId: userid,
          status: resultNumber
        }
      }
    ).then(console.log(data))
    .catch(err=>console.log(err));
  };

  const setNo = async () => {
    setResultNumber(2)
    await updateRsvpStatus(
      {
        variables: {
          eventId: eventid,
          rsvpId: userid,
          status: resultNumber
        }
      }
    ).then(console.log(data))
    .catch(err=>console.log(err));
  };
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
  //   if (error) {
  //     return <p>Error :</p>;
  //   }
  //   console.log(data);
  // };

  return (
    <>
      <button className='invite-button' onClick={setYes}>Yes</button>
      <button className='invite-button' onClick={setNo}>No</button>
    </>
  )
}

export default InviteConfirmation

//  http:localhost:5173/rsvp/6444c04735f4851465127551/user/6444c04835f4851465127553