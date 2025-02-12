import axios from "axios";
const baseURL = "http://localhost:3001/gigs";

const getAll = () => axios.get(baseURL).then(res => res.data);
const create = newGig => axios.post(baseURL, newGig).then(res => res.data);

export default { getAll, create };
