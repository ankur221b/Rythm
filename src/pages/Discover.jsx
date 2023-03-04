import {Error, Loader,SongCard} from '../components';
import {genres} from '../assets/constants';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';

const Discover = () =>{
    const { data, isFetching, error } = useGetSongsByGenreQuery('POP');

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

    const genreTitle = 'Pop';
    return(
<div className='flex flex-col'>
    <div className='w-full fles justify-between items-center sm:fles-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}
        </h2>
        <select onChange={()=>{}} value="" className='bg-black text-grey-300 p3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
            {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>

</div>
    )

} 

export default Discover;
