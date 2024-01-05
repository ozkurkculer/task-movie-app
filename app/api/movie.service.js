
const URL = "https://api.themoviedb.org/";
const API_KEY = process.env.NEXT_PUBLIC_API;

const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

const getPopularMovies = async () => {
    const url = URL + '3/movie/popular?language=en-US&page=1';

    const res = await fetch(url, options).then(res => res.json()).then(
        (res) => {
            const imagePaths = res.results.reduce((acc, cur) => {
                acc.push({poster_path: cur.poster_path, movieID: cur.id});
                return acc;
            }, []);

            return imagePaths;
        }
    )
        .catch(err => console.error('error:' + err));

    return res;
}

const getTopRatedMovies = async () => {
    const url = URL + '3/movie/top_rated?language=en-US&page=1'

    const res = await fetch(url, options).then(res => res.json()).then(
        (res) => {
            res = res.results.slice(0, 10)
            const imagePaths = res.reduce((acc, cur) => {
                acc.push({poster_path: cur.poster_path, movieID: cur.id});
                return acc;
            }, []);

            return imagePaths;
        }
    )
        .catch(err => console.error('error:' + err));

    return res;
}

const getNowPlayingMovies = async () => {
    const url = URL + "/3/movie/now_playing?language=en-US&page=1";

    const res = await fetch(url, options).then(res => res.json()).then(
        (res) => {
            const imagePaths = res.results.reduce((acc, cur) => {
                acc.push({poster_path: cur.poster_path, movieID: cur.id});
                return acc;
            }, []);

            return imagePaths;
        }
    )
        .catch(err => console.error('error:' + err));

    return res;

}

const getUpcomingMovies = async () => {
    const url = URL + '3/movie/upcoming?language=en-US&page=1';

    const res = await fetch(url, options).then(res => res.json()).then(
        (res) => {
            const imagePaths = res.results.reduce((acc, cur) => {
                acc.push({poster_path: cur.poster_path, movieID: cur.id});
                return acc;
            }, []);

            return imagePaths;
        }
    )
        .catch(err => console.error('error:' + err));

    return res;

}

const MovieService = {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getUpcomingMovies,
}

export default MovieService;