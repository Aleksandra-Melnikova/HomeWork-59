import * as React from 'react';
import { useEffect } from 'react';
interface FilmInputProps {
  name: string;
  onDelete: React.MouseEventHandler;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}



const FilmInput:React.FC<FilmInputProps> = React.memo(({name, onDelete, id, onChange}) => {
  useEffect(() => {
    console.log('UseEffectPostCard - mount');
  }, []);




  return (
    <div className="text-center row justify-content-between mb-3 ">
     <input onChange={onChange} className='col-10 ms-3 mb-2 p-2' value={name} name={name} />
      <button type='button' onClick={(e)=>onDelete(e)} className="btn btn-close col-2 me-auto ms-auto mt-2">{id}</button>
    </div>
  );
},(prevProps, nextProps) =>{
  return prevProps.name === nextProps.name  && prevProps.onChange===nextProps.onChange;
});

export default FilmInput;