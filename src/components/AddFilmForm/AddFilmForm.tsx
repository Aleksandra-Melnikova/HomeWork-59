import { useState } from "react";
import { IMovie, IMovieMutation } from '../../types';
import * as React from "react";


interface Props {
  addNewFilm: (film: IMovie) => void;
}

const AddFilmForm:React.FC<Props> = ({addNewFilm}) => {
  const [newFilm, setNewFilm] = useState<IMovieMutation>({
    name: "",
  });

  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };



  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      newFilm.name.trim().length === 0
    ) {
      alert("Заполните все поля!");
    } else {
      addNewFilm({
        id: String(Math.floor(Math.random() * 1000)),
        ...newFilm,
      });

      setNewFilm({
        name: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='row align-items-center justify-content-between'>
        <div className="form-group mb-2 col-10">
          <label htmlFor="name" className='fs-3'>New film:</label>
          <input
            type="text"
            onChange={changeMovie}
            value={newFilm.name}
            id="name"
            name="name"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary col-2 mt-3">
          Add
        </button>
        </div>
      </form>
    </>
  );
};

export default AddFilmForm;
