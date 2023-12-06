import { Koffing } from 'koffing';

// console.log(await fetchPaste('https://pokepast.es/d52689965a735213'))

// This I kinda figured out on my own by just reading the documentation
export default async function fetchPaste(url) {
	/*
	 * Ok so
	 * This code *should* work
	 * I'm like 90% sure of that
	 * The problem is CORS
	 * While it's good for them to have good web security
	 * It also makes this code not work unless I move this code to the backend
	 * Which I don't want to do
	 */
	const response = await fetch(url)
	const body = await response.text()

  let document = new DOMParser().parseFromString(body, 'text/html')

	let title = document.getElementsByTagName('h1')[0].textContent

	let pokemon_sets = document.getElementsByTagName('article')

	let full_sets = [...pokemon_sets].map((x) => x.textContent?.trim())
	let parsedTeam = Koffing.parse(full_sets.join('\n\n'))
	// console.log(parsedTeam)

	// This would have worked but Ogerpon kinda screwed it up
	// Alas, I must have an additional dependency
	// let pokemon_names = [...pokemon_sets].map((x) => x.getElementsByTagName('span')[0].textContent?.toLowerCase())
	let pokemon_names = parsedTeam.teams[0].pokemon.map((x) => x.name?.toLowerCase())

	let author_by = document.getElementsByTagName('h2')[0].textContent
	if (author_by?.trim().startsWith('by ')) {
		author_by = author_by?.trim().replace('by ', '')
	} else {
		author_by = ''
	}

	let description = document.getElementsByTagName('p')[0].textContent
	if (description?.startsWith('Format: ')) {
		description = description.replace('Format: ', '')
	} else {
		description = ''
	}

	let output =  {
		pokepaste_url: url,
		pokemon: pokemon_names,
		title: title ? title : '',
		author: author_by,
		format: description
	}

	return output
}
