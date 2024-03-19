import axios from "axios";

export async function getCbaAssisting() { 
  return await axios.get('http://localhost:3000/data/cba/assisting');
};
export async function getCbaBackBoard() { 
  return await axios.get('http://localhost:3000/data/cba/backboard');
}
export async function getCbaBlockShot() { 
  return await axios.get('http://localhost:3000/data/cba/blockshot');
}
export async function getCbaFreeThrow() { 
  return await axios.get('http://localhost:3000/data/cba/freethrow');
}
export async function getCbaScore() { 
  return await axios.get('http://localhost:3000/data/cba/score');
}
export async function getCbaShoot() { 
  return await axios.get('http://localhost:3000/data/cba/shoot');
}
export async function getCbaTackle() { 
  return await axios.get('http://localhost:3000/data/cba/tackle');
}
export async function getCbaThreePoint() { 
  return await axios.get('http://localhost:3000/data/cba/threepoint');
}

