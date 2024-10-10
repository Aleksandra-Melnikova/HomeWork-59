import AddFilmForm from "../../components/AddFilmForm/AddFilmForm.tsx";
import { IMovie } from "../../types";
import { useCallback, useState } from 'react';
import FilmInput from "../../components/FilmInput/FilmInput.tsx";

const Movies = () => {



  const [movies, setMovies] = useState<IMovie[]>([
    { id: "1", name: "Film1" },
    { id: "2", name: "Film2" },
    { id: "3", name: "Film3" },
  ]);

  const addNewFilm = (newFilm: IMovie) => {
    setMovies((prevState) => [...prevState, newFilm]);
  };

  const deleteMovie = useCallback(
    (id: string) => {
      setMovies((movies) => movies.filter((movie) => movie.id !== id));
    },
    [],
  );

  const changeMovie = useCallback(
    (id: string, newValue: string) => {
      setMovies((movies) =>
        movies.map((movie) =>
          movie.id === id ? { ...movie, name: newValue } : movie
        )
      );
    },
    []
  );


  const handleChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    changeMovie(id, e.target.value);
  };

  const handleDelete = (id: string) => () => {
    deleteMovie(id);
  };

  return (
    <div className="container">
      <div className="w-75 mt-5 ms-auto me-auto">
        <AddFilmForm addNewFilm={addNewFilm} />
        <h5 className="mt-3 mb-3">To watch list:</h5>
        {movies.length === 0 ? (
          <div className="text-center mt-5">
            To watch list is empty, add new movie!
          </div>
        ) : (
          movies.map((movie) => (
            <FilmInput
              key={movie.id}
              name={movie.name}
              onChange={handleChange(movie.id)}
              onDelete={handleDelete(movie.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;

