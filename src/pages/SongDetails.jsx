import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
	useGetSongDetails,
	useGetArtistTopTracks,
	useGetArtistDetails,
	useGetTrackLyrics,
} from '../redux/services/shazamCore';

const SongDetails = () => {
	const dispatch = useDispatch();
	const { songid, id: artistId } = useParams();
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const [songData, setSongData] = useState(null);
	const [topTracks, setTopTracks] = useState(null);
	const [artistData, setArtistData] = useState(null);
	const [trackLyrics, setTrackLyrics] = useState(null);
	useEffect(() => {
		const getData = async () => {
			const tmpdata = await useGetSongDetails(songid);
			setSongData(JSON.parse(tmpdata));
		};
		const getLyrics = async () => {
			const lyricsdata = await useGetTrackLyrics(songid);
			setTrackLyrics(JSON.parse(lyricsdata));
		};
		getData();
		getLyrics();
	}, []);
	useEffect(() => {
		const getData = async (id) => {
			const tmpdata = await useGetArtistTopTracks(id);
			setTopTracks(JSON.parse(tmpdata));
		};
		if (songData) getData(songData?.artists[0]?.id);
	}, [songData]);

	useEffect(() => {
		const getData = async (id) => {
			const tmpdata = await useGetArtistDetails(id);
			setArtistData(JSON.parse(tmpdata));
		};
		if (songData) getData(songData?.artists[0]?.id);
	}, [songData]);
	// const { data: songData, isFetching: isFetchingSongDetails } =
	// 	useGetSongDetailsQuery({ songid });

	// if (isFetchingSongDetails && isFetchinRelatedSongs)
	// 	return <Loader title="Searching song details" />;

	// if (error) return <Error />;

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, songData, i }));
		dispatch(playPause(true));
	};
	return (
		<div className="flex flex-col">
			<DetailsHeader
				artistId={artistId}
				songData={songData}
				artistData={artistData}
			/>

			<div className="mb-10">
				<h2 className="text-white text-3xl font-bold">Lyrics:</h2>

				<div className="mt-5">
					{trackLyrics != null ? (
						trackLyrics.map((line, i) => (
							<p
								key={`lyrics-${line.words}-${i}`}
								className="text-gray-400 text-base my-1"
							>
								{line.words}
							</p>
						))
					) : (
						<p className="text-gray-400 text-base my-1">
							Sorry, No lyrics found!
						</p>
					)}
				</div>
			</div>

			<RelatedSongs
				data={topTracks}
				artistId={artistId}
				isPlaying={isPlaying}
				activeSong={activeSong}
				handlePauseClick={handlePauseClick}
				handlePlayClick={handlePlayClick}
			/>
		</div>
	);
};

export default SongDetails;
