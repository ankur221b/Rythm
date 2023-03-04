import axios from "axios";
import { useState,useEffect } from 'react';

const baseURL = '	https://api.spotify.com'
const config = {
  headers:{
      'Authorization': 'Bearer BQCeeuAAWasSD2r10QbUjmB49_Id0pDuLmbXJ954VGIS-qmfcUEidcYUr6fVpIxWkiPS7W2rSD-moFsckglTnQgDx-kx12UIbcq6hvhz0-3vy_hKWbUrK22bu-g-_f2ugLV9mgdbc3a49XSu_sft7IJCSwa9szHcAk4CS0wpbEpB_YQo3eIa4Y3N_Cohq7NNSgkw',
  },
  responseType: 'json'
};
export const useGetArtistTracks = async (id)=>{

    let res = await axios.get(`${baseURL}/v1/artists/${id}/top-tracks?market=ES`,config );
    console.log(res.data);
    let stringData = JSON.stringify(res.data);
    return stringData;

}