/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		// incrementa o elemento na posição `i` em 1
		if (digits[i] < 9) {
			digits[i]++;
			return digits;
		}
		digits[i] = 0;
	}
	// caso todos os números fossem 9: retorna 1 + 000...
	return [1, ...digits];
};
