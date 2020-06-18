import DIACRITICS_MAP from './string-diacriticsmap'

export function removeDiacritics(str) {
	for (let repl in DIACRITICS_MAP) {
		const match = DIACRITICS_MAP[repl]
		str = str.replace(match, repl)
	}
	return str
}

export function normalizeSimilar(str) {
	str = str.trim()
	str = removeDiacritics(str)
	str = str.toLowerCase()
	return str
}

export function containsSimilar(str, substr) {
	str = normalizeSimilar(str)
	substr = normalizeSimilar(substr)
	return str.indexOf(substr) !== -1
}
