import PokeCard from "./PokeCard";

const PokeDex = ({ data }) => {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="PokeDex">
        {/* this is a forEach  */}
        {data.map((pokemon, key) => (
          <PokeCard key={key} name={pokemon.name} id={pokemon.id} type={pokemon.type} base_experience={pokemon.base_experience} />
        ))}
      </div>
    </div>
  );
};

export default PokeDex;
