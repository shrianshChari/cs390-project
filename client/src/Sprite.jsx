import './styles/Sprite.css'

/*
 * Ok, so this function is incomplete because this would ideally be used to
 * display sprites of the Pokemon. However, though I've gotten an idea of how I
 * would implement it, I also just don't have the time to do so.
 * Here are the resources that I would use:
 * Spritesheet of Pokemon icons from Pokemon Showdown:
 * https://play.pokemonshowdown.com/sprites/pokemonicons-sheet.png
 * Code that would allow me to get the correct Pokemon from the spritesheet:
 * https://github.com/smogon/pokemon-showdown-client/blob/master/play.pokemonshowdown.com/src/battle-dex.ts#L707
 */

export default function SpriteList({ pokemonList }) {
  return (<div className='align'>
    {pokemonList.map((pokemon, i) => <Sprite pokemonName={pokemon} key={i} />)}
  </div>
  )
}

function Sprite({ pokemonName }) {
  return (
    <p className='align-elements'>:{pokemonName}:</p>
  )
}
