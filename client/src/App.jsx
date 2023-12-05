import './styles/normalize.css'
import './styles/App.css';

import React, { StrictMode } from 'react';

import Team from './Team';
import ModalForm from './ModalForm';


function App() {
  const [teamList, setTeamList] = React.useState(teams)

  return (
    <div className="App">
      <StrictMode>
        <ModalForm />
      </StrictMode>

      {teamList.map((team, i) => <Team team={team} key={i} />)}
    </div>
  );
}

export default App;

let teams = [
  {
    author: "Grabby",
    collectionId: "v0bqh55janic982",
    collectionName: "pokepastes",
    created: "2023-10-31 01:40:33.273Z",
    format: "gen8bdspou",
    id: "tam6gmivlvvkp8e",
    pokemon: [ "heatran", "celebi", "suicune", "togekiss", "alakazam", "swampert" ],
    pokepaste_url: "https://pokepast.es/21f11f458fa84664",
    title: "Something Togekiss 2 :kissladen:",
    updated: "2023-10-31 01:40:33.273Z"
  }, {
    author: "Grabby",
    collectionId: "v0bqh55janic982",
    collectionName: "pokepastes",
    created: "2023-10-31 19:21:51.889Z",
    format: "gen8bdspou",
    id: "t60wfnmkwt77h59",
    pokemon: [ "skarmory", "starmie", "magnezone", "garchomp", "latios", "lucario" ],
    pokepaste_url: "https://pokepast.es/b5f43fa1fa0f13da",
    title: "Custap Skarm DragMag HO 2",
    updated: "2023-10-31 19:21:51.889Z"
  }, {
    author: "Grabby",
    collectionId: "v0bqh55janic982",
    collectionName: "pokepastes",
    created: "2023-10-31 19:26:59.052Z",
    format: "gen8bdspou",
    id: "eygp43ocjy7vuzx",
    pokemon: [ "skarmory", "blissey", "garchomp", "rotom-wash", "clefable", "starmie" ],
    pokepaste_url: "https://pokepast.es/d58a3bbd713f0c4e",
    title: "SkarmBliss Mie Semistall",
    updated: "2023-10-31 19:26:59.052Z"
  }, {
    author: "Grabby",
    collectionId: "v0bqh55janic982",
    collectionName: "pokepastes",
    created: "2023-11-01 16:06:57.607Z",
    format: "gen3ou",
    id: "bm49wx04fmiu9ap",
    pokemon: [ "tyranitar", "zapdos", "aerodactyl", "skarmory", "flygon", "blissey" ],
    pokepaste_url: "https://pokepast.es/f554a2135b805cf4",
    title: "ADV Stuff 5",
    updated: "2023-11-01 16:06:57.607Z"
  }, {
    author: "Grabby",
    collectionId: "v0bqh55janic982",
    collectionName: "pokepastes",
    created: "2023-11-01 16:07:52.674Z",
    format: "gen3ou",
    id: "vngbj35jhf8fm3f",
    pokemon: [ "tyranitar", "swampert", "celebi", "charizard", "metagross", "salamence" ],
    pokepaste_url: "https://pokepast.es/4eeb3ca70c2fd8a2",
    title: "zard ddmence (zerkas)",
    updated: "2023-11-01 16:07:52.674Z"
  }, {
    author: "Tb0lt",
    collectionId: "v0bqh55janic982",
    collectionName: "pokepastes",
    created: "2023-12-05 01:02:19.497Z",
    format: "gen5ou",
    id: "70ec0yi0nubwe7s",
    pokemon: [ "hippowdon", "reuniclus", "skarmory", "celebi", "excadrill", "tyranitar" ],
    pokepaste_url: "https://pokepast.es/4261261793200570",
    title: "Sand Semistall",
    updated: "2023-12-05 01:02:19.497Z"
  }, {
    author: "Tb0lt",
    collectionId: "v0bqh55janic982",
    collectionName: "pokepastes",
    created: "2023-12-05 01:03:42.303Z",
    format: "gen5ou",
    id: "xsml6ejqy9fmouw",
    pokemon: [ "tyranitar", "keldeo", "heatran", "excadrill", "landorus-therian", "celebi" ],
    pokepaste_url: "https://pokepast.es/b93299609609f0dd",
    title: "SpecsKeld ScarfTar 2.5",
    updated: "2023-12-05 01:03:42.303Z"
  }
]
