import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import {
	useGetArtistDetails,
	useGetArtistTopTracks,
} from '../redux/services/shazamCore';

const ArtistDetails = () => {
	const dispatch = useDispatch();
	const { id: artistId } = useParams();
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const [data, setData] = useState(null);
	const [topTracks, setTopTracks] = useState(null);
	useEffect(() => {
		const getData = async () => {
			const tmpdata = await useGetArtistDetails(artistId);
			setData(JSON.parse(tmpdata));
		};
		getData();
	}, []);
	useEffect(() => {
		const getData = async () => {
			const tmpdata = await useGetArtistTopTracks(artistId);
			setTopTracks(JSON.parse(tmpdata));
		};
		getData();
	}, []);

	// if (isFetchingArtistDetails)
	// 	return <Loader title="Loading artist details..." />;

	// if (error) return <Error />;
	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};
	return (
		<div className="flex flex-col">
			<DetailsHeader artistId={artistId} artistData={data} />

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

export default ArtistDetails;
