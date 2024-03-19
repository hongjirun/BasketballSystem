import axios from "axios";

export async function getNbaShedule() { 
  return await axios.get('http://localhost:3000/shedule/nba');
}

