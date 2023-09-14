import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import'./Home.scss';
import Row from '../Row/Row';
import axios from 'axios';
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';


const apiKey = '7decedace997fcdc8f0e93614463f7f7';
const mainUrl = 'https://api.themoviedb.org/3';
const upcomingUrl = 'upcoming';
const topRatedUrl = 'top_rated';
const nowPlayingUrl = 'now_playing';
const popularUrl = 'popular';
const imgUrl = 'https://image.tmdb.org/t/p/w500';

const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    
    const fetchUpcoming = async() => {
      const { data: { results } } = await axios.get(`${mainUrl}/movie/${upcomingUrl}?api_key=${apiKey}`)
      setUpcomingMovies(results);
    };    
    const fetchPopular = async() => {
      const { data: { results } } = await axios.get(`${mainUrl}/movie/${popularUrl}?api_key=${apiKey}`)
      setPopularMovies(results);
    };    
    const fetchNowPlaying = async() => {
      const { data: { results } } = await axios.get(`${mainUrl}/movie/${nowPlayingUrl}?api_key=${apiKey}`)
      setNowPlayingMovies(results);
    };    
    const fetchTopRated = async() => {
      const { data: { results } } = await axios.get(`${mainUrl}/movie/${topRatedUrl}?api_key=${apiKey}`)
      setTopRatedMovies(results);
    };    
    const getGenres = async() => {
      const { data: { genres } } = await axios.get(`${mainUrl}/genre/movie/list?api_key=${apiKey}`)
      setGenre(genres);    
      console.log(genres);
    }

    fetchUpcoming();
    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
    getGenres();
  }, [])
  

  return (
    <section className='home'>
      <div className='banner' style={
        {
        backgroundImage: popularMovies[8]?
        `url(${`${imgUrl}/${popularMovies[8].poster_path}`})` : "rgb(20,20,20)"
        }
      }>
      {popularMovies[8] && <h1>{popularMovies[8].original_title}</h1> }
      {popularMovies[8] && <p>{popularMovies[8].overview}</p> }

      <div>
        <button><BiPlay /> Play Now</button>
        <button><AiOutlinePlus /> My List</button>
      </div>
      
      </div>

      
      <div className='genreBox'>
        <h3>All Genres</h3>
        <div className="genre">
          {
            genre.map((item, index)=> (
              <Link key={index} to={`/genre/${item.id}`}>{item.name}</Link>
            ))
          }
        </div>
      </div>  

      
      <Row title='Upcoming Movies' movies={upcomingMovies} />
      <Row title='Top Rated' movies={topRatedMovies} />
      <Row title='Popular Movies' movies={popularMovies} />
      <Row title='Now Playing' movies={nowPlayingMovies} />
          

    </section>
  )
}

export default Home