import SpriteList from './Sprite'
import './styles/Team.css'


export default function Team({ team }) {
  return (
    <div className="card">
      <SpriteList pokemonList={team.pokemon} />
      <h2>{team.title}</h2>
      <h3>by {team.author}</h3>
      {/* rel="noreferrer" kinda came from eslint giving warnings and me being like "Sure, whatever." */}
      <a href={team.pokepaste_url} target="_blank" rel="noreferrer">Link</a>
      <p>Format: {team.format}</p>
    </div>
  )
}
