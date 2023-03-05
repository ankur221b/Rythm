import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetails } from '../redux/services/shazamCore';

const SongDetails = () => {
	const dispatch = useDispatch();
	const { songid, id: artistId } = useParams();
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const [songData, setSongData] = useState(null);
	useEffect(() => {
		const getData = async () => {
			const tmpdata = await useGetSongDetails(songid);
			setSongData(JSON.parse(tmpdata));
		};
		getData();
	}, []);
	// const { data: songData, isFetching: isFetchingSongDetails } =
	// 	useGetSongDetailsQuery({ songid });

	// if (isFetchingSongDetails && isFetchinRelatedSongs)
	// 	return <Loader title="Searching song details" />;

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
			<DetailsHeader
				artistId={songData?.artists[0]?.id}
				songData={songData}
			/>

			<div className="mb-10">
				<h2 className="text-white text-3xl font-bold">Lyrics:</h2>

				<div className="mt-5">
					{songData === 'LYRICS' ? (
						songData?.sections[1]?.text.map((line, i) => (
							<p
								key={`lyrics-${line}-${i}`}
								className="text-gray-400 text-base my-1"
							>
								{line}
							</p>
						))
					) : (
						<p className="text-gray-400 text-base my-1">
							Sorry, No lyrics found!
						</p>
					)}
				</div>
			</div>

			{/* <RelatedSongs
				data={data}
				artistId={artistId}
				isPlaying={isPlaying}
				activeSong={activeSong}
				handlePauseClick={handlePauseClick}
				handlePlayClick={handlePlayClick}
			/> */}
		</div>
	);
};

export default SongDetails;
