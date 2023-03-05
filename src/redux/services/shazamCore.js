import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = '	https://api.spotify.com/v1';
const config = {
	headers: {
		Authorization:
			'Bearer BQDBBF8CigJ2RYC2n6PuCxQc2HHHmMyn_npsiCecncjy4rwe8O7Ub7EHmiCH_h6s8PnHTPZrnZcoIHj8dIELVNPwwphSPkX0aXa6m85VKgBhLvPSmCFH_hJdwleDQK7K4tHPafDiXeKks2RTOyDvmrKRL8ZilJLmvSREpB4pX4ffrOXoAQJ_x2Zg68hPOI2nbcFZ',
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
