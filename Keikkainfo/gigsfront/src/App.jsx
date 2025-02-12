import { useState, useEffect } from "react";
import gigService from "./services/gigService";
import GigsList from "./components/GigsList";
import GigForm from "./components/GigForm";
import "./App.css";

function App() {
  const [gigs, setGigs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    gigService.getAll().then(data => setGigs(data));
  }, []);

  const filteredGigs = () => {
    if (filter === "past") {
      return gigs.filter(gig => new Date(gig.date) < new Date()); 
    } else if (filter === "upcoming") {
      return gigs.filter(gig => new Date(gig.date) >= new Date()); 
    }
    return gigs;  
  };

  return (
    <div>
      <h1>MusicInfo</h1>

      {}
      <select name="filter" onChange={e => setFilter(e.target.value)} value={filter}>
        <option value="">Näytä kaikki</option>
        <option value="past">Näytä menneet keikat</option>
        <option value="upcoming">Näytä tulevat keikat</option>
      </select>

      {}
      <GigsList gigs={filteredGigs()} setGigs={setGigs} />

      {}
      <GigForm setGigs={setGigs} />
    </div>
  );
}

export default App;
