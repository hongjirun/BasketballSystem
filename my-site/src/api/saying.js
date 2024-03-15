import axios from "axios";

export async function getSaying() { 
  return await axios.get('http://localhost:3000/saying');
}