/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	// condições de parada iniciais
	// 1. se o número for negativo, não é um palíndromo.
	// 2. se o número terminar com 0 e não for 0, não é um palíndromo.
	if (x < 0 || (x % 10 === 0 && x !== 0)) {
		return false;
	}

	let metadeInvertida = 0;

	// enquanto o número original (x) for maior que a metade invertida continuamos
	// o processo de inversão.
	while (x > metadeInvertida) {
		// adiciona o último dígito de `x` a `metadeInvertida`.
		// exemplo: se `x = 123` e `metadeInvertida = 0`,
		// então metadeInvertida = 0 * 10 + 3 = 3
		metadeInvertida = metadeInvertida * 10 + (x % 10);

		// remove o último dígito de `x`.
		x = Math.floor(x / 10);
	}

	// quando o número tem um número par de dígitos, x == metadeInvertida.
	// quando o número tem um número ímpar de dígitos, x == Math.floor(metadeInvertida / 10).
	return x === metadeInvertida || x === Math.floor(metadeInvertida / 10);
};
