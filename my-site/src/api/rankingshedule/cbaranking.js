import axios from "axios";

export async function getCbaRanking() { 
  return await axios.get('http://localhost:3000/ranking/cba');
}

