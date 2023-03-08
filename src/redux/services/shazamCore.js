import axios from 'axios';
import { useState, useEffect } from 'react';
import { artists } from '../../assets/constants';

const baseURL = '	https://api.spotify.com/v1';
const lyricsURL = 'https://spotify23.p.rapidapi.com/track_lyrics';
const lyricsConfig = {
	headers: {
		'X-RapidAPI-Key': 'd1638750ebmsha3b617a60c2fe02p1c600bjsn016578752711',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
	},
};
const config = {
	headers: {
		Authorization:
			'Bearer BQCc4MxumXrEZBLooOlmAZhizxNXWxPyjOCFIpKvdUcdPZVC10Bf-8W8MpJxX3TaR_ZqN9EZkvt8smgqCcr_LeUi8Ei9OYc4gJcrAnel9X1td_MZmY_vI1WZXQ9tpvaLbcqpdNQm4Im1Odo2uxHxhn40xQbLMHVuwZlQFZnUXvAw39cae3juFcjfxcJsBFVHXt-I',
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
	let ids = artists.join('%2C');
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
export const useGetArtistTopTracks = async (id) => {
	let res = await axios.get(
		`${baseURL}/artists/${id}/top-tracks?market=US`,
		config
	);
	let stringData = JSON.stringify(res.data.tracks);
	return stringData;
};

export const useGetTrackLyrics = async (id) => {
	let res = await axios.get(`${lyricsURL}/?id=${id}`, lyricsConfig);
	console.log(res?.data?.lyrics?.lines);
	let stringData = JSON.stringify(res?.data?.lyrics?.lines);
	return stringData;
};
