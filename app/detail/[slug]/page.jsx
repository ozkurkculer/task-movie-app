"use client"

import DetailService from '@/app/api/detail.service';
import { useEffect, useState } from 'react'
import ImagePoster from '@/app/components/ImagePoster';

import icons from '@/app/lib/icons';

function Detail({ params }) {
  const [movieDetail, setMovieDetail] = useState({})

  useEffect(() => {
    fetchMovieDetail();
  }, [])

  const fetchMovieDetail = async () => {
    const detail = await DetailService.getMovieDetail(params.slug);
    setMovieDetail(detail);
    console.log(detail);
  };

  return (
    <div className="w-screen h-screen">
      <section className='w-full h-1/3'>
        <div className="flex h-full">
          <img src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path} alt="Movie Cover" className='w-full h-auto object-cover top-0 pb-8' />
        </div>
        <div className="flex flex-col gap-4 px-[42%] sm:px-[20%] md:px-[25%] lg:px-[25%] ">
            <h1 className='text-white text-4xl font-bold'>{movieDetail.original_title}</h1>
            <div className="flex flex-row justify-center">
              <p className='flex flex-row gap-2 items-center text-grey border-r-2 border-grey px-3'>
                {icons.calendar} {movieDetail.release_date.slice(0,4)}
              </p>
              <p className='flex flex-row gap-2 items-center text-grey border-r-2 border-grey px-3'>
                {icons.clock} {movieDetail.runtime} Dakika
              </p>  
              <p className='flex flex-row gap-2 items-center text-grey px-3'>
                {icons.ticket} {movieDetail.genres[0].name}
              </p>
            </div>
        </div>
        <div className="relative">
          <ImagePoster path={movieDetail.poster_path} classes="absolute -bottom-[10%] left-[10%] h-auto w-[100px] rounded-2xl" />
        </div>
      </section>
      <section className=''>
        

      </section>
    </div>
  )
}

export default Detail