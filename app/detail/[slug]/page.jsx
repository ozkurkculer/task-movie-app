"use client"

import DetailService from '@/app/api/detail.service';
import { useEffect, useState } from 'react'
import ImagePoster from '@/app/components/ImagePoster';
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
  const [castValues, setCastValues] = useState();

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

  // Use useEffect to log the state after it's updated
  useEffect(() => {
    setCastValues(cast())
  }, [movieCast]);

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
        <ActorCard data={data} key={index} />
      }));
    }
    else {
      return <p className='text-white'>There is no movie cast in this movie.</p>;
    }
  }


  const tabs = [
    { id: 'about', label: 'About Movie', content: <p className='text-white'>{aboutMovie}</p> },
    { id: 'reviews', label: 'Reviews', content: <div>{reviews()}</div> },
    { id: 'cast', label: 'Cast', content: <div>{castValues}</div> },
  ];

  return Object.keys(movieDetail).length === 0 ? (
    <div className="w-screen h-screen flex flex-col" >
      <section className='h-1/3'>
        <img src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path} alt="Movie Cover" className='w-full h-full object-cover' />
        <div className="px-[36%] md:px-[25%] lg:px-[20%] xl:px-[18%]">
          <h1 className='text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>{movieDetail ? movieDetail.original_title : 'TITLE'}</h1>
          <div className="flex flex-row text-xs text-nowrap">
            <p className='flex flex-row gap-2 items-center text-grey border-r-2 border-grey pr-4'>
              {icons.calendar} {movieDetail.release_date.slice}
            </p>
            <p className='flex flex-row gap-2 items-center text-grey border-r-2 border-grey px-4'>
              {icons.clock} {movieDetail.runtime} Dakika
            </p>
            <p className='flex flex-row gap-2 items-center text-grey pl-4'>
              {icons.ticket} {movieDetail.genres[0].name}
            </p>
          </div>
        </div>
        <ImagePoster path={movieDetail.poster_path} mainClasses="absolute left-[10%] bottom-[50%] xl:bottom-[58%] 2xl:bottom-[49%] h-auto w-[100px]" classes="rounded-2xl" />
      </section>
      <section className='w-full h-2/3 flex-grow px-6 md:px-32 xl:px-32  mt-16'>
        <Tabs tabs={tabs} />
      </section>
    </div>) : <Loading />
}

export default Detail