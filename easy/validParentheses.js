/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const pares = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	const pilha = [];

	for (let char of s) {
		if (pares[char]) {
			// se o caractere for de fechamento, verifica se corresponde ao topo da pilha
			if (pilha.pop() !== pares[char]) {
				return false;
			}
		} else {
			// se for de abertura, adiciona à pilha
			pilha.push(char);
		}
	}

	// se a pilha estiver vazia, todos os caracteres foram fechados corretamente
	return pilha.length === 0;
};
