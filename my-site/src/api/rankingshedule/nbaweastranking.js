import axios from "axios";

export async function getNbaWeastRanking() { 
  return await axios.get('http://localhost:3000/ranking/weast/nba');
}

