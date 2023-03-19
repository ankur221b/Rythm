import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import { useSearchParams } from 'react-router-dom';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
	ArtistDetails,
	TopArtists,
	AroundYou,
	Discover,
	Search,
	SongDetails,
	TopCharts,
} from './pages';

const App = () => {
	const { activeSong } = useSelector((state) => state.player);
	const [searchParams] = useSearchParams();
	
	if(searchParams.get('code'))accessToken = searchParams.get('code');
	
	if(!accessToken)return <Login/>
	else return (
	
			<div className="relative flex">
				<Sidebar />
				<div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
					<Searchbar />

					<div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
						<div className="flex-1 h-fit pb-40">
							<Routes>
								<Route exact path="/" element={<Discover />} />
								<Route
									exact
									path="/top-artists"
									element={<TopArtists />}
								/>
								<Route
									exact
									path="/top-charts"
									element={<TopCharts />}
								/>
								<Route
									exact
									path="/around-you"
									element={<AroundYou />}
								/>
								<Route
									exact
									path="/artists/:id"
									element={<ArtistDetails />}
								/>
								<Route
									exact
									path="/songs/:songid"
									element={<SongDetails />}
								/>
								<Route
									exact
									path="/search/:searchTerm"
									element={<Search />}
								/>
							</Routes>
						</div>
						<div className="xl:sticky relative top-0 h-fit">
							<TopPlay />
						</div>
					</div>
				</div>

				{activeSong?.name && (
					<div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
						<MusicPlayer />
					</div>
				)}
			</div>
		
	);
};

export default App;
