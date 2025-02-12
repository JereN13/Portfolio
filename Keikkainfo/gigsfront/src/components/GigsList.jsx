import React from 'react';
import axios from 'axios';

const GigsList = ({ gigs, setGigs }) => {

  const deleteGig = (id) => {
    axios.delete(`http://localhost:3001/gigs/${id}`).then(() => {
      setGigs(gigs.filter(gig => gig.id !== id));  // päivitys
    }).catch(error => {
      console.error("Poistamisessa tapahtui virhe:", error);
    });
  };

  return (
    <div>
      {gigs.length === 0 ? (
        <p>Ei keikkoja näytettäväksi.</p>
      ) : (
        gigs.map(gig => (
          <div key={gig.id} className="gig-card">
            <h3>{gig.artist} - {gig.event}</h3>
            <img src={gig.image} alt={`${gig.artist} - ${gig.event}`} className="gig-image" />
            <p>{gig.date} klo {gig.time}</p>
            <p>{gig.description}</p>
            <p>Osoite: {gig.address}</p>
            <p>Paikkakunta: {gig.city}</p>
            <a href={gig.ticketLink} target="_blank" rel="noopener noreferrer">Osta liput</a>
            <a href={gig.artistWebsite} target="_blank" rel="noopener noreferrer">Vieraili artistin sivuilla</a>
            <button onClick={() => deleteGig(gig.id)}>Poista keikka</button>
          </div>
        ))
      )}
    </div>
  );
};

export default GigsList;
