import { useState } from "react";
import gigService from "../services/gigService";

const GigForm = ({ setGigs }) => {
  const [artist, setArtist] = useState("");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGig = { artist, event, date, time, city };

    gigService.create(newGig).then(returnedGig => {
      setGigs(prev => [...prev, returnedGig]);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={artist} onChange={e => setArtist(e.target.value)} placeholder="Artist" required />
      <input type="text" value={event} onChange={e => setEvent(e.target.value)} placeholder="Event" required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" required />
      <button type="submit">Lisää keikka</button>
    </form>
  );
};

export default GigForm;
