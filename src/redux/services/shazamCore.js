import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = '	https://api.spotify.com/v1';
const config = {
	headers: {
		Authorization:
			'Bearer BQBSNlhIVvpYUUeqfvseOU5aUcHV242MI58crvpSZ03kpuvf-1wkrs36ShqcZ7F452AeDil6yVycF78zRwv8lpvQDEOMFaq5Kv1GqXIzwxnk1j8bPeEATb49iGJ5UGhYa_cV2OqM_U5eJ46ZW1LeBlVsJqe115E9SWaDouQV48k_AW-msFG8KeYx-3OKlLGq7ts4',
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

export const useGetArtists = async () => {
	let ids =
		'6eUKZXaKkcviH0Ku9w2n3V%2C6VuMaDnrHyPL1p4EHjYLi7%2C1vCWHaC5f2uS3yhpwWbIA6';
	let res = await axios.get(`${baseURL}/artists?ids=${ids}`, config);
	let stringData = JSON.stringify(res.data.artists);
	return stringData;
};
