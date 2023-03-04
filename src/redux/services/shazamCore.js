import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = '	https://api.spotify.com/v1';
const config = {
	headers: {
		Authorization:
			'Bearer BQCQ6L1Vmi2fY0_yDqt2dDMDwg3mBp2uV5BdXUs1CsArmfcjR1b13gGaKsth24l31D2T49TWChG1KbDiqoggqB0zJ5pvqC_aiurMS9e-YL4vFk_iHvIzvs8ysda6SfxPTAtpcGGgDwitkUBjRhFWDao28wXTba6QsMblw2V0Q6vKwD8UOP36lg2qZaSXYCvwxn4-',
	},
	responseType: 'json',
};
export const useGetArtistTracks = async (id) => {
	let res = await axios.get(
		`${baseURL}/artists/${id}/top-tracks?market=ES`,
		config
	);
	let stringData = JSON.stringify(res.data.tracks);
	return stringData;
};

export const useGetArtists = async (id) => {
	let res = await axios.get(`${baseURL}/artists`, config);
	let stringData = JSON.stringify(res.data.tracks);
	return stringData;
};
