import axios from "axios";
import { useState,useEffect } from 'react';

const baseURL = '	https://api.spotify.com'
const config = {
  headers:{
      'Authorization': 'Bearer BQA8fZO4ZPXL3SB4OPb81BERtCTPYgeO7jc-skPpYMLrvsm5F3AQo6URR7VASl-Npya31bu7r9hMvEOLKez3zFI087utz3Jhro--Ar8Nf661EJIiaKZzRZnrsoKeZXBUf8-AlHhse8hOgPwmNF8shPXPoY_WGTI7sS7Letxw3r84FKgyW2uIBI565pf56Yi8tu8Z',
  },
  responseType: 'json'
};
export const useGetArtistTracks = async (id)=>{

    let res = await axios.get(`${baseURL}/v1/artists/${id}/top-tracks?market=ES`,config );
    let stringData = JSON.stringify(res.data.tracks);
   console.log(res.data.tracks)
    return stringData;

}