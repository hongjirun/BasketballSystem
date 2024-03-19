import axios from "axios";

export async function getNbaEastRanking() { 
  return await axios.get('http://localhost:3000/ranking/east/nba');
}

