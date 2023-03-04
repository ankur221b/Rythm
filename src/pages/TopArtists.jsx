import { useState, useEffect } from 'react';
import { ArtistCard, Error, Loader } from '../components';
import { useGetArtists } from '../redux/services/shazamCore';

const TopArtists = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const getData = async () => {
			const tmpdata = await useGetArtists();
			setData(JSON.parse(tmpdata));
		};
		getData();
	}, []);
	// if (isFetching) return <Loader title="Loading artists..." />;

	// if (error) return <Error />;

	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
				Top artists
			</h2>

			<div className="flex flex-wrap sm:justify-start justify-center gap-8">
				{data?.map((track) => (
					<ArtistCard key={track.key} track={track} />
				))}
			</div>
		</div>
	);
};

export default TopArtists;
