"use client"

import DetailService from '@/app/api/detail.service';
import { useEffect, useState } from 'react'
import Tabs from '@/app/components/Tabs';

import icons from '@/app/lib/icons';
import Comment from '@/app/components/Comment';
import ActorCard from '@/app/components/ActorCard';
import Loading from '@/app/loading';

function Detail({ params }) {

  const [movieCast, setMovieCast] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieReviews, setMovieReviews] = useState([]);
  const [aboutMovie, setAboutMovie] = useState();

  useEffect(() => {
    fetchMovieDetail();
    fetchMovieCast();
    fetchReviews();
  }, [])

  const fetchMovieCast = async () => {
    try {
      const casting = await DetailService.getMovieCredits(params.slug);
      setMovieCast(casting.cast);
    } catch (error) {
      console.error('Error fetching movie cast:', error);
    }
  };
  const fetchMovieDetail = async () => {
    const detail = await DetailService.getMovieDetail(params.slug);
    setMovieDetail(detail);
    setAboutMovie(detail.overview);
  };

  const fetchReviews = async () => {
    const reviews = await DetailService.getMovieReviews(params.slug);
    setMovieReviews(reviews);
  }

  const reviews = () => {
    if (movieReviews.length != 0) {
      return (movieReviews.map((data, index) => (
        <Comment data={data} key={index} />
      )))
    }
    else {
      return <p className='text-white'>There is no reviews in this movie.</p>;
    }
  };

  const cast = () => {
    if (movieCast.length != 0) {
      return (movieCast.map((data, index) => {
        return <ActorCard data={data} key={index} />
      }));
    }
    else {
      return <p className='text-white'>There is no movie cast in this movie.</p>;
    }
  }


  const tabs = [
    { id: 'about', label: 'About Movie', content: <p className='text-white'>{aboutMovie}</p> },
    { id: 'reviews', label: 'Reviews', content: <div className='pb-20'>{reviews()}</div> },
    { id: 'cast', label: 'Cast', content: <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-10 gap-3'>{cast()}</div> },
  ];

  return Object.keys(movieDetail).length !== 0 ? (
    <div className="w-screen h-screen flex flex-col pb-10" >
      <section className='h-1/3'>
        <img src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path} alt="Movie Cover" className='w-screen h-full object-cover' />
        <div className="px-[38%] md:px-[25%] lg:px-[20%] xl:px-[18%] pt-2">
          <h1 className='text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl '>{movieDetail.original_title}</h1>
          <div className="flex flex-row text-xs text-nowrap pt-1">
            <p className='flex flex-row gap-1 md:gap-2 items-center text-grey border-r-2 border-grey pr-1 md:pr-4 '>
              {icons.calendar} {movieDetail.release_date.slice(0,4)}
            </p>
            <p className='flex flex-row gap-1 md:gap-2 items-center text-grey border-r-2 border-grey px-1 md:px-4 '>
              {icons.clock} {movieDetail.runtime} Dakika
            </p>
            <p className='flex flex-row gap-1 md:gap-2 items-center text-grey pl-1 md:pl-4 '>
              {icons.ticket} {movieDetail.genres[0].name}
            </p>
          </div>
        </div>
        <div className={`relative left-[10%] bottom-[50%] xl:bottom-[58%] 2xl:bottom-[49%] h-auto w-[100px]`}>
        <img src={'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path} alt={`Movie Poster`} className="rounded-2xl" />
      </div>
      </section>
      <section className='w-screen h-2/3 flex-grow px-6 md:px-32 xl:px-32 mt-40 sm:mt-16 md:mt-20'>
        <Tabs tabs={tabs} />
      </section>
    </div>) : <Loading />
}

export default Detail