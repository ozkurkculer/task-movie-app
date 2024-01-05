function ImagePoster({ path, num, classes, mainClasses }) {
  return (
    <div className={`relative ${mainClasses}`}>
      <img src={'https://image.tmdb.org/t/p/w500' + path} alt={`Movie Poster`} className={classes} />
      <p className="absolute pl-3 -bottom-5 -left-3 text-7xl font-black poster-text">{num}</p>
    </div>
  )
}

export default ImagePoster