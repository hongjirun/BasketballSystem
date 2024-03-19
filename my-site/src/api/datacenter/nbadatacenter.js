import axios from "axios";

export async function getNbaAssisting() { 
  return await axios.get('http://localhost:3000/data/nba/assisting');
};
export async function getNbaBackBoard() { 
  return await axios.get('http://localhost:3000/data/nba/backboard');
}
export async function getNbaBlockShot() { 
  return await axios.get('http://localhost:3000/data/nba/blockshot');
}
export async function getNbaFreeThrow() { 
  return await axios.get('http://localhost:3000/data/nba/freethrow');
}
export async function getNbaScore() { 
  return await axios.get('http://localhost:3000/data/nba/score');
}
export async function getNbaShoot() { 
  return await axios.get('http://localhost:3000/data/nba/shoot');
}
export async function getNbaTackle() { 
  return await axios.get('http://localhost:3000/data/nba/tackle');
}
export async function getNbaThreePoint() { 
  return await axios.get('http://localhost:3000/data/nba/threepoint');
}