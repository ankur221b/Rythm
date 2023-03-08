import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetArtistTracks, GetTopCharts } from '../redux/services/shazamCore';

const TopCharts = () => {
	const [data, setData] = useState(null);
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	useEffect(() => {
		const getData = async () => {
			//const tmpdata = await useGetArtistTracks('6VuMaDnrHyPL1p4EHjYLi7');
			const tmpdata = await GetTopCharts();

			setData(JSON.parse(tmpdata));
		};
		getData();
	}, []);

	if (!data) return <Loader title="Loading Top Charts" />;

	//if (error) return <Error />;
	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
				Discover Top Charts
			</h2>

			<div className="flex flex-wrap sm:justify-start justify-center gap-8">
				{data?.map((song, i) => (
					<SongCard
						key={i}
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						data={data}
						i={i}
					/>
				))}
			</div>
		</div>
	);
};

export default TopCharts;
