import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = '	https://api.spotify.com/v1';
const config = {
	headers: {
		Authorization:
			'Bearer BQARpUU0ocnpu4GyHim8-q3aXiwndWPRwvtqfBOl-jR3kn0lQZDObhrwaXj2b02YfHOfvdOLr7ElVt3OoMI4vQyrJ_qN92a7Zq1n1oXJ4WHk7sybr67CJMKLSwZvXWcOdsS1OxcEfzeC-VHdXGnrrYf6PsXGSOSvnvNhwYVvb_QmQLix87fKnGk2b8RQ0H73gf1p',
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
