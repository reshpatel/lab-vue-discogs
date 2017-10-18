// src/api.js
import axios from 'axios';

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  httpAgent: "Ironhack Paris reshma1529@gmail.com/1.0 +http://localhost",
  params: {
    token: "UgWMXVPKLWlgRTBbgvZjbNJtPUriYPjvoyhfpTXD"
  }
});
export function searchArtists(query){
  return discogs.get(`/database/search?q=${query}&type=artist`).then(response =>{
    return response.data.results;
  })
  .catch(err => {
    console.error(err);
    return null;
  });
}

  export function getArtist(id){
    return discogs.get(`/artists/${id}`).then(response =>{
      return response.data;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}
