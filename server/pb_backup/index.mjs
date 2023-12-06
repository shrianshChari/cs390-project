import PocketBase from 'pocketbase'

let teams = [
  {
    author: "Tb0lt",
    format: "gen5ou",
    pokemon: ["tyranitar", "keldeo", "heatran", "excadrill", "landorus-therian", "celebi"],
    pokepaste_url: "https://pokepast.es/b93299609609f0dd",
    title: "SpecsKeld ScarfTar 2.5",
  }, {
    author: "Tb0lt",
    format: "gen5ou",
    pokemon: ["hippowdon", "reuniclus", "skarmory", "celebi", "excadrill", "tyranitar"],
    pokepaste_url: "https://pokepast.es/4261261793200570",
    title: "Sand Semistall",
  }, {
    author: "Grabby",
    format: "gen3ou",
    pokemon: ["tyranitar", "swampert", "celebi", "charizard", "metagross", "salamence"],
    pokepaste_url: "https://pokepast.es/4eeb3ca70c2fd8a2",
    title: "zard ddmence (zerkas)",
  }, {
    author: "Grabby",
    format: "gen3ou",
    id: "bm49wx04fmiu9ap",
    pokemon: ["tyranitar", "zapdos", "aerodactyl", "skarmory", "flygon", "blissey"],
    pokepaste_url: "https://pokepast.es/f554a2135b805cf4",
    title: "ADV Stuff 5",
  }, {
    author: "Grabby",
    format: "gen8bdspou",
    id: "eygp43ocjy7vuzx",
    pokemon: ["skarmory", "blissey", "garchomp", "rotom-wash", "clefable", "starmie"],
    pokepaste_url: "https://pokepast.es/d58a3bbd713f0c4e",
    title: "SkarmBliss Mie Semistall",
  }, {
    author: "Grabby",
    format: "gen8bdspou",
    id: "t60wfnmkwt77h59",
    pokemon: ["skarmory", "starmie", "magnezone", "garchomp", "latios", "lucario"],
    pokepaste_url: "https://pokepast.es/b5f43fa1fa0f13da",
    title: "Custap Skarm DragMag HO 2",
  }, {
    author: "Grabby",
    format: "gen8bdspou",
    id: "tam6gmivlvvkp8e",
    pokemon: ["heatran", "celebi", "suicune", "togekiss", "alakazam", "swampert"],
    pokepaste_url: "https://pokepast.es/21f11f458fa84664",
    title: "Something Togekiss 2 :kissladen:",
  }
]

const pb = new PocketBase('http://localhost:8090')

teams.reverse()

for (let team of teams) {
  await pb.collection('pokepastes').create(team)
}
