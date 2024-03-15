import axios from "axios";

export async function getStarinfo() { 
  return await axios.get('http://localhost:3000/starinfo');
}

export async function putTotal(data) { 
  return await axios.post('http://localhost:3000/starinfo/like',data)
}