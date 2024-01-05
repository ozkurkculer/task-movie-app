"use client"

import { useEffect, useState } from "react"
import MovieService from "./api/movie.service"
import ImagePoster from "./components/ImagePoster"
import Tabs from "./components/Tabs"

export default function Home() {
  const [popularMoviePosterPaths, setPopularMoviePosterPaths] = useState([]);
  const [nowPlayingMoviePosterPaths, setNowPlayingMoviePosterPaths] = useState([]);
  const [topRatedMoviePosterPaths, setTopRatedMoviePosterPaths] = useState([]);
  const [upcomingMoviePosters, setUpcomingMoviePosters] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchNowPlayingMovies();
    fetchUpcomingMovies();
  }, [])

  const fetchPopularMovies = async () => {
    const paths = await MovieService.getPopularMovies();
    setPopularMoviePosterPaths(paths);
  };

  const fetchTopRatedMovies = async () => {
    const paths = await MovieService.getTopRatedMovies();
    setTopRatedMoviePosterPaths(paths);
  };

  const fetchNowPlayingMovies = async () => {
    const paths = await MovieService.getNowPlayingMovies();
    setNowPlayingMoviePosterPaths(paths);
  };

  const fetchUpcomingMovies = async () => {
    const paths = await MovieService.getUpcomingMovies();
    setUpcomingMoviePosters(paths);
  };

  const topRatedSlider = topRatedMoviePosterPaths.map((path, index) => (
    <ImagePoster path={path} key={index} num={index + 1} mainClasses="h-auto w-[200px] sm:w-[220px] md:w-[320px] lg:w-[350px]" classes="rounded-2xl" />
  ));

  const topRatedPosters = topRatedMoviePosterPaths.map((path, index) => (
    <ImagePoster path={path} key={index} mainClasses="h-auto w-[100px] sm:w-[110px] md:w-[160px] lg:w-[200px]" classes="rounded-2xl" />
  ));

  const popularPosters = popularMoviePosterPaths.map((path, index) => (
    <ImagePoster path={path} key={index} mainClasses="h-auto w-[100px] sm:w-[110px] md:w-[160px] lg:w-[200px]" classes="rounded-2xl" />
  ));

  const nowPlayingPosters = nowPlayingMoviePosterPaths.map((path, index) => (
    <ImagePoster path={path} key={index} mainClasses="h-auto w-[100px] sm:w-[110px] md:w-[160px] lg:w-[200px]" classes="rounded-2xl" />
  ));

  const upcomingPosters = upcomingMoviePosters.map((path, index) => (
    <ImagePoster path={path} key={index} mainClasses="h-auto w-[100px] sm:w-[110px] md:w-[160px] lg:w-[200px]" classes="rounded-2xl" />
  ));

  const tabs = [
    { id: 'nowplaying', label: 'Now Playing', content: <>{nowPlayingPosters}</> },
    { id: 'upcoming', label: 'Upcoming', content: <>{upcomingPosters}</> },
    { id: 'toprated', label: 'Top Rated', content: <>{topRatedPosters}</> },
    { id: 'popular', label: 'Popular', content: <>{popularPosters}</> },
  ];


  return (
    <div className='w-full h-full pt-12 px-6'>
      <h1 className="text-white font-bold text-3xl my-6">What do you want to watch?</h1>
      <div className="w-full flex items-center justify-between h-10 px-6 text-secondary bg-[#3A3F47] rounded-xl">
        <p>Search</p>
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Search">
            <g id="Search_2">
              <ellipse id="Ellipse_739" cx="10.7885" cy="11.7666" rx="8.14181" ry="8.98856" stroke="#67686D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path id="Line_181" d="M16.4513 18.4851L19.6433 22" stroke="#67686D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex flex-row gap-3 my-5">
          {topRatedSlider}
        </div>
      </div>
      <section className="flex justify-center">
        <Tabs tabs={tabs} />
      </section>
    </div>
  )
}
