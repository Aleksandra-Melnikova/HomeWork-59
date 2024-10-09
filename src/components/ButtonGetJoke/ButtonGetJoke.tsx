import React from "react";

interface ButtonGetJokeProps {
  AddNewJoke(): void;
}

const ButtonGetJoke: React.FC<ButtonGetJokeProps> = React.memo(
  ({ AddNewJoke }) => {
    console.log("button render");
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
);
export default ButtonGetJoke;
