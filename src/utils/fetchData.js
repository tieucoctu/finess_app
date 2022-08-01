import axios from "axios";

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5e2a884924msh7485ca54cad5f89p179045jsne7730fc435c2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5e2a884924msh7485ca54cad5f89p179045jsne7730fc435c2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  try{
    const res = await axios.request(url, options);
    return res.data
  }
  catch(error){
  console.log('error :', error);
  }
};
