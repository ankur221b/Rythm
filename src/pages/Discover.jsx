import {Error, Loader,SongCard} from '../components';
import {genres} from '../assets/constants';
import { useGetArtistTracks } from '../redux/services/shazamCore';
import { useEffect, useState } from 'react';

const Discover = () =>{
  const [data,setData] = useState(null);
  useEffect(()=>{
    const getData = async()=>{
      const data = await useGetArtistTracks('2w9zwq3AktTeYYMuhMjju8');
      setData(data);
    }
  },[data])
    
    console.log(JSON.parse(data));
  // if (isFetching) return <Loader title="Loading songs..." />;
  // if (error) return <Error />;
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
        {data?.tracks?.map((song, i) => (
          <SongCard
            key={i}
            // song={song}
            // isPlaying={isPlaying}
            // activeSong={activeSong}
            // data={data}
            // i={i}
            // Title={song.name}
          />
        ))}
      </div>

</div>
    )

} 

export default Discover;
