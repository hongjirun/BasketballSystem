import axios from 'axios'
export async function getMessage() { 
  
  return await axios.get('http://localhost:3000/message');

};

export async function postMessageData(data) { 
  
  return await axios.post('http://localhost:3000/postmessage',data);

};