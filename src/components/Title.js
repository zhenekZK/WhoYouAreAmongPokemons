import React from "react";

const Title = props => {
  const { title, userName, pokemonName } = props;
  return (
    <div className="title-wrapper">
      {console.log(title.isDefault)}
      <p className="title">
        {title.isDefault
          ? "Who You Are Among Pokemons?"
          : `Congratulations, ${userName}! you are ${pokemonName}`}
      </p>
    </div>
  );
};

export default Title;
