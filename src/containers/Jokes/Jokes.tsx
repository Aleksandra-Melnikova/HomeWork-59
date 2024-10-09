import { useEffect, useState } from "react";
import ButtonGetJoke from "../../components/ButtonGetJoke/ButtonGetJoke.tsx";
import JokeBlock from "../../components/JokeBlock/JokeBlock.tsx";

const Jokes = () => {
  const [joke, setJoke] = useState<string>("");
  const [click, setClick] = useState<boolean>(true);
  const url = "https://api.chucknorris.io/jokes/random";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const joke = await response.json();
        setJoke(joke.value);
      }
    };
    void fetchData();
  }, [click]);
  const AddNewJoke = () => {
    setClick(!click);
  };
  return (
    <>
      <div>
        <div className="row h-50 mt-5 flex-column justify-content-between align-items-center">
          <ButtonGetJoke AddNewJoke={AddNewJoke} />
          <JokeBlock joke={joke} />
        </div>
      </div>
    </>
  );
};

export default Jokes;
