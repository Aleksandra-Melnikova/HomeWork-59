import { useEffect, useState } from 'react';

// interface JokesState {
//   textJoke: string;
// }

const Jokes = () => {
  const [joke, setJoke] = useState<string[]>(['']);
  const [click, setClick] = useState<boolean>(true);
  const url ='https://api.chucknorris.io/jokes/random';

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(url);
      if(response.ok){
        const joke = await response.json();
        setJoke(joke.value);
      }

    };
    void fetchData();

  },[click]);
  const AddNewJoke = () =>{
  setClick(!click);
  }
  return (
    <>
      <button type='button' className='btn btn-primary ms-auto me-auto mt-5' onClick={AddNewJoke}>Get new joke</button>
      <div className='text-center m-auto w-50 h-auto p-4 bg-info rounded-3'>
        <p className='fs-5'>{joke}</p>
      </div>
    </>
  );
};

export default Jokes;