import { useEffect, useState } from "react";
import ButtonGetJoke from "../../components/ButtonGetJoke/ButtonGetJoke.tsx";
import JokeBlock from "../../components/JokeBlock/JokeBlock.tsx";

const Jokes = () => {
  const [jokes, setJokes] = useState<string[]>([]);
  const [click, setClick] = useState<boolean>(true);

  useEffect(() => {
    const url: string = "https://api.chucknorris.io/jokes/random";
    const urlArray: string[] = [];
    for (let i = 0; i < 5; i++) {
      urlArray.push(url);
    }
    const fetchData = async () => {
      const result = await Promise.all(urlArray.map((url) => fetch(url))).then(
        (result) => Promise.all(result.map((r) => r.json())),
      );
      setJokes(result.map((r) => r.value));
    };
    void fetchData();
  }, [click]);

  const AddNewJoke = () => {
    setClick((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <div className="row h-50 mt-5 flex-column justify-content-between align-items-center">
          <ButtonGetJoke AddNewJoke={AddNewJoke} />
          {jokes.map((joke) => (
            <JokeBlock key={joke} joke={joke} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jokes;
