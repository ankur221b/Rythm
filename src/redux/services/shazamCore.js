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
const accessTokenConfig = {
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	  },
	responseType: 'json',
};
// const config = {
// 	headers: {
// 		Authorization:
// 			'Bearer BQD6trNkmTArvAPFC8CXkzm84WeORelRMFxtVP8hrSoMNKSJeHfYYTdAQjljqF5VmosCdJndr9V3vuAThu0FOwTK6XU9y4bs_5xFewmdoD-wz_vszntb',
// 	},
// 	responseType: 'json',
// };
let config = null;

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
export const useSearchArtist = async (searchTerm) => {

	let res = await axios.get(
		`${baseURL}/search?q=${searchTerm}&type=artist&limit=1`,
		config
	);
	let topArtists = res?.data?.artists;
	return JSON.stringify(topArtists);
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
	let stringData = JSON.stringify(res?.data?.lyrics?.lines);
	return stringData;
};

export const GetTopCharts = async () => {
	
	let res = await axios.get(
		`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=271570119d140a47007a7df22e389e52&format=json&limit=20`
	);
	let topTracks = res?.data?.tracks?.track;
	let tracksFromSpotify = [];
	for (let i = 0; i < topTracks.length; i++) {
		let response = JSON.parse(await useSearchSong(topTracks[i]?.name));
		tracksFromSpotify.push(response?.items[0]);
	}

	return JSON.stringify(tracksFromSpotify);
};

export const GetTopArtists = async () => {
	
	let res = await axios.get(
		`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=271570119d140a47007a7df22e389e52&format=json&limit=20`
	);
	let topArtists = res?.data?.artists?.artist;
	let artistsFromSpotify = [];
	for (let i = 0; i < topArtists.length; i++) {
		let response = JSON.parse(await useSearchArtist(topArtists[i]?.name));
		artistsFromSpotify.push(response?.items[0]);
	}
	return JSON.stringify(artistsFromSpotify);
};

export const useGetAccessToken = async () => {
	let res = await axios.post(`https://accounts.spotify.com/api/token`,new URLSearchParams({
		'grant_type': 'client_credentials',
		'client_id': process.env.REACT_APP_CLIENT_ID,
		'client_secret': process.env.REACT_APP_CLIENT_SECRET
	  }));
	let token = res?.data?.access_token;
	config = {
		headers: {
			Authorization:
				'Bearer '+token,
		},
		responseType: 'json',
	};

	return token;
};
