import { useEffect, useState } from 'react';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetArtistTracks, GetTopCharts } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';
import { genres } from '../assets/constants';

const Discover = () => {
	const dispatch = useDispatch();
	const { genreListId } = useSelector((state) => state.player);
	const [data, setData] = useState(null);
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	useEffect(() => {
		const getData = async () => {
			const tmpdata = await useGetArtistTracks('6eUKZXaKkcviH0Ku9w2n3V');
			setData(JSON.parse(tmpdata));
		};
		getData();
	}, []);

	// if (isFetching) return <Loader title="Loading songs..." />;
	// if (error) return <Error />;
	//const genreTitle = 'Pop';
	const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
	return (
		<div className="flex flex-col">
			<div className="w-full fles justify-between items-center sm:fles-row flex-col mt-4 mb-10">
				<h2 className="font-bold text-3xl text-white text-left">
					Discover {genreTitle}
				</h2>
				<select
					onChange={(e) =>
						dispatch(selectGenreListId(e.target.value))
					}
					value={genreListId || 'pop'}
					className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
				>
					{genres.map((genre) => (
						<option key={genre.value} value={genre.value}>
							{genre.title}
						</option>
					))}
				</select>
			</div>
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

export default Discover;
