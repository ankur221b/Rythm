import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = '	https://api.spotify.com/v1';
const config = {
	headers: {
		Authorization:
			'Bearer BQDSJuj-Wy5ACLhrAW8VmVjSYKP7Sgszy1QscaauonMGkhKaZ3uq3dgRQv9A44QBL3ec20SAzac-5JxMO1sxC5l9s8UwE5anj_55VpHxaUt5i9FpvUaZ8Mcfj7Hu_q4iVHdCEIbovKumVlZ1qjkueZFCiBx44Tt3Pr63tkMfPLi3M68px0vS8bE5TRnyrPWr7Aw4',
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

export const useGetSongDetails = async (id) => {
	let res = await axios.get(`${baseURL}/tracks/${id}`, config);
	let stringData = JSON.stringify(res.data);
	return stringData;
};

export const useGetArtistDetails = async (id) => {
	let res = await axios.get(`${baseURL}/artists/${id}`, config);
	let stringData = JSON.stringify(res.data);
	return stringData;
};

export const useSearchSong = async (searchTerm) => {
	let res = await axios.get(
		`${baseURL}/search?q=${searchTerm}&type=track`,
		config
	);
	let stringData = JSON.stringify(res.data.tracks);
	return stringData;
};
