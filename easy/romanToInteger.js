/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	// mapeia cada símbolo romano para seu valor inteiro.
	const simbolos = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;

	for (let i = 0; i < s.length; i++) {
		const valorAtual = simbolos[s[i]];
		const valorProximo = simbolos[s[i + 1]];

		// se o próximo símbolo for maior que o atual, subtrai o valor atual.
		if (valorProximo && valorAtual < valorProximo) {
			total += valorProximo - valorAtual;
			i++; // pula o próximo símbolo
		} else {
			total += valorAtual;
		}
	}

	return total;
};
