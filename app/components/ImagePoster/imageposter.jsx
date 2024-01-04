function ImagePoster({ path, num, classes, mainClasses }) {
  return (
    <div className={`relative ${mainClasses}`}>
      <img src={'https://image.tmdb.org/t/p/w500' + path} alt={`Movie Poster`} className={classes} />
      <p className="absolute bottom-0 left-0 text-7xl font-black poster-text z-10">{num}</p>
    </div>
  )
}

export default ImagePoster