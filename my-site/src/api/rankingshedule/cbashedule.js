import axios from "axios";

export async function getCbaShedule() { 
  return await axios.get('http://localhost:3000/shedule/cba');
}

