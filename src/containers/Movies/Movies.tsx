import AddFilmForm from '../../components/AddFilmForm/AddFilmForm.tsx';
import { IMovie } from '../../types';
import { useState } from 'react';
import FilmInput from '../../components/FilmInput/FilmInput.tsx';


const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    {
      id:'1',
      name: "Film1",
    },

    {
      id:'2',
      name: "Film2",
    },
    {
      id:'3',
      name: "Film3",
    },
  ]);



  const addNewFilm = (newFilm: IMovie) => {
    setMovies((prevState) => [...prevState, newFilm]);
  };
  const deleteMovie = (id: string) => {
    // const index = movies.findIndex(movie => movie.id === id);
    // console.log(index);
    //
    // const copyMovies = movies.splice(index, 1);
    // console.log(copyMovies);
    const copyMovies = movies.filter((person) => person.id !== id);
 console.log(copyMovies);
    setMovies(copyMovies);
  };
  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>, id:string) =>{
    const index = movies.findIndex(movie => movie.id === id);
    const copyMovies = [...movies];
    const copyMovie = {...copyMovies[index]};
    copyMovie.name = e.target.value;
    copyMovies[index]=copyMovie;
    setMovies(copyMovies);
  };

  return (
    <div className='container'>
      <div className='w-75 mt-5 ms-auto me-auto'>
      <AddFilmForm addNewFilm={addNewFilm}/>
        <h5 className='mt-3 mb-3 '>To watch list:</h5>

      {movies.map((movie) => (
        <FilmInput key={movie.id} name={movie.name} id={movie.id} onChange={(e) => changeMovie(e, movie.id)} onDelete={() => deleteMovie(movie.id)} />
      ))}

      </div>
    </div>
  );
};

export default Movies;