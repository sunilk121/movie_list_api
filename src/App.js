import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { SearchForm } from "./components/form/SearchForm";
import { MovieList } from "./components/move-list/MovieList";
import { Title } from "./components/title/Title";
import { fetchMovie } from "./helpers/axiosHelper";

const App = () => {
  const [movie, setMovie] = useState({});
  const [movieList, setMovieList] = useState([]);

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);

    setMovie(movie.data);
  };

  const handleOnMovieDelete = (imdbID) => {
    const filteredList = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(filteredList);

    console.log(imdbID);
  };

  const handleOnSelect = (cat) => {
    //if Lazy selected
    //if all selected
  };
  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };

    //adding for the first time
    !movieList.length && setMovieList([obj]);

    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);
    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMovie({});
    } else {
      alert("Movie alreay in the List");
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} getMovie={getMovie} />
        <div className="d-flex justify-content-center mt-3">
          {movie.Response === "True" && (
            <CustomCard movie={movie} fun={handleOnAddToList} />
          )}

          {movie.Response === "False" && (
            <Alert variant="danger">{movie.Error}</Alert>
          )}
        </div>
        <hr />
        <MovieList
          movieList={movieList}
          handleOnMovieDelete={handleOnMovieDelete}
          handleOnSelect={handleOnSelect}
        />
      </Container>
    </div>
  );
};

export default App;
