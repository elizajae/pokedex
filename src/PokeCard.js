const PokeCard = ({ name, id, type, base_experience }) => {
    return (
        <div className="PokeCard">
            <h3>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
            <p className='type'>Type: {type}</p>
            <p className='exp'>EXP: {base_experience}</p>
        </div>
    )
};

export default PokeCard;