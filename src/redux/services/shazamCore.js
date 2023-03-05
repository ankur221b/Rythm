import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = '	https://api.spotify.com/v1';
const config = {
	headers: {
		Authorization:
			'Bearer BQDNkY0yJPWcama9bvTgHJlHoyllYd3hPkR_QmEr5HxUvHlojwiqT9tilZj9_N6lOfEz_P4WlxRaVqNR370dFxXkl2Eh2JOy4oQmke1Z51eFGwKct_Mv3MptzJdd3Zrilb7u4Xe5_FS-3Aeq_fcqcbaIPPnnFubIGXOz9vUq42gL_6QY7tyvQvv2TZ7wiieZ4heC',
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
	console.log(res.data);
	return stringData;
};
