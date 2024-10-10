import React from "react";

interface ButtonGetJokeProps {
  AddNewJoke: React.MouseEventHandler;
}

const ButtonGetJoke: React.FC<ButtonGetJokeProps> = React.memo(
  ({ AddNewJoke }) => {
    return (
      <div>
        <button
          type="button"
          className="btn p-2 btn-primary d-block mt-5 w-auto mb-5 me-auto ms-auto"
          onClick={AddNewJoke}
        >
          Get new joke
        </button>
      </div>
    );
  },
  () => {
    return true;
  },
);

export default ButtonGetJoke;
