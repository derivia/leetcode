/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	// variáveis apenas para diminuir tamanho do código
	let hayLen = haystack.length;
	let neeLen = needle.length;

	// verifica cada substring de tamanho neeLen dentro da string até o final
	for (let i = 0, j = neeLen; j <= hayLen; i++, j++) {
		if (haystack.substring(i, j) === needle) {
			return i;
		}
	}
	return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
