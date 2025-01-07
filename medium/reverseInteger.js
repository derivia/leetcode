/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let reversed = 0;
	const isNegative = x < 0;
	x = Math.abs(x);

	while (x > 0) {
		const digit = x % 10;
		reversed = reversed * 10 + digit; // concatena o dígito ao número revertido
		x = Math.floor(x / 10);
	}

	if (isNegative) {
		reversed = -reversed; // restaura o sinal negativo
	}

	if (reversed > 2147483647 || reversed < -2147483648) {
		return 0;
	}

	return reversed;
};
