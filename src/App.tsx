import "./App.css";
import Movies from "./containers/Movies/Movies.tsx";
import Jokes from "./containers/Jokes/Jokes.tsx";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState<boolean>(true);
  return (
    <>
      <button
        className="btn btn-primary ms-2 mt-2"
        onClick={() => setPage(!page)}
      >
        Change exe
      </button>
      {page ? <Movies /> : <Jokes />}
    </>
  );
};

export default App;
