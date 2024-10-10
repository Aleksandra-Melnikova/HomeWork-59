import React from "react";
interface JokeBlockProps {
  joke: string;
}

const JokeBlock: React.FC<JokeBlockProps> = ({ joke }) => {
  return (
    <div>
      <div className="text-center m-auto w-50 h-auto mb-3 p-4 bg-info rounded-3">
        <p className="fs-5">{joke}</p>
      </div>
    </div>
  );
};

export default JokeBlock;
