/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 0) return "";

	let prefixo = strs[0];

	for (let i = 1; i < strs.length; i++) {
		// enquanto o prefixo não for um prefixo da string atual, reduz o prefixo
		while (strs[i].indexOf(prefixo) !== 0) {
			prefixo = prefixo.slice(0, -1); // remove o último caractere do prefixo
			// se o prefixo for vazio, não há prefixo comum
			if (prefixo === "") return "";
		}
	}

	return prefixo;
};
