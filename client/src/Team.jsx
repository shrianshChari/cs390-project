import SpriteList from './Sprite'
import './styles/Team.css'


export default function Team({ team }) {
  return (
    <div className="card">
      <SpriteList pokemonList={team.pokemon} />
      <h2>{team.title}</h2>
      <Author author={team.author} />
      {/* rel="noreferrer" kinda came from eslint giving warnings and me being like "Sure, whatever." */}
      <a href={team.pokepaste_url} target="_blank" rel="noreferrer">Link</a>
      <Format format={team.format} />
    </div>
  )
}

// https://react.dev/learn/conditional-rendering
function Author({ author }) {
  if (author.length === 0) {
    return null;
  }
  return <h3>by {author}</h3>
}

function Format({ format }) {
  if (format.length === 0) {
    return null;
  }
  return <p>Format: {format}</p>
}
