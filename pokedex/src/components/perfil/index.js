import './perfil.css'

const Perfil = ({ pokemon }) => {
  const { id, name, types, abilities } = pokemon
  return (
    <div className="perfil">
      <header className="header">
        <div className="perfil-image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${id}.png`} alt={name} />
        </div>
        <h1 className="poke-name">{name}</h1>
        <div className="types">
          {types.map(type => <p className={`type ${type.toLowerCase()}`}>{type}</p>)}
        </div>
        <div className="abilities">
          <h2>Abilities</h2>
          {abilities.map(ability => <p className="ability">{ability}</p>)}
        </div>
      </header>
    </div>
  )
}

export default Perfil